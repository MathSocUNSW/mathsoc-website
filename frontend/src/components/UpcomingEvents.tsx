import React, { Dispatch, SetStateAction } from "react";

import moment from "moment";
import styles from "src/styles/UpcomingEvents.module.scss";
import EventCard from "src/components/EventCard";
import eventData, { eventDetails } from "src/data/eventData";
import {
  getDateUnix,
  sortEndDateDecreasing,
  sortStartDateDecreasing
} from "src/helpers/eventHelpers";
import useWindowDimensions from "src/helpers/useWindowDimensions";
import { Typography } from "@material-ui/core";

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
  sortedEventData: Array<eventDetails>,
  eventIndex: number,
  width: number
) => {
  sortedEventData.sort(sortStartDateDecreasing);
  sortedEventData.sort(sortEndDateDecreasing);
  // console.log(width);

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

export interface UpComingEventProps {
  eventIndex: number;
  setEventIndex: Dispatch<SetStateAction<number>>;
}

const UpcomingEvents: React.FC<UpComingEventProps> = ({ eventIndex, setEventIndex }) => {
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

  React.useEffect(() => {
    const imgs = sortedEventData.map((event) => event.imagePath);
    cacheImages(imgs);
  }, [sortedEventData]);

  return (
    <section className={styles.newEventsContainer}>
      <Typography variant="h2" align="center">
        Upcoming Events
      </Typography>
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
