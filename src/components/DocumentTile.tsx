import React from "react";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import styles from "../styles/DocumentTile.module.scss";
import { Typography } from "@material-ui/core";
import { revisionSheetTile as SheetTileProps } from "src/data/revisionSheetData";
const DocumentTile: React.FC<SheetTileProps> = (props) => {
  return (
    <a className={styles.noDecoration} href={props.path} target="_blank" rel="noreferrer">
      <div className={styles.tile}>
        <div className={styles.tileContent}>
          <DescriptionOutlinedIcon fontSize="large" />
          <Typography variant="h4">{props.courseCode}</Typography>
          <Typography variant="h5">{props.courseTitle}</Typography>
        </div>
      </div>
    </a>
  );
};

export default DocumentTile;
