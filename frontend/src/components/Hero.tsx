import React from "react";

import styles from "src/styles/Hero.module.scss";

interface HeroProps {
  url: string;
}

const Hero: React.FC<HeroProps> = ({ url }) => {
  return (
    <section className={styles.mainContainer}>
      <img src={url} className={styles.image} alt='banner' />
      <div className={styles.text}>Welcome to UNSW Mathematics Society</div>
    </section>
  );
};

export default Hero;
