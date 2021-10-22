// Library Imports
import React, { useState } from "react";
import { Typography } from "@material-ui/core";

// Content Imports
import EventCard from "src/components/EventCard";

// Styling
import styles from "src/styles/events.module.scss";
import buttonStyles from "src/styles/button.module.scss";

// Helper Imports
import { pastEventsFilter, eventsComparatorDecreasing } from "src/helpers/eventHelpers";

// Data
import eventData from "src/data/eventData";

const pastEvents: React.FC = () => {
  const sortedPastEvents = eventData.filter(pastEventsFilter);
  sortedPastEvents.sort(eventsComparatorDecreasing);

  const NUM_ITEMS = 12;
  const [sumItems, setSumItems] = useState(NUM_ITEMS);

  const MAX_ITEMS = sortedPastEvents.length;
  const slicedPastEvents = sortedPastEvents.slice(0, sumItems);
  return (
    <section className="pastEventsSection">
      <div className={styles.title}>
        <Typography variant="h2" align="center">
          Past Events
        </Typography>
      </div>
      <div className={styles.pastEvents}>
        {slicedPastEvents.map((event, index) => (
          <div key={index} className={styles.eventBoxContainer}>
            <EventCard {...event} />
          </div>
        ))}
      </div>

      {sumItems < MAX_ITEMS && (
        <div className={buttonStyles.buttonContainer}>
          <button onClick={() => setSumItems(sumItems + NUM_ITEMS)} className={buttonStyles.button}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default pastEvents;
