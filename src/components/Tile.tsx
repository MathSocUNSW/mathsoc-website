// Library Imports
import React, { useState } from "react";
import { Typography } from "@mui/material";

// Component Imports
import TileSlide from "./TileSlide";

// Styling
import styles from "src/styles/Tile.module.scss";
const { motion } = require("framer-motion");

// Data
import { RevisionTile as TileProps } from "src/data/revisionData";

const Tile: React.FC<TileProps> = ({ courseCode, courseTitle, revisionLinks }) => {
  const [index, setIndex] = useState(-1);

  const element = revisionLinks[index];
  const slideVisibility = revisionLinks.map(
    (slide, index) => slide == element && <TileSlide {...slide} key={index} />
  );
  return (
    // TODO: entire first page is clickable?
    <motion.div
      data-testid="tile"
      className={styles.tile}
      transition={{
        duration: 1,
        type: "easeOut"
      }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className={styles.tileContent}>
        <div className={styles.tileSlides}>
          {/* Front Slide */}
          {index < 0 && (
            <div>
              <img className={styles.icon} src="/images/resources/tileIcon.png" alt="icon" />
              <Typography variant="h4" color="inherit">
                {courseCode}
              </Typography>
              <Typography variant="h5" color="inherit">
                {courseTitle}
              </Typography>
            </div>
          )}
          {/* Back Slide/s */}
          {index >= 0 && (
            <div>
              <Typography variant="h4" color="inherit">
                {courseCode}
              </Typography>
              <div>{slideVisibility}</div>
            </div>
          )}
        </div>

        {/* Navigation Bar */}
        <div className={styles.nav}>
          {/* Explore Arrow*/}
          {index < 0 && (
            <button onClick={() => setIndex(index + 1)} className={styles.exploreArrow}>
              Explore
              <img src="/images/resources/arrowRHS.png" alt="right-hand arrow" draggable="false" />
            </button>
          )}
          {/* LHS Arrow */}
          {index > -1 && (
            <button role="previous" onClick={() => setIndex(index - 1)} className={styles.arrow}>
              <img src="/images/resources/arrowLHS.png" alt="left-hand arrow" draggable="false" />
            </button>
          )}
          {/* RHS Arrow */}
          {index > -1 && (
            <button
              role="next"
              onClick={() => setIndex(index + 1)}
              className={index < revisionLinks.length - 1 ? styles.arrow : styles.disabled}
            >
              <img src="/images/resources/arrowRHS.png" alt="right-hand arrow" draggable="false" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Tile;
