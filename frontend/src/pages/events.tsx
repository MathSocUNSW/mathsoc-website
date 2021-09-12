// Library Imports
import React, { useState } from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";
import moment from "moment";

// Component Imports
import PageBody from "components/PageBody";
import Hero from "components/Hero";
import UpcomingEvents from "components/UpcomingEvents";
import EventCard from "src/components/EventCard";

// Styling
import styles from "src/styles/events.module.scss";

// Helper Imports
import {
  getDateUnix,
  sortEndDateDecreasing,
  sortStartDateDecreasing
} from "src/helpers/eventHelpers";

// Data
import eventData from "src/data/eventData";

const Events: React.FC = () => {
  // React state for upcoming events section
  const [eventIndex, setEventIndex] = useState(0);

  // Filter and sort past events
  const sortedPastEvents = eventData.filter((x) => getDateUnix(x.endDate) - moment().valueOf() < 0);
  sortedPastEvents.sort(sortStartDateDecreasing);
  sortedPastEvents.sort(sortEndDateDecreasing);

  return (
    <section>
      <Head>
        <title>Events - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_events.jpg" text="Events" />
      <PageBody>
        <UpcomingEvents eventIndex={eventIndex} setEventIndex={setEventIndex} />
        <section className="pastEventsSection">
          <div className={styles.title}>
            <Typography variant="h2" align="center">
              Past Events
            </Typography>
          </div>
          <div className={styles.pastEvents}>
            {sortedPastEvents.map((event, index) => (
              <div key={index} className={styles.eventBoxContainer}>
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </section>
      </PageBody>
    </section>
  );
};

export default Events;
