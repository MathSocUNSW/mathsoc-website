// Library Imports
import React, { useEffect, Dispatch, SetStateAction } from "react";
import { Typography } from "@material-ui/core";
import moment from "moment";

// Component Imports
import EventCard from "src/components/EventCard";

// Styling
import styles from "src/styles/UpcomingEvents.module.scss";

// Helper Imports
import {
  getDateUnix,
  sortEndDateDecreasing,
  sortStartDateDecreasing
} from "src/helpers/eventHelpers";
import useWindowDimensions from "src/helpers/useWindowDimensions";

// Data
import eventData, { eventDetails } from "src/data/eventData";

// TODO: just use flexbox for this - instead of manual window calculations

const checkIndex = (sortedEventData: Array<eventDetails>, index: number): number => {
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
const figureOutWhatEventsToShow = (
  sortedEventData: eventDetails[],
  eventIndex: number,
  width: number
) => {
  sortedEventData.sort((x: eventDetails, y: eventDetails) => {
    // primarily sort by increasing end date
    const byEnd = sortEndDateDecreasing(x, y);
    if (byEnd != 0) return -byEnd;
    // sort same end dates by increasing start date
    const byStart = sortStartDateDecreasing(x, y);
    return -byStart;
  });

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

export interface UpcomingEventsProps {
  eventIndex: number;
  setEventIndex: Dispatch<SetStateAction<number>>;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ eventIndex, setEventIndex }) => {
  const sortedEventData = eventData.filter((x) => getDateUnix(x.endDate) - moment().valueOf() >= 0);
  const { height, width } = useWindowDimensions();

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
    const imgs = sortedEventData.map((event) => event.imagePath);
    cacheImages(imgs);
  }, [sortedEventData]);

  return (
    <section className={styles.newEventsContainer}>
      <Typography variant="h2" align="center">
        Upcoming Events
      </Typography>
      <br />
      <div className={styles.events}>
        {sortedEventData.length > 3 && (
          <img
            src="/images/leftArrow.svg"
            className={styles.arrows}
            aria-label="back arrow"
            alt="back arrow"
            onClick={() => setEventIndex(eventIndex - 1)}
          />
        )}
        {sortedEventData.length === 0 ? (
          <div className={styles.empty}>
            <Typography variant="body1">Nothing to see here</Typography>
          </div>
        ) : (
          figureOutWhatEventsToShow(sortedEventData, eventIndex, width).map((x, index) => (
            <EventCard key={index} {...x} />
          ))
        )}
        {sortedEventData.length > 3 && (
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
