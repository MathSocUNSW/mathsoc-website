import EventsClient from "../(components)/event-client";
import { fetchEvents } from "../../../lib/api";

const Events = async () => {
  const events = await fetchEvents();
  return <EventsClient events={events} />;
};

export default Events;
