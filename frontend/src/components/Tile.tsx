// Library Imports
import React, { useState } from "react";
import { Typography } from "@material-ui/core";

// Component Imports
import TileGroup from "./TileGroup";

// Styling
import styles from "src/styles/Tile.module.scss";

// Data
import { revisionTile as TileProps } from "src/data/revisionData";

const Tile: React.FC<TileProps> = ({ courseCode, courseTitle, revisionLinks }) => {
  const [index, setIndex] = useState(-1);

  const element = revisionLinks[index];
  const slideVisibility = revisionLinks.map(
    (group, index) => group == element && <TileGroup {...group} key={index} />
  );

  return (
    <div className={styles.tile}>
      <div className={styles.tileContent}>
        {/* Front Tile Content */}
        {index < 0 && (
          <div className={styles.frontTile}>
            <img className={styles.icon} src="/images/resources/tileIcon.png" alt="icon" />
            <Typography variant="h4" color="inherit">
              {courseCode}
            </Typography>
            <Typography variant="h5" color="inherit">
              {courseTitle}
            </Typography>
          </div>
        )}
        {/* Back Tile Content */}
        {index >= 0 && (
          <div className={styles.backTile}>
            <Typography variant="h4" color="inherit">
              {courseCode}
            </Typography>
            <div className={styles.slideshow}>{slideVisibility}</div>
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <div className={index <= -1 ? styles.traverserFront : styles.traverserBack}>
        {/* Explore */}
        {index < 0 && (
          <a onClick={() => setIndex(index + 1)} className={styles.text}>
            Explore
          </a>
        )}
        {/* LHS Arrow */}
        {index > -1 && (
          <a onClick={() => setIndex(index - 1)} className={styles.arrowLHS}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.80425 4.47132C6.0646 4.21097 6.0646 3.78886 5.80425 3.52851C5.5439 3.26816 5.12179 
                3.26816 4.86144 3.52851L0.861441 7.52851C0.601091 7.78886 0.601091 8.21097 0.861441 
                8.47132L4.86144 12.4713C5.12179 12.7317 5.5439 12.7317 5.80425 12.4713C6.0646 12.211 
                6.0646 11.7889 5.80425 11.5285L2.94231 8.66657H14.659C15.0312 8.66657 15.333 8.3681 
                15.333 7.99991C15.333 7.63172 15.0312 7.33324 14.659 7.33324H2.94233L5.80425 4.47132Z"
                fill="#201B4B"
              />
            </svg>
          </a>
        )}
        {/* RHS Arrow */}
        {index < revisionLinks.length - 1 && (
          <a onClick={() => setIndex(index + 1)} className={styles.arrowRHS}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1958 4.47132C9.9354 4.21097 9.9354 3.78886 10.1958 3.52851C10.4561 3.26816 
                10.8782 3.26816 11.1386 3.52851L15.1386 7.52851C15.3989 7.78886 15.3989 8.21097 15.1386 
                8.47132L11.1386 12.4713C10.8782 12.7317 10.4561 12.7317 10.1958 12.4713C9.9354 12.211 
                9.9354 11.7889 10.1958 11.5285L13.0577 8.66657H1.34101C0.968761 8.66657 0.666992 8.3681 
                0.666992 7.99991C0.666992 7.63172 0.968761 7.33324 1.34101 7.33324H13.0577L10.1958 4.47132Z"
                fill="#201B4B"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default Tile;
