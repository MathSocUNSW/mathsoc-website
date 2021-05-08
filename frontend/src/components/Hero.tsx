import React from "react";

import styles from "src/styles/Hero.module.scss";

interface HeroProps {
  url: string;
}

export default function Hero({ url }: HeroProps): JSX.Element {
  return (
    <section className={styles.mainContainer}>
      <img src={url} className={styles.image} alt='banner' />
      <div className={styles.text}>Welcome to UNSW Mathematics Society</div>
    </section>
  );
}
