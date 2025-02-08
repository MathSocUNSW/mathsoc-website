import EventCarousel from "../../(main)/(components)/event-carousel";
import { fetchEvents } from "../../../lib/api";
import { EventDetails } from "../(data)/evenData";
import PastEventsGrid from "../(components)/past-events-tile";
import Wave from "../(components)/waves-bg";

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

      {/* Background Wave Effect */}
      <div className="relative">
        <Wave containerId="events-wave" rotation={135} />
        
        {/* Section Title */}
        <div className="text-center pt-14 pb-6 relative z-10">
          <h1 className="text-4xl font-bold">Upcoming Events</h1>
          <p className="text-xl mt-2">Stay updated with the latest happenings!</p>
        </div>
        <EventCarousel />

        <div className="text-center pb-12 pt-4 relative z-10">
          <h1 className="text-4xl font-bold">Past Events</h1>
          <p className="text-xl mt-2">Revisiting some of our best moments</p>
        </div>
        <PastEventsGrid />
      </div>
    </section>
  );
};

export default Events;
