import React from 'react';
import style from 'src/styles/Card.module.scss';

type CardProps = {
  imageLink: string;
  eventName: string;
  eventMainText: string;
  eventDate?: string;
  eventTime?: string;
  eventLocation?: string;
  externalLink: string;
};

export default function Card({
  imageLink,
  eventName,
  eventMainText,
  eventDate,
  eventTime,
  eventLocation,
  externalLink
}: CardProps): JSX.Element {
  return (
    <section className={style.mainContainer}>
      <section>
        <img src={imageLink} className={style.topImage} alt='event banner' />
      </section>
      <section className={style.content}>
        <div>
          <h1 className={style.title}>{eventName}</h1>
          <section className={style.eventInfo}>
            <p>{eventMainText}</p>
            <ul>
              <li>Date: {eventDate}</li>
              <li>Time: {eventTime}</li>
              <li>Location: {eventLocation}</li>
            </ul>
          </section>
        </div>
        <section className={style.bottom}>
          <a href={externalLink} target='_blank' rel='noreferrer'>
            <p>Find out more &#8594;</p>
          </a>
        </section>
      </section>
    </section>
  );
}
