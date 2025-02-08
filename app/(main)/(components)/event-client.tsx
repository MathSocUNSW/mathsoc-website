"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import EventCarousel from "../../(main)/(components)/event-carousel";
import PastEventsGrid from "../(components)/past-events-tile";
import Wave from "../(components)/waves-bg";
import { EventDetails } from "../(data)/evenData";

const fadeInVariant = {
  hidden: { opacity: 0, scale: 1, y: 0 },
  visible: { opacity: 1, scale: 1, y: -20, transition: { duration: 0.6, ease: "easeOut" } }
};

interface EventsClientProps {
  events: EventDetails[];
}

const EventsClient: React.FC<EventsClientProps> = ({ events }) => {
  // Prevent re-renders by memoizing the event data
  const memoizedEvents = useMemo(() => events, [events]);

  return (
    <motion.section initial="hidden" animate="visible" variants={fadeInVariant}>
      {/* Hero Section */}
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

        {/* Upcoming Events Section */}
        <motion.div 
          className="text-center pt-14 pb-6 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <h1 className="text-4xl font-bold">Upcoming Events</h1>
          <p className="text-xl mt-2">Stay updated with the latest happenings!</p>
        </motion.div>

        <EventCarousel />

        {/* Past Events Section */}
        <motion.div 
          className="text-center pb-12 pt-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <h1 className="text-4xl font-bold">Past Events</h1>
          <p className="text-xl mt-2">Revisiting some of our best moments</p>
        </motion.div>

        <PastEventsGrid />
      </div>
    </motion.section>
  );
};

export default EventsClient;
