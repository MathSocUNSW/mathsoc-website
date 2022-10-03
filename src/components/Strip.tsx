// Library Imports
import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

// Styling
import styles from "src/styles/Strip.module.scss";
const { motion } = require("framer-motion"); //eslint-disable-line

// Data
import { resourceDetails as stripProps } from "src/data/resourceData";

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
    <motion.div
      className={styles.strip}
      transition={{
        duration: 1,
        type: "easeOut"
      }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <img src={backgroundImage} className={styles.background} alt={title} />
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
    </motion.div>
  );
};

// if doesn't look good on mobile - change flex direction of stripContent (mediaQuery)

export default Strip;
