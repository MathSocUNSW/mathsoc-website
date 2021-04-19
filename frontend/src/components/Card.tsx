import React from 'react';
import style from '../styles/Card.module.scss';
import Image from 'next/image';

export default function Card() {
  return (
    <div className={style.card}>
      {/* Apparently these images are 1920 x 1080 px */}
      <img src='/tft.jpg' />
      <div className={style.content}>
        <h1 className={style.title}>Event Name</h1>
        <p className={style.description}>Description</p>
        <a href='https://www.facebook.com' className={style.link}>
          Find out more &rarr;
        </a>
      </div>
    </div>
  );
}
