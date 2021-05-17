import React from "react";
import { Typography } from "@material-ui/core";

import sponsorsData from "src/data/sponsorsData";
import styles from "src/styles/Sponsors.module.scss";

const Sponsors: React.FC = () => {
  return (
    <section className={styles.mainContainer}>
      <Typography variant="h2" align="center">
        Our Sponsors
      </Typography>
      <section className={styles.sponsorsContainer}>
        {sponsorsData.map((x, index) => (
          <a key={index} href={x.websiteURL} target="_blank" rel="noreferrer">
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
