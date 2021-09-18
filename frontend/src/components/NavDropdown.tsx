// Library Imports
import React from "react";
import Link from "next/link";

// Styling
import styles from "src/styles/NavDropdown.module.scss";

// Data
import { subPage } from "src/data/navLinksData";

interface NavDropdownProps {
  items: subPage[];
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  baseRoute: string;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ items, setDropdown, baseRoute }) => {
  return (
    <div className={styles.mainContainer}>
      {items.map((item, index) => (
        <Link
          href={!item.externalRoute ? baseRoute + item.subRoute : item.subRoute}
          key={item.name}
        >
          <a>
            <div
              className={`${styles.item} ${index === items.length - 1 ? styles.itemLast : ""}`}
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
