import React, { Dispatch, SetStateAction } from 'react';
import moment from 'moment';

import styles from 'src/styles/UpcomingEvents.module.scss';
import Card from 'src/components/Card';
import eventData, { eventDetails } from 'src/data/eventData';

const sortEndDateDecreasing = (x: eventDetails, y: eventDetails): number => {
  if (moment(x.endDate, 'DD-MM-YYYY').valueOf() > moment(y.endDate, 'DD-MM-YYYY').valueOf())
    return -1;
  if (moment(x.endDate, 'DD-MM-YYYY').valueOf() < moment(y.endDate, 'DD-MM-YYYY').valueOf())
    return 1;
  return 0;
};

const sortStartDateDecreasing = (x: eventDetails, y: eventDetails): number => {
  if (moment(x.startDate, 'DD-MM-YYYY').valueOf() > moment(y.startDate, 'DD-MM-YYYY').valueOf())
    return -1;
  if (moment(x.startDate, 'DD-MM-YYYY').valueOf() < moment(y.startDate, 'DD-MM-YYYY').valueOf())
    return 1;
  return 0;
};

const checkIndex = (index: number): number => {
  const length = eventData.length;
  const modNum = index % length;
  if (modNum < 0) return modNum + length;
  return modNum;
};

/**
 *
 * @param eventIndex integer
 * @returns array of 3 eventData
 */
const figureOutWhatEventsToShow = (eventIndex: number) => {
  eventData.sort(sortStartDateDecreasing);
  eventData.sort(sortEndDateDecreasing);
  return [
    eventData[checkIndex(eventIndex)],
    eventData[checkIndex(eventIndex + 1)],
    eventData[checkIndex(eventIndex + 2)]
  ];
};

export type UpComingEventProps = {
  eventIndex: number;
  setEventIndex: Dispatch<SetStateAction<number>>;
};

const UpcomingEvents = ({ eventIndex, setEventIndex }: UpComingEventProps): JSX.Element => {
  return (
    <section className={styles.newEventsContainer}>
      <h1 className={styles.newEventsTitle}>Upcoming Events</h1>
      <div className={styles.events}>
        <img
          src='/images/leftArrow.svg'
          className={styles.arrows}
          aria-label='back arrow'
          alt='back arrow'
          onClick={() => setEventIndex(eventIndex - 1)}
        />
        {figureOutWhatEventsToShow(eventIndex).map((x, index) => (
          <Card key={index} {...x} />
        ))}
        <img
          src='/images/rightArrow.svg'
          className={styles.arrows}
          aria-label='forward arrow'
          alt='forward arrow'
          onClick={() => setEventIndex(eventIndex + 1)}
        />
      </div>
    </section>
  );
};

export default UpcomingEvents;
