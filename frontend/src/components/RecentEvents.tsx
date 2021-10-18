// Library Imports
import React from "react";
import { Typography } from "@material-ui/core";

// Component Imports
import Button from "components/Button";

// Styling
import styles from "src/styles/RecentEvents.module.scss";

// Data
import eventData from "src/data/eventData";

// Helper Imports
import { pastEventsFilter, eventsComparatorDecreasing } from "src/helpers/eventHelpers";

const RecentEvents: React.FC = () => {
  // Show, at most, the 6 latest events past.
  const MAX_ITEMS = 6;

  const sortedPastEvents = eventData.filter(pastEventsFilter);
  sortedPastEvents.sort(eventsComparatorDecreasing);
  const slicedEventData = sortedPastEvents.slice(0, MAX_ITEMS);

  return (
    <div>
      <Typography variant="h2" align="center">
        Recent Events
      </Typography>
      <div className={styles.container}>
        {slicedEventData.map((event, index) => (
          <div className={styles.cardContainer} key={index}>
            <a href={event.eventLink} target="_blank" rel="noopener noreferrer">
              <img src={event.imagePath} className={styles.cardImage} alt="event banner" />
            </a>
          </div>
        ))}
      </div>
      <Button link="/events" text="See more events" />
    </div>
  );
};

export default RecentEvents;
