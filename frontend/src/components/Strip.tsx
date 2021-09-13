import React from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";

import styles from "src/styles/Strip.module.scss";
import { resourceDetails } from "src/data/resourceData";

interface stripProps extends resourceDetails {
  titlePosition: "left" | "right";
}

const Strip: React.FC<stripProps> = ({
  title,
  resourceType,
  resourceLink,
  iconPath,
  backgroundImage,
  titlePosition
}) => {
  // determine if the title and icon should be flipped
  const titleFlip = titlePosition === "right";
  return (
    <div className={styles.strip}>
      <img src={backgroundImage} className={styles.background} alt={title} />
      {resourceType === "page" ? (
        <Link href={resourceLink}>
          <a>
            <div className={styles.stripContent}>
              <Typography variant="h2" color="inherit" className={titleFlip ? styles.flip : ""}>
                {title}
              </Typography>
              <img src={iconPath} className={styles.icon} alt={title} />
            </div>
          </a>
        </Link>
      ) : (
        <a href={resourceLink} target="_blank" rel="noopener noreferrer">
          <div className={styles.stripContent}>
            <Typography variant="h2" color="inherit" className={titleFlip ? styles.flip : ""}>
              {title}
            </Typography>
            <img src={iconPath} className={styles.icon} alt={title} />
          </div>
        </a>
      )}
    </div>
  );
};

// if doesn't look good on mobile - change flex direction of stripContent (mediaQuery)

export default Strip;
