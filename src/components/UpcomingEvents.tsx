// Library Imports
import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Typography } from "@mui/material";

// Component Imports
import EventCard from "src/components/EventCard";

// Styling
import styles from "src/styles/UpcomingEvents.module.scss";

// Helper Imports
import { upcomingEventsFilter, eventsComparatorIncreasing } from "src/helpers/eventHelpers";
import useWindowDimensions from "src/helpers/useWindowDimensions";

// Data
import { EventDetails } from "src/data/eventData";

// TODO: just use flexbox for this - instead of manual window calculations

const checkIndex = (sortedEventData: Array<EventDetails>, index: number): number => {
  const length = sortedEventData.length;
  const modNum = index % length;
  if (modNum < 0) return modNum + length;
  return modNum;
};

/**
 *
 * @param eventIndex integer
 * @returns array of 3 eventData
 */
const getEventsToShow = (sortedEventData: EventDetails[], eventIndex: number, width: number) => {
  sortedEventData.sort(eventsComparatorIncreasing);
  if (sortedEventData.length === 0) {
    return [];
  } else if (sortedEventData.length === 1 || width <= 1050) {
    return [sortedEventData[checkIndex(sortedEventData, eventIndex)]];
  } else if (sortedEventData.length === 2 || width <= 1500) {
    return [
      sortedEventData[checkIndex(sortedEventData, eventIndex)],
      sortedEventData[checkIndex(sortedEventData, eventIndex + 1)]
    ];
  } else {
    return [
      sortedEventData[checkIndex(sortedEventData, eventIndex)],
      sortedEventData[checkIndex(sortedEventData, eventIndex + 1)],
      sortedEventData[checkIndex(sortedEventData, eventIndex + 2)]
    ];
  }
};

interface EventProps {
  events: EventDetails[];
}

const UpcomingEvents: React.FC<EventProps> = ({ events }) => {
  const [eventIndex, setEventIndex] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState([] as EventDetails[]);
  const { width } = useWindowDimensions();
  const eventsToShow = getEventsToShow(upcomingEvents, eventIndex, width);

  // Component doesn't render correctly unless the state of events is set.
  useEffect(() => {
    const sortedEvents = events.filter(upcomingEventsFilter);
    sortedEvents.sort(eventsComparatorIncreasing);
    setUpcomingEvents(sortedEvents);
  }, [events]);
  /**
   * Given an array of `srcArray`, load all the images into cache
   * WARNING: Don't load too many. Since this is only used to load the upcoming events,
   * there won't be that many
   * Also, resolve() and reject() hasn't been tested yet
   * @param srcArray
   */
  const cacheImages = async (srcArray: string[]) => {
    const promises = srcArray.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve();
        };
        img.onerror = () => {
          reject();
        };
        img.src = src;
      });
    });
    await Promise.all(promises);
  };

  useEffect(() => {
    const imgs = upcomingEvents.map((event) => event.eventImage);
    cacheImages(imgs);
  }, [upcomingEvents]);

  return (
    <section className={styles.newEventsContainer}>
      <Typography variant="h2" align="center">
        Upcoming Events
      </Typography>
      <div className={styles.events}>
        {eventsToShow.length < upcomingEvents.length && (
          <img
            src="/images/leftArrow.svg"
            className={styles.arrows}
            aria-label="back arrow"
            alt="back arrow"
            onClick={() => setEventIndex(eventIndex - 1)}
          />
        )}
        {upcomingEvents.length === 0 ? (
          <div className={styles.empty}>
            <Typography variant="body1">Nothing to see here</Typography>
          </div>
        ) : (
          eventsToShow.map((x, index) => {
            return <EventCard key={index} {...x} />;
          })
        )}
        {eventsToShow.length < upcomingEvents.length && (
          <img
            src="/images/rightArrow.svg"
            className={styles.arrows}
            aria-label="forward arrow"
            alt="forward arrow"
            onClick={() => setEventIndex(eventIndex + 1)}
          />
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;

// TODO: add swipe gestures
