import React from "react";
import Link from "next/link";

import { navLink } from "src/data/navLinks";
import styles from "src/styles/NavItem.module.scss";
import NavDropdown from "./NavDropdown";

// Clean up, use extend
interface NavItemProps {
  navData: navLink;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
}

const NavItem: React.FC<NavItemProps> = ({ navData, setOpen, width }) => {
  const [dropdown, setDropdown] = React.useState(false);

  const onMouseEnter = () => setDropdown(true);
  const onMouseLeave = () => setDropdown(false);

  const DesktopVersion = (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <NavDropdown items={navData.dropdown} setDropdown={setDropdown} baseRoute={navData.route} />
    </div>
  );

  const MobileVersion = (
    <div className={styles.mobileContainer}>
      {navData.dropdown &&
        navData.dropdown.map((item) => (
          <li key={item.name} className={styles.navButton} onClick={() => setOpen(false)}>
            <Link href={navData.route + item.subRoute}>
              <a style={{ fontSize: "15px" }}>{item.name}</a>
            </Link>
          </li>
        ))}
    </div>
  );

  return (
    <div>
      {/* Done to separate CSS attributes from mainContainer and dropdown */}
      <div className={styles.mainContainer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <li className={styles.navButton} onClick={() => setOpen(false)}>
          <Link href={navData.route}>
            <a>
              {navData.name} {navData.dropdown && <div className={styles.navArrow} />}
            </a>
          </Link>
        </li>
      </div>
      {navData.dropdown && dropdown && width > 860 && DesktopVersion}
      {navData.dropdown && !(width > 860) && MobileVersion}
    </div>
  );
};

export default NavItem;
