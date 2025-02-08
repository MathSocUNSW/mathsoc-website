"use client";

import { useEffect, useState, useRef } from "react";
import EventCarousel from "../../(main)/(components)/event-carousel";
import { fetchEvents } from "../../../lib/api";
import { EventDetails } from "../(data)/evenData";
import PastEventsGrid from "../(components)/past-events-tile";
import Wave from "../(components)/waves-bg"; // Import the Wave component

const Events: React.FC = () => {
  const [events, setEvents] = useState<EventDetails[] | null>(null);
  const [containerHeight, setContainerHeight] = useState(1000); // Default height
  const containerRef = useRef<HTMLDivElement>(null);

  // Fetch events once when the component mounts
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const fetchedEvents = await fetchEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    loadEvents();
  }, []); // Empty dependency array ensures it runs only once

  // ResizeObserver to dynamically track height changes
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const newHeight = containerRef.current.scrollHeight;
        console.log("Updated Page Height:", newHeight);
        setContainerHeight(newHeight);
      }
    };

    // Observe the container's height changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Initial update when events are populated
    setTimeout(updateHeight, 0);

    return () => resizeObserver.disconnect();
  }, [events]); // Runs only when events are first fetched

  return (
    <section ref={containerRef} className="relative w-full min-h-screen">
      {/* Full-Page Dynamic Wave Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{ height: `${containerHeight}px` }} // Dynamically set height
      >
        <Wave containerId="events-wave" rotation={90} />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[60vh]">
        <video 
          src="/videos/event-video.mp4" 
          autoPlay 
          muted 
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">See What's On</h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10">
        <div className="text-center pt-14 pb-6">
          <h1 className="text-4xl font-bold">Upcoming Events</h1>
          <p className="text-xl mt-2">Stay updated with the latest happenings!</p>
        </div>
        {events ? <EventCarousel /> : <p className="text-center text-gray-400">Loading events...</p>}

        <div className="text-center pb-12 pt-4">
          <h1 className="text-4xl font-bold">Past Events</h1>
          <p className="text-xl mt-2">Revisiting some of our best moments</p>
        </div>
        {events ? <PastEventsGrid /> : <p className="text-center text-gray-400">Loading past events...</p>}
      </div>
    </section>
  );
};

export default Events;
