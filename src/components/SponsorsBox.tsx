// Library Imports
import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";

// Styling
import styles from "src/styles/SponsorsBox.module.scss";

// Data
import { sponsor } from "src/data/sponsorsData";
import SponsorsLogo from "./SponsorLogo";
import { DisplaySettings } from "@mui/icons-material";

const SponsorsBox: React.FC<sponsor> = ({ name, logoPath, websiteURL, description }) => {
  return (
    <div className={styles.sponsorBox}>
      <a className={styles.logoLink} href={websiteURL} target="_blank" rel="noopener noreferrer">
        <SponsorsLogo logoPath={logoPath} name={name} />
      </a>
      <Typography variant="body1">{description}</Typography>
      <a href={websiteURL} target="_blank" rel="noopener noreferrer" className={styles.link}>
        Learn more about {name}
      </a>
    </div>
  );
};

export default SponsorsBox;
