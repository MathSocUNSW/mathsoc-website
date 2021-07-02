import React from "react";
import Link from "next/link";

import { links as tileLinkProps } from "src/data/revisionData";

const TileLink: React.FC<tileLinkProps> = ({ name, path }) => {
  return (
    <div>
      <li>
        <Link href={path}>
          <a>{name}</a>
        </Link>
      </li>
    </div>
  );
};

export default TileLink;
