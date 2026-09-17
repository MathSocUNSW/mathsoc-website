import { cache } from "react";
import EventsClient from "../(components)/event-client";
import { fetchEvents } from "../../../lib/api";
import { EventDetails } from "../(data)/evenData";

// Re-fetch Facebook events at most once an hour
export const revalidate = 3600;

// Cache the API request to prevent excessive calls
const getCachedEvents = cache(async () => {
  try {
    return await fetchEvents();
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
});

const Events = async () => {
  const events: EventDetails[] = await getCachedEvents(); // Cached request

  return <EventsClient events={events} />;
};

export default Events;
