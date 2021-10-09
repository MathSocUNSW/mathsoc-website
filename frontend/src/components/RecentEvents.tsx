// Library Imports
import React from "react";
import { Typography } from "@material-ui/core";
import moment from "moment";

// Component Imports
import EventCard from "src/components/EventCard";

// Styling
import styles from "src/styles/RecentEvents.module.scss";
import eventStyles from "src/styles/events.module.scss";

// Data
import eventData from "src/data/eventData";

// Helper Imports
import {
  getDateUnix,
  sortEndDateDecreasing,
  sortStartDateDecreasing
} from "src/helpers/eventHelpers";

const RecentEvents: React.FC = () => {
  // Show, at most, the 3 latest events past.
  const sortedPastEvents = eventData.filter((x) => getDateUnix(x.endDate) - moment().valueOf() < 0);
  sortedPastEvents.sort(sortStartDateDecreasing);
  sortedPastEvents.sort(sortEndDateDecreasing);
  const slicedEventData = sortedPastEvents.slice(0, 3);

  return (
    <div>
      <div className={eventStyles.title}>
        <Typography variant="h2" align="center">
          Recent Events
        </Typography>
      </div>
      <div className={styles.recentEventsCards}>
        {slicedEventData.map((event, index) => (
          <div key={index} className={eventStyles.eventBoxContainer}>
            <EventCard {...event} />
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <a href="/events">
          <button className={styles.eventsButton}>see more events!</button>
        </a>
      </div>
    </div>
  );
};

export default RecentEvents;
