import { createClient } from "contentful";
import { EventDetails } from "../data/eventData";
import { Competition } from "../data/competitionData";
import { Executive, PortfolioDetails } from "../data/portfolioData";
import { Groups, Links, RevisionTile } from "src/data/revisionData";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_API_KEY as string
});

const fetchContentType = async (contentType: string): Promise<any[]> => {
  let content: any[] = [];
  try {
    const response = await client.getEntries({
      content_type: contentType
    });
    content = response.items;
  } catch (err: unknown) {
    console.error(err);
  }
  return content;
};

const fetchFBEventData = async (): Promise<any[]> => {
  const url =
    "https://graph.facebook.com/v14.0/unswmathsoc/events?fields=name%2Cid%2Cdescription%2Ccover%2Cplace%2Cstart_time%2Cend_time&access_token=" +
    process.env.REACT_APP_FB_PAGE_TOKEN;
  let eventData: any[] = [];
  try {
    const res = await fetch(url, {
      method: "GET"
    });
    const resJSON = await res.json();
    eventData = resJSON.data;
  } catch (err: unknown) {
    console.error(err);
  }
  return eventData;
};

/**
 * Fetch events.
 */
export const fetchEvents = async (): Promise<EventDetails[]> => {
  const eventData: any[] = await fetchFBEventData();
  return eventData.map((item) => {
    const eventDetails: EventDetails = {
      eventName: item.name,
      eventLink: "https://www.facebook.com/events/" + item.id,
      eventDescription: item.description,
      eventImage: item.cover?.source,
      imageDescription: item.name + " Promotional Image",
      locationLabel: item.place?.name || null,
      startTime: item.start_time,
      endTime: item.end_time || item.start_time
    };
    return eventDetails;
  });
};

export const fetchPortfolios = async (): Promise<PortfolioDetails[]> => {
  return (await fetchContentType("portfolio")).map((item) => {
    // TODO: Figure out how to use typescript with contentful.
    const obj = item as any;
    return {
      ...obj.fields,
      name: obj.fields.portfolioName,
      directors: obj.fields.directors.map((director) => {
        return {
          name: director.fields.title,
          imagePath: director.fields.file.url
        };
      })
    };
  });
};

export const fetchExecutives = async (): Promise<Executive[]> => {
  return (await fetchContentType("executives")).map((item) => {
    const obj = item as any;
    return {
      ...obj.fields,
      imagePath: obj.fields.photo.fields.file.url
    };
  });
};

export const fetchCompetitions = async (): Promise<Competition[]> => {
  return (await fetchContentType("competitions")).map((item) => {
    const obj = item as any;
    return {
      ...obj.fields,
      promotionalImage: obj.fields.promotionalImage.fields.file.url,
      solutionsLink: obj.fields.solutions.fields.file.url
    };
  });
};

const removeCodeAndTerm = (resourceTitle: string, type: RegExp) => {
  return resourceTitle
    .replace(/[A-Z]{4}[0-9]{4}(\/[0-9]{4})*|OLD|[[0-9]{4}[TS][1-3]/g, "")
    .replace(type, "")
    .trim();
};

export const fetchSubjectResources = async (type: RegExp): Promise<RevisionTile[]> => {
  const items = (await fetchContentType("subjectResources"))
    .map((item) => {
      const obj = item as any;
      return {
        courseCode: obj.fields.subjectCode,
        courseTitle: obj.fields.subjectTitle,
        revisionLinks: obj.fields.resources
          .filter((resource: any) => type.test(resource.fields.resourceType))
          .map((resource: any) => {
            return {
              groupHeader: `${resource.fields.term} ${resource.fields.resourceType}`,
              groupLinks: resource.fields.resources.map((asset: any) => ({
                name: removeCodeAndTerm(asset.fields.title, type),
                path: asset.fields.file.url
              }))
            };
          })
      };
    })
    .filter((resource) => resource.revisionLinks.length > 0);
  items.sort((a, b) => a.courseCode.localeCompare(b.courseCode));
  return items;
};
