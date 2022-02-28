import { createClient } from "contentful";
import { EventDetails } from "../data/eventData";
import { MemberDetails } from "../data/portfolioData";

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

export const fetchTeam = async (): Promise<MemberDetails[]> => {
  let memberDetails: MemberDetails[] = [];
  try {
    const response = await client.getEntries({
      content_type: "team"
    });
    memberDetails = response.items.map((item) => {
      // TODO: Figure out how to use typescript with contentful.
      const obj = item as any;
      return {
        ...obj.fields,
        imagePath: obj.fields.image.fields.file.url
      };
    });
  } catch (err) {
    console.error(err);
  }
  return memberDetails;
};
