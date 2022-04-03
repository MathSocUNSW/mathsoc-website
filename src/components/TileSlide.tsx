// Library Imports
import React from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

// Styling
import styles from "src/styles/TileSlide.module.scss";

// Data
import { groups as TileSlideProps } from "src/data/revisionData";

const TileSlide: React.FC<TileSlideProps> = ({ groupHeader, groupLinks }) => {
  return (
    <div>
      <Typography variant="h5">{groupHeader}</Typography>
      <ul className={styles.list}>
        {groupLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>
              <a target="_blank">
                <Typography variant="body2" style={{ fontSize: "1rem" }}>
                  {link.name}
                </Typography>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TileSlide;
