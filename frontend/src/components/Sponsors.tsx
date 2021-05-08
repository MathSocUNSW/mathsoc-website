import React from "react";
import sponsorsData from "src/data/sponsorsData";

import styles from "src/styles/Sponsors.module.scss";

const Sponsors = () => {
  return (
    <section className={styles.mainContainer}>
      <h2 className={styles.sponsorsTitle}>Our Sponsors</h2>
      <section className={styles.sponsorsContainer}>
        {sponsorsData.map((x, index) => (
          <a key={index} href={x.websiteURL} target='_blank' rel='noreferrer'>
            <img
              className={styles.logo}
              src={x.logoURL}
              alt={`${x.name} logo`}
              aria-label={`${x.name} logo`}
            />
          </a>
        ))}
      </section>
    </section>
  );
};

export default Sponsors;
