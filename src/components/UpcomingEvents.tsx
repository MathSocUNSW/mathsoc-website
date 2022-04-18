// Library Imports
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Slider from "react-slick";
import Head from "next/head";
// Component imports
import EventCard from "./EventCard";
// Styling
import styles from "src/styles/UpcomingEvents.module.scss";

// Helper Imports
import { upcomingEventsFilter, eventsComparatorIncreasing } from "src/helpers/eventHelpers";

// Data
import { EventDetails } from "src/data/eventData";

interface EventProps {
  events: EventDetails[];
}

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  centerMode: true,
  slidesToShow: 3,
  prevArrow: (
    <img
      src="/images/leftArrow.svg"
      className={styles.arrows}
      aria-label="back arrow"
      alt="back arrow"
    />
  ),
  nextArrow: (
    <img
      src="/images/rightArrow.svg"
      className={styles.arrows}
      aria-label="next arrow"
      alt="next arrow"
    />
  ),
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        centerPadding: 0,
        arrows: true,
        slidesToShow: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
};
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
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <style>
          {`.slick-slide.slick-center {
            transform: scale(1.05);
            transition: transform 500ms;
          }`}
        </style>
      </Head>
      <Typography variant="h2" align="center">
        Upcoming Events
      </Typography>
      <Slider className={styles.eventCarousel} {...carouselSettings}>
        {upcomingEvents.map((event, i) => (
          <EventCard className={styles.carouselEventCard} {...event} />
        ))}
      </Slider>
    </section>
  );
};

export default UpcomingEvents;

// TODO: add swipe gestures
