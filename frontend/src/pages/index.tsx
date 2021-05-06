import moment from 'moment';

import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import styles from 'src/styles/index.module.scss';
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

export default function Index() {
  const [eventIndex, setEventIndex] = React.useState(0);

  return (
    <section>
      <Head>
        <title>MathSoc</title>
        <meta name='keywords' content='mathsoc' />
      </Head>
      <Hero />
      <section className={styles.mainContainer}>
        <p className={styles.descText}>
          UNSW Mathematics Society (MathSoc) is the constituent society of the UNSW School of
          Mathematics and Statistics, with membership open to anyone with an interest in
          mathematics. We support students by enhancing the sense of community amongst mathematics
          students, informing students of career opportunities, and providing academic forums and
          resources for students. With over 3000 members, we are one of the largest societies at
          UNSW.
        </p>
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
      </section>
    </section>
  );
}
