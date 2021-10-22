// Library Imports
import React from "react";
import Head from "next/head";

// Component Imports
import PageBody from "components/PageBody";
import Hero from "components/Hero";
import UpcomingEvents from "components/UpcomingEvents";
import PastEvents from "src/components/PastEvents";

// Helper Imports
import { pastEventsFilter, eventsComparatorDecreasing } from "src/helpers/eventHelpers";

// Data
import eventData from "src/data/eventData";

const Events: React.FC = () => {
  // Filter and sort past events
  const sortedPastEvents = eventData.filter(pastEventsFilter);
  sortedPastEvents.sort(eventsComparatorDecreasing);

  return (
    <section>
      <Head>
        <title>Events - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_events.jpg" text="Events" />
      <PageBody>
        <UpcomingEvents />
        <PastEvents />
      </PageBody>
    </section>
  );
};

export default Events;
