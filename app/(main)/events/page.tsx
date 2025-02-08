import EventsClient from "../(components)/event-client";
import { fetchEvents } from "../../../lib/api";
import { EventDetails } from "../(data)/evenData";

const Events: React.FC = async () => {
  const events: EventDetails[] = await fetchEvents(); // Fetch on the server

  return <EventsClient events={events} />; // Pass data to client component
};

export default Events;
