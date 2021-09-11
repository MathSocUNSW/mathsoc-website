import React, { useState } from "react";
import { Typography } from "@material-ui/core";

import { revisionTile as tileProps } from "src/data/revisionData";
import TileSlide from "./TileSlide";
import styles from "src/styles/tile.module.scss";

const Tile: React.FC<tileProps> = ({ courseCode, courseTitle, revisionLinks }) => {
  const [index, setIndex] = useState(-1);

  const element = revisionLinks[index];
  const slideVisibility = revisionLinks.map(
    (group, index) => group == element && <TileSlide {...group} key={index} />
  );
  return (
    // TODO: first page is clickable, animation on first arrow
    <div className={styles.tile}>
      <div className={styles.tileContent}>
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
            <span>
              Explore
              <img src="/images/resources/arrowRHS.png" alt="right-hand arrow" />
            </span>
          </button>
        )}
        {/* LHS Arrow */}
        {index > -1 && (
          <button onClick={() => setIndex(index - 1)} className={styles.arrow}>
            <img src="/images/resources/arrowLHS.png" alt="left-hand arrow" />
          </button>
        )}
        {/* RHS Arrow */}
        {index > -1 && (
          <button
            onClick={() => setIndex(index + 1)}
            className={index < revisionLinks.length - 1 ? styles.arrow : styles.disabled}
          >
            <img src="/images/resources/arrowRHS.png" alt="right-hand arrow" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Tile;
