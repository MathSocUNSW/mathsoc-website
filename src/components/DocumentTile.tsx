import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import styles from "../styles/DocumentTile.module.scss";
import { Typography } from "@mui/material";
import { revisionSheetTile as SheetTileProps } from "src/data/revisionSheetData";
const DocumentTile: React.FC<SheetTileProps> = ({ path, courseCode, courseTitle }) => {
  return (
    <a
      data-testid="document-tile"
      className={styles.noDecoration}
      href={path}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.tile}>
        <div className={styles.tileContent}>
          <DescriptionOutlinedIcon fontSize="large" />
          <Typography variant="h4">{courseCode}</Typography>
          <Typography variant="h5">{courseTitle}</Typography>
        </div>
      </div>
    </a>
  );
};

export default DocumentTile;
