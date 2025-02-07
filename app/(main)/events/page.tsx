import EventCarousel from "../../(main)/(components)/event-carousel";
import { fetchEvents } from "../../../lib/api";
import { EventDetails } from "../(data)/evenData";
import PastEventsGrid from "../(components)/past-events-tile";

const Events: React.FC = async () => {
  const events: EventDetails[] = await fetchEvents();

  return (
    <section>
      {/* Hero Section - Top Aligned, Half Screen Height */}
      <div className="relative w-full h-[60vh]">
        <video 
          src="/videos/event-video.mp4" 
          autoPlay muted loop
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">See What's On</h1>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
        <p className="text-xl mt-2">Stay updated with the latest happenings!</p>
      </div>

      <EventCarousel />
      <PastEventsGrid />
    </section>
  );
};

export default Events;
