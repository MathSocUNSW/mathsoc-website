// Library Imports
import React from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";

// Styling
import styles from "src/styles/NavDropdown.module.scss";

// Data
import { subPage } from "src/data/navLinksData";

interface NavDropdownProps {
  parentItem: string;
  items: subPage[];
  setActiveDropdown: React.Dispatch<React.SetStateAction<number>>;
  baseRoute: string;
  closeMenus: () => void;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  parentItem,
  items,
  setActiveDropdown,
  baseRoute,
  closeMenus
}) => {
  const closeDropdown = () => setActiveDropdown(-1);

  return (
    <ul className={styles.dropdown}>
      <div className={styles.parentBox}>
        <img src="images/leftArrow.svg" className={styles.arrowLeft} onClick={closeDropdown} />
        <Typography>{parentItem}</Typography>
      </div>
      {items.map((item) => (
        <li className={styles.dropdownBox} key={item.name}>
          <Link
            href={item.useRelativeRoute ? baseRoute + item.subRoute : item.subRoute}
            key={item.name}
          >
            <a onClick={closeMenus}>
              <Typography variant="body2" className={styles.item}>
                {item.name}
              </Typography>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavDropdown;
