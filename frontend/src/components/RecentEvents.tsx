// Library Imports
import React from "react";
import { Typography } from "@material-ui/core";
import moment from "moment";

// Component Imports
import Button from "components/Button";

// Styling
import styles from "src/styles/RecentEvents.module.scss";

// Data
import eventData from "src/data/eventData";

// Helper Imports
import {
  getDateUnix,
  sortEndDateDecreasing,
  sortStartDateDecreasing
} from "src/helpers/eventHelpers";

const RecentEvents: React.FC = () => {
  // Show, at most, the 6 latest events past.
  const numberOfEventsShown = 6;

  const sortedPastEvents = eventData.filter((x) => getDateUnix(x.endDate) - moment().valueOf() < 0);
  sortedPastEvents.sort(sortStartDateDecreasing);
  sortedPastEvents.sort(sortEndDateDecreasing);
  const slicedEventData = sortedPastEvents.slice(0, numberOfEventsShown);

  return (
    <div>
      <div className={styles.title}>
        <Typography variant="h2">Recent Events</Typography>
      </div>
      <div className={styles.container}>
        {slicedEventData.map((event, index) => (
          <div className={styles.cardContainer}>
            <a href={event.eventLink} key={index} target="_blank" rel="noopener noreferrer">
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
