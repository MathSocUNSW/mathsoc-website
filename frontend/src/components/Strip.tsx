import React from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";

/* My own imports */
import styles from "src/styles/strip.module.scss";
import { resourceDetails } from "src/data/resourceData";

interface stripProps extends resourceDetails {
  titlePosition: "left" | "right";
}

/* 
- do we need rel="noreferrer" for an internal link? - nope - use Next Link for internal links
- what typography varient should I be using? How can I check the different styles? 
(I've just arbitarily picked h2) - trial and error - looks fine
*/
const Strip: React.FC<stripProps> = ({
  title,
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
      <Link href={resourceLink}>
        <a>
          <div className={styles.stripContent}>
            <Typography variant="h2" color="inherit" className={titleFlip && styles.flip}>
              {title}
            </Typography>
            <img src={iconPath} className={styles.icon} alt={title} />
          </div>
        </a>
      </Link>
    </div>
  );
};

// if doesn't look good on mobile - change flex direction of stripContent (mediaQuery)

export default Strip;
