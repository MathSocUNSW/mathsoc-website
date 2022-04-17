// Library Imports
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography } from "@mui/material";

// Styling
import styles from "src/styles/UpcomingEvents.module.scss";

// Helper Imports
import { upcomingEventsFilter, eventsComparatorIncreasing } from "src/helpers/eventHelpers";

// Data
import { EventDetails } from "src/data/eventData";

interface EventProps {
  events: EventDetails[];
}

const UpcomingEvents: React.FC<EventProps> = ({ events }) => {
  const [upcomingEvents, setUpcomingEvents] = useState([] as EventDetails[]);

  // Component doesn't render correctly unless the state of events is set.
  useEffect(() => {
    const sortedEvents = events.filter(upcomingEventsFilter);
    sortedEvents.sort(eventsComparatorIncreasing);
    setUpcomingEvents(sortedEvents);
  }, [events]);

  return (
    <section className={styles.newEventsContainer}>
      <Typography variant="h2" align="center">
        Upcoming Events
      </Typography>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
        className={styles.eventCarousel}
      >
        {upcomingEvents.map((event, i) => (
          <img
            key={i}
            src={`https://${event.eventImage}`}
            alt={`${event.eventName} promotional image`}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default UpcomingEvents;

// TODO: add swipe gestures
