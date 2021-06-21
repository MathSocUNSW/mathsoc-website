import React, { useState } from "react";
import Head from "next/head";
import moment from "moment";

import styles from "src/styles/events.module.scss";
import UpcomingEvents from "components/UpcomingEvents";
import Hero from "components/Hero";
import EventCard from "src/components/EventCard";
import eventData from "src/data/eventData";
import {
  getDateUnix,
  sortEndDateDecreasing,
  sortStartDateDecreasing
} from "src/helpers/eventHelpers";
import { Container, Typography } from "@material-ui/core";

const Events: React.FC = () => {
  const [eventIndex, setEventIndex] = useState(0);

  const sortedEventData = eventData.filter((x) => getDateUnix(x.endDate) - moment().valueOf() < 0);
  sortedEventData.sort(sortStartDateDecreasing);
  sortedEventData.sort(sortEndDateDecreasing);

  return (
    <section>
      <Head>
        <title>Events - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_events.jpg" text="Events" />
      <Container>
        <UpcomingEvents eventIndex={eventIndex} setEventIndex={setEventIndex} />
        <Typography variant="h2" align="center">
          Past Events
        </Typography>
        <section className={styles.pastEvents}>
          {sortedEventData.map((x, index) => (
            <div key={index} className={styles.eventBoxContainer}>
              <EventCard {...x} />
            </div>
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Events;
