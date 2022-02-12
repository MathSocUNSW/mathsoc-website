// Library Imports
import React from "react";
import { Typography } from "@material-ui/core";

// Component Imports
import Button from "components/Button";

// Styling
import styles from "src/styles/RecentEvents.module.scss";

// Data
import { EventDetails } from "src/data/eventData";

// Helper Imports
import { pastEventsFilter, eventsComparatorDecreasing } from "src/helpers/eventHelpers";

interface EventProps {
  events: EventDetails[];
}
const RecentEvents: React.FC<EventProps> = ({ events }) => {
  // Show, at most, the 6 latest events past.
  const MAX_ITEMS = 6;

  const sortedRecentEvents = events.filter(pastEventsFilter);
  sortedRecentEvents.sort(eventsComparatorDecreasing);
  const slicedRecentEvents = sortedRecentEvents.slice(0, MAX_ITEMS);

  return (
    <div>
      <Typography variant="h2" align="center">
        Recent Events
      </Typography>
      <div className={styles.container}>
        {slicedRecentEvents.length === 0 ? (
          <div className={styles.empty}>
            <Typography variant="body1">Nothing to see here</Typography>
          </div>
        ) : (
          slicedRecentEvents.map((event, index) => (
            <div className={styles.cardContainer} key={index}>
              <a href={event.eventLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={`https:${event.eventImage}`}
                  className={styles.cardImage}
                  alt={event.eventDescription}
                />
              </a>
            </div>
          ))
        )}
      </div>
      <Button link="/events" text="See more events" />
    </div>
  );
};

export default RecentEvents;
