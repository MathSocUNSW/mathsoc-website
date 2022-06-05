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
/**
 * Fetch events.
 */
export const fetchEvents = async (): Promise<EventDetails[]> => {
  return (await fetchContentType("mathSocEvents"))
    .filter((item) => {
      // TODO: Figure out how to use typescript with contentful.
      const obj = item as any;
      return "eventImage" in obj.fields;
    })
    .map((item) => {
      const obj = item as any;
      return {
        ...obj.fields,
        eventImage: obj.fields.eventImage.fields.file.url,
        imageDescription: obj.fields.eventImage.fields.description
      };
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
