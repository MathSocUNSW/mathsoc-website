import { createClient } from "contentful";
import { EventDetails } from "../data/eventData";
import { Competition } from "../data/competitionData";
import { Executive, PortfolioDetails } from "../data/portfolioData";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_API_KEY as string
});

/**
 * Fetch events.
 */
export const fetchEvents = async (): Promise<EventDetails[]> => {
  let events: EventDetails[] = [];
  try {
    const response = await client.getEntries({
      content_type: "mathSocEvents"
    });
    events = response.items.map((item) => {
      // TODO: Figure out how to use typescript with contentful.
      const obj = item as any;
      return {
        ...obj.fields,
        eventImage: obj.fields.eventImage.fields.file.url,
        imageDescription: obj.fields.eventImage.fields.description
      };
    });
  } catch (err) {
    console.error(err);
  }
  return events;
};

export const fetchPortfolios = async (): Promise<PortfolioDetails[]> => {
  let portfolios: PortfolioDetails[] = [];
  try {
    const response = await client.getEntries({
      content_type: "portfolio"
    });
    portfolios = response.items.map((item) => {
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
  } catch (err) {
    console.error(err);
  }
  return portfolios;
};

export const fetchExecutives = async (): Promise<Executive[]> => {
  let executives: Executive[] = [];
  try {
    const response = await client.getEntries({
      content_type: "executives"
    });
    executives = response.items.map((item) => {
      const obj = item as any;
      return {
        ...obj.fields,
        imagePath: obj.fields.photo.fields.file.url
      };
    });
  } catch (err) {
    console.error(err);
  }
  return executives;
};

export const fetchCompetitions = async (): Promise<Competition[]> => {
  let competitions: Competition[] = [];
  try {
    const response = await client.getEntries({
      content_type: "competitions"
    });
    competitions = response.items.map((item) => {
      const obj = item as any;
      return {
        ...obj.fields,
        promotionalImage: obj.fields.promotionalImage.fields.file.url,
        solutionsLink: obj.fields.solutions.fields.file.url
      };
    });
  } catch (err) {
    console.error(err);
  }
  console.log(competitions);
  return competitions;
};
