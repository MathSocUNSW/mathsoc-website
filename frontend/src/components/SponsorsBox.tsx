// Library Imports
import React from "react";
import { Typography } from "@material-ui/core";

// Styling
import styles from "src/styles/SponsorsBox.module.scss";

// Data
import { sponsor } from "src/data/sponsorsData";

const SponsorsBox: React.FC<sponsor> = ({ name, type, logoPath, websiteURL, description }) => {
  return (
    <div className={styles.sponsorBox}>
      <a href={websiteURL} target="_blank" rel="noopener noreferrer">
        <img src={logoPath} alt={name} className={styles.logo}></img>
      </a>
      <Typography variant="body1">{description}</Typography>
      <a href={websiteURL} target="_blank" rel="noopener noreferrer" className={styles.link}>
        See more here!
      </a>
    </div>
  );
};

export default SponsorsBox;
