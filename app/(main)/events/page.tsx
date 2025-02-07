import EventCarousel from "../../(main)/(components)/event-carousel";
import { fetchEvents } from "../../../lib/api";
import { EventDetails } from "../(data)/evenData";

const Events: React.FC = async () => {
  const events: EventDetails[] = await fetchEvents();

  return (
    <section className="py-10 px-6">
      {/* Section Title */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
        <p className="text-xl mt-2">Stay updated with the latest happenings!</p>
      </div>

      {/* Render the event carousel */}
      <EventCarousel />
    </section>
  );
};

export default Events;
