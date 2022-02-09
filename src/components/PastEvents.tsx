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
import { EventDetails } from "src/data/eventData";

interface EventProps {
  events: EventDetails[];
}

const PastEvents: React.FC<EventProps> = ({ events }) => {
  const sortedPastEvents = events.filter(pastEventsFilter);
  sortedPastEvents.sort(eventsComparatorDecreasing);

  // pagination
  const MAX_ITEMS = 12;
  const [itemsLimit, setItemsLimit] = useState(MAX_ITEMS);

  const numDisplayedItems = sortedPastEvents.length;
  const slicedPastEvents = sortedPastEvents.slice(0, itemsLimit);

  return (
    <section className="pastEventsSection">
      <div className={styles.title}>
        <Typography variant="h2" align="center">
          Past Events
        </Typography>
      </div>
      {sortedPastEvents.length === 0 ? (
        <div className={styles.empty}>
          <Typography variant="body1">Nothing to see here</Typography>
        </div>
      ) : (
        <div className={styles.pastEvents}>
          {slicedPastEvents.map((event, index) => (
            <div key={index} className={styles.eventBoxContainer}>
              <EventCard {...event} />
            </div>
          ))}
        </div>
      )}

      {itemsLimit < numDisplayedItems && (
        <div className={buttonStyles.buttonContainer}>
          <button
            onClick={() => setItemsLimit(itemsLimit + MAX_ITEMS)}
            className={buttonStyles.button}
          >
            Load more events
          </button>
        </div>
      )}
    </section>
  );
};

export default PastEvents;
