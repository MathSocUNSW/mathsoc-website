import React from "react";
import { Typography } from "@material-ui/core";
import styles from "src/styles/SponsorsPg.module.scss";

import { sponsor } from "src/data/sponsorsData";

const SponsorsBox: React.FC<sponsor> = ({ name, type, logoURL, websiteURL, profileText }) => {
  return (
    <section className={styles.sponser}>
      <a href={websiteURL} target="_blank" rel="noreferrer">
        <img src={logoURL} alt={name} className={styles.logo}></img>
      </a>
      <Typography>{profileText}</Typography>
      <a href={websiteURL} target="_blank" rel="noreferrer" className={styles.link}>
        See more here!
      </a>
    </section>
  );
};

export default SponsorsBox;
