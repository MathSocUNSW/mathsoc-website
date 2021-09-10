import React from "react";
import Link from "next/link";

import { navLink } from "src/data/navLinksData";
import styles from "src/styles/NavItem.module.scss";
import NavDropdown from "./NavDropdown";

// Clean up, use extend
interface NavItemProps {
  navData: navLink;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
}

const NavItem: React.FC<NavItemProps> = ({ navData, setOpen, width }) => {
  // Something is interfering with dropdown when mobile, so new state is used
  const [dropdown, setDropdown] = React.useState(false);
  const [dropdownMobile, setDropdownMobile] = React.useState(false);

  const onMouseEnter = () => setDropdown(true);
  const onMouseLeave = () => setDropdown(false);

  const DesktopVersionDropdown = (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <NavDropdown items={navData.dropdown} setDropdown={setDropdown} baseRoute={navData.route} />
    </div>
  );

  const MobileVersionDropdown = (
    <div className={styles.mobileContainer}>
      {navData.dropdown && (
        <li className={styles.navButton} onClick={() => setOpen(false)}>
          <Link href={navData.route}>
            <a style={{ fontSize: "15px" }}>{navData.name}</a>
          </Link>
        </li>
      )}
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

  const DesktopVersionItem = (
    <li className={styles.navButton} onClick={() => setOpen(false)}>
      <Link href={navData.route}>
        <a>
          {navData.name} {navData.dropdown && <div className={styles.navArrow} />}
        </a>
      </Link>
    </li>
  );

  const MobileVersionItem = (
    <>
      {navData.dropdown ? (
        <li className={styles.navButton} onClick={() => setDropdownMobile(!dropdownMobile)}>
          <a>
            {navData.name} {navData.dropdown && <div className={styles.navArrow} />}
          </a>
        </li>
      ) : (
        DesktopVersionItem
      )}
    </>
  );

  return (
    <div>
      {/* Done to separate CSS attributes from mainContainer and dropdown */}
      <div className={styles.mainContainer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {width > 860 ? DesktopVersionItem : MobileVersionItem}
      </div>
      {navData.dropdown && dropdown && width > 860 && DesktopVersionDropdown}
      {navData.dropdown && dropdownMobile && !(width > 860) && MobileVersionDropdown}
    </div>
  );
};

export default NavItem;
