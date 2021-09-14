import React from "react";
import Link from "next/link";

import { subPage } from "src/data/navLinksData";
import styles from "src/styles/NavDropdown.module.scss";

interface NavDropdownProps {
  items: subPage[];
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  baseRoute: string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ items, setDropdown, baseRoute }) => {
  return (
    <div className={styles.mainContainer}>
      {items.map((item, index) => (
        <Link href={!item.routeOutside ? baseRoute + item.subRoute : item.subRoute} key={item.name}>
          <a target={!item.routeOutside ? "" : "_blank"}>
            <div
              className={index === items.length - 1 ? styles.itemLast : styles.item}
              onClick={() => setDropdown(false)}
            >
              {item.name}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavDropdown;
