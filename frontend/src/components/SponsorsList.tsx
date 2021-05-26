import React from "react";
import { Typography } from "@material-ui/core";
import Image from "next/image";

import sponsorsData from "src/data/sponsorsData";
import styles from "src/styles/SponsorsList.module.scss";

const SponsorsList: React.FC = () => {
  return (
    <section className={styles.mainContainer}>
      <Typography variant="h2" align="center">
        Our Sponsors
      </Typography>
      <section className={styles.sponsorsContainer}>
        {sponsorsData.map((sponsor, index) => (
          <a key={index} href={sponsor.websiteURL} target="_blank" rel="noreferrer">
            <div className={styles.imageContainer}>
              <Image
                src={sponsor.logoURL}
                layout="fill"
                className={styles.image}
                quality={1}
                priority={true}
              />
            </div>
            {/* <img
              className={styles.logo}
              src={sponsor.logoURL}
              alt={`${sponsor.name} logo`}
              aria-label={`${sponsor.name} logo`}
            /> */}
          </a>
        ))}
      </section>
    </section>
  );
};

export default SponsorsList;
