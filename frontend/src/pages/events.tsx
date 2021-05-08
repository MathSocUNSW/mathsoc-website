import React from "react";
import Head from "next/head";
import moment from "moment";

import styles from "src/styles/events.module.scss";
import UpcomingEvents from "components/UpcomingEvents";
import Hero from "components/Hero";
import Card from "src/components/Card";
import eventData from "src/data/eventData";
import {
  getDateUnix,
  sortEndDateDecreasing,
  sortStartDateDecreasing
} from "src/helpers/eventHelpers";

export default function Events() {
  const [eventIndex, setEventIndex] = React.useState(0);

  const sortedEventData = eventData.filter((x) => getDateUnix(x.endDate) - moment().valueOf() < 0);
  sortedEventData.sort(sortStartDateDecreasing);
  sortedEventData.sort(sortEndDateDecreasing);

  return (
    <section>
      <Head>
        <title>MathSoc - Events</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_events.jpg" text="Events" />
      <section className={styles.mainContainer}>
        <UpcomingEvents eventIndex={eventIndex} setEventIndex={setEventIndex} />
        <h1 className={styles.title}>Past Events</h1>
        <section className={styles.pastEvents}>
          {sortedEventData.map((x, index) => (
            <div key={index} className={styles.eventBoxContainer}>
              <Card {...x} />
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
