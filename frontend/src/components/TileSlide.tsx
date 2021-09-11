import React from "react";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import { groups } from "src/data/revisionData";

const TileSlide: React.FC<groups> = ({ groupHeader, groupLinks }) => {
  return (
    <div>
      <Typography variant="h5">{groupHeader}</Typography>
      <ul>
        {groupLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TileSlide;
