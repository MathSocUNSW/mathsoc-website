import EventsClient from "./EventsClient";
import { fetchEvents } from "../../../lib/api";
import { EventDetails } from "../(data)/evenData";

const Events = async () => {
  let events: EventDetails[] = [];

  try {
    events = await fetchEvents(); // Fetch data ONCE
  } catch (error) {
    console.error("Error fetching events:", error);
  }

  return <EventsClient events={events} />;
};

export default Events;
