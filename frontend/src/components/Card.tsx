import React from 'react';
import style from 'src/styles/Card.module.scss';

export default function Card() {
  return (
    <section className={style.mainContainer}>
      <section>
        <img src='/images/events/tft.jpg' className={style.topImage} />
      </section>
      <section className={style.content}>
        <div>
          <h1 className={style.title}>Event Name</h1>
          <section className={style.eventInfo}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a fermentum nisi,
              blandit rhoncus nisl. Curabitur ligula odio, blandit vel elit in, finibus scelerisque
              enim. Curabitur tincidunt tincidunt enim id suscipit. Maecenas odio quam, convallis
              dignissim tincidunt eget, dapibus a lorem.
            </p>
            <ul>
              <li>Date: some date</li>
              <li>Time: some time</li>
              <li>Location: some location</li>
            </ul>
          </section>
        </div>
        <section className={style.bottom}>
          <a
            href='https://www.youtube.com/channel/UC8FgY7QcGOrc_9b5qAoYfOg'
            target='_blank'
            rel='noreferrer'
          >
            <p>Find out more &#8594;</p>
          </a>
        </section>
      </section>
    </section>
  );
}
