import React from "react";
import Link from "next/link";

import { navLink } from "src/data/navLinks";
import styles from "src/styles/NavItem.module.scss";
import NavBarDropdown from "./NavBarDropdown";

interface NavItemProps {
  link: navLink;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavItem: React.FC<NavItemProps> = ({ link, setOpen }) => {
  const [dropdown, setDropdown] = React.useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div key={link.name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <li className={styles.navLink} onClick={() => setOpen(false)}>
        <Link href={link.route}>
          <a>{link.name}</a>
        </Link>
      </li>
      {link.dropdown && dropdown && (
        <NavBarDropdown items={link.dropdown} setDropdown={setDropdown} />
      )}
    </div>
  );
};

export default NavItem;
