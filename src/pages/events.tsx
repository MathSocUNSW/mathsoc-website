// Library Imports
import React, { useEffect } from "react";
import Head from "next/head";

// Component Imports
import PageBody from "components/PageBody";
import Hero from "components/Hero";
import UpcomingEvents from "components/UpcomingEvents";
import PastEvents from "src/components/PastEvents";

// Helper Imports
import {
  pastEventsFilter,
  eventsComparatorDecreasing,
  fetchEvents
} from "src/helpers/eventHelpers";

// Data
import { EventDetails } from "src/data/eventData";

interface EventProps {
  events: EventDetails[];
}

const Events: React.FC<EventProps> = ({ events }) => {
  return (
    <section>
      <Head>
        <title>Events - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_events.jpg" text="Events" />
      <PageBody>
        <UpcomingEvents events={events} />
        <PastEvents events={events} />
      </PageBody>
    </section>
  );
};

export async function getStaticProps(context) {
  const events: EventDetails[] = await fetchEvents();
  return {
    props: {
      events
    }
  };
}
export default Events;
