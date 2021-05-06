import React from 'react';
import style from 'src/styles/Card.module.scss';
import { eventDetails as CardProps } from 'src/data/eventData';

export default function Card({
  image,
  name,
  mainText,
  startDate,
  endDate,
  detailList,
  linkList,
  externalLink
}: CardProps): JSX.Element {
  return (
    <section className={style.mainContainer}>
      <section>
        <img src={image} className={style.topImage} alt='event banner' />
      </section>
      <section className={style.content}>
        <div>
          <h1 className={style.title}>{name}</h1>
          <section className={style.eventInfo}>
            <div className={style.mainText}>
              <p>{mainText}</p>
            </div>
            <ul>
              {detailList.map((x, index) => (
                <li key={index}>
                  {x.name}: {x.text}
                </li>
              ))}
              {linkList.map((x, index) => (
                <li key={index}>
                  {x.name}:{' '}
                  <a href={x.url} target='_blank' rel='noreferrer'>
                    {x.text}
                  </a>
                </li>
              ))}
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
