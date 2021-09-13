// Library Imports
import React from "react";
import { Typography } from "@material-ui/core";

// Component Imports
import TileLink from "./TileLink";

// Styling
import styles from "src/styles/TileGroup.module.scss";

// Data
import { groups as TileGroupProps } from "src/data/revisionData";

const TileGroup: React.FC<TileGroupProps> = ({ groupHeader, groupLinks }) => {
  return (
    <div>
      <Typography variant="h5">{groupHeader}</Typography>
      <ul className={styles.tileGroup}>
        {groupLinks.map((link, index) => (
          <TileLink {...link} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default TileGroup;
