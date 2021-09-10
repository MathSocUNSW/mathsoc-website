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
      {items.map((item) => (
        <Link href={baseRoute + item.subRoute} key={item.name}>
          <a>
            <div className={styles.item} onClick={() => setDropdown(false)}>
              {item.name}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavDropdown;
