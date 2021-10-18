// Library Imports
import React from "react";
import Image from "next/image";
import { Typography } from "@material-ui/core";

// Styling
import styles from "src/styles/SponsorsList.module.scss";

// Data
import sponsorsData from "src/data/sponsorsData";

const SponsorsList: React.FC = () => {
  return (
    <section className={styles.mainContainer}>
      <Typography variant="h2" align="center">
        Our Sponsors
      </Typography>
      <div className={styles.sponsorsContainer}>
        {sponsorsData.map((sponsor, index) => (
          <a key={index} href={sponsor.websiteURL} target="_blank" rel="noopener noreferrer">
            <div className={styles.imageContainer}>
              <Image
                src={sponsor.logoPath}
                layout="fill"
                className={styles.image}
                quality={1}
                priority={true}
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SponsorsList;
