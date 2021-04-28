import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import styles from 'src/styles/index.module.scss';
import Card from 'src/components/Card';

export default function index() {
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
            <Card
              imageLink='/images/events/tft.jpg'
              eventName='tft'
              eventMainText='tft is cool'
              eventDate='some date'
              eventTime='some time'
              eventLocation='some time'
              externalLink='https://www.youtube.com/'
            />
            <Card
              imageLink='/images/events/tft.jpg'
              eventName='tft'
              eventMainText='tft is cool'
              eventDate='some date'
              eventTime='some time'
              eventLocation='some time'
              externalLink='https://www.youtube.com/'
            />
            <Card
              imageLink='/images/events/tft.jpg'
              eventName='tft'
              eventMainText='tft is cool'
              eventDate='some date'
              eventTime='some time'
              eventLocation='some time'
              externalLink='https://www.youtube.com/'
            />
          </div>
        </section>
      </section>
    </section>
  );
}
