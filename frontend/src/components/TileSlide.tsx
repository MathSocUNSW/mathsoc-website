// Library Imports
import React from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";

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
              <a>
                <Typography variant="body2">{link.name}</Typography>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TileSlide;
