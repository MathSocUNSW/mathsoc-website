// Library Imports
import React from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";

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
    <ul className={styles.dropdown}>
      {items.map((item, index) => (
        <li className={styles.dropdownBox}>
          <Link
            href={!item.externalRoute ? baseRoute + item.subRoute : item.subRoute}
            key={item.name}
          >
            <a onClick={() => setDropdown(false)}>
              <Typography variant="body2" style={{ color: "white" }} className={styles.item}>
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
