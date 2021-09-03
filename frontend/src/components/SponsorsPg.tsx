import React from "react";
import { Typography } from "@material-ui/core";
import styles from "src/styles/SponsorsPg.module.scss";

import { sponsor } from "src/data/sponsorsData";

interface sponsorProps extends sponsor {
  typeCheck: "principal" | "partner";
}

const SponsorsPg: React.FC<sponsorProps> = ({
  name,
  type,
  logoURL,
  websiteURL,
  profileText,
  typeCheck,
}) => {
  const visible = typeCheck != type;
  return (
    <section className={visible && styles.invisible}>
      <section className={styles.sponser}>
        {/*IMAGE*/}
        <img src={logoURL} alt={name} className={styles.logo}></img>
        {/*TITLE*/}
        <Typography variant="h7" align="left" className={styles.name}>{name}</Typography>
        {/*PARAGRAPH*/}
        <Typography >{profileText}</Typography>
        {/*LINK*/}
        <a href={websiteURL} target="_blank" className={styles.link} >See more here!</a>
      </section>
    </section>
  );
};

export default SponsorsPg;
