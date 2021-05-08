import React from "react";

import styles from "src/styles/Hero.module.scss";

interface HeroProps {
  url: string;
  text: string;
}

const Hero: React.FC<HeroProps> = ({ url, text }) => {
  return (
    <section className={styles.mainContainer}>
      <img src={url} className={styles.image} alt="banner" />
      <div className={styles.text}>{text}</div>
    </section>
  );
};

export default Hero;
