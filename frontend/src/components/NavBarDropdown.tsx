import React from "react";
import Link from "next/link";

import styles from "src/styles/NavBarDropdown.module.scss";
import { subPage } from "src/data/navLinks";

interface NavBarDropdownProps {
  items: subPage[];
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarDropdown: React.FC<NavBarDropdownProps> = ({ items, setDropdown }) => {
  return (
    <div className={styles.mainContainer}>
      {items.map((item) => (
        <div key={item.name} className={styles.item} onClick={() => setDropdown(false)}>
          <Link href={item.route}>
            <a>{item.name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavBarDropdown;
