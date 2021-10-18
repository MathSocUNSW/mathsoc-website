// Library Imports
import React from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";

// Component Imports
import NavDropdown from "./NavDropdown";

// Styling
import styles from "src/styles/NavItem.module.scss";

// Data
import { navLink } from "src/data/navLinksData";

interface NavItemProps extends navLink {
  index: number;
  activeDropdown: number;
  setActiveDropdown: React.Dispatch<React.SetStateAction<number>>;
  closeMenus: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  index,
  name,
  route,
  dropdown,
  mobileOnly,
  activeDropdown,
  setActiveDropdown,
  closeMenus
}) => {
  // change dropdown state
  const isExpanded = activeDropdown === index;
  const toggleDropdown = () => {
    if (isExpanded) setActiveDropdown(-1);
    else setActiveDropdown(index);
  };

  return (
    <li className={mobileOnly ? `${styles.navItem} ${styles.mobileOnly}` : styles.navItem}>
      <Link href={route}>
        <a className={styles.navLink} onClick={closeMenus}>
          <Typography style={{ color: "inherit" }}>{name}</Typography>
        </a>
      </Link>
      {dropdown.length > 0 ? (
        <div className={styles.dropdownContainer}>
          <img src="images/arrowDown.svg" className={styles.arrowDown} onClick={toggleDropdown} />
          <img src="images/rightArrow.svg" className={styles.arrowRight} onClick={toggleDropdown} />
          {isExpanded ? (
            <NavDropdown
              parentItem={name}
              items={dropdown}
              setActiveDropdown={setActiveDropdown}
              baseRoute={route}
              closeMenus={closeMenus}
            />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </li>
  );
};

export default NavItem;
