import { createClient } from "contentful";
import { EventDetails } from "../data/eventData";

/**
 * Fetch events.
 */
export const fetchEvents = async (): Promise<EventDetails[]> => {
  let events: EventDetails[] = [];
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_API_KEY as string
  });
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
