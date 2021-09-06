import React from "react";
import { Typography } from "@material-ui/core";
import styles from "src/styles/SponsorsPg.module.scss";

import { sponsor } from "src/data/sponsorsData";

interface sponsorProps extends sponsor {
  typeCheck: "principal" | "partner";
}

const SponsorsBox: React.FC<sponsorProps> = ({
  name,
  type,
  logoURL,
  websiteURL,
  profileText,
  typeCheck
}) => {
  // check if partner or pricipal
  const visible = typeCheck != type;
  return (
    <section className={visible && styles.invisible}>
      <section className={styles.sponser}>
        <a href={websiteURL} target="_blank" rel="noreferrer">
          <img src={logoURL} alt={name} className={styles.logo}></img>
        </a>
        <Typography variant="h7" align="left" className={styles.invisible}>
          {name}
        </Typography>
        <Typography>{profileText}</Typography>
        <a href={websiteURL} target="_blank" rel="noreferrer" className={styles.link}>
          See more here!
        </a>
      </section>
    </section>
  );
};

export default SponsorsBox;
