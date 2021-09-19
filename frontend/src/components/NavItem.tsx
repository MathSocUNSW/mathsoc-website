import React from "react";
import Link from "next/link";

import { navLink } from "src/data/navLinksData";
import styles from "src/styles/NavItem.module.scss";
import NavDropdown from "./NavDropdown";
import { useDropdownData } from "src/utils/DropdownContext";

// Clean up, use extend
interface NavItemProps {
  navData: navLink;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width: number;
  currentRouterPath: string | null;
}

const NavItem: React.FC<NavItemProps> = ({ navData, setOpen, width, currentRouterPath }) => {
  // Something is interfering with dropdown when mobile, so new state is used
  const [dropdown, setDropdown] = React.useState(false);
  const [dropdownMobile, setDropdownMobile] = React.useState(false);

  const onMouseEnter = () => setDropdown(true);
  const onMouseLeave = () => setDropdown(false);

  const { currentDropdownOpen, setCurrentDropdownOpen } = useDropdownData();

  const DesktopVersionDropdown = (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/* Crude fix of type here, may cause errors in the future */}
      {navData.dropdown && (
        <NavDropdown items={navData.dropdown} setDropdown={setDropdown} baseRoute={navData.route} />
      )}
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

  /**
   * NOTE: Any changes made to `DesktopVersionItem` should be made to `MobileVersionItem`,
   * otherwise page loading might not be consistent.
   *
   * It could probably be decoupled better
   */

  const DesktopVersionItem = (
    <li
      className={`${styles.navButton} ${
        navData.route === currentRouterPath ? styles.navButtonActivePage : ""
      }`}
      onClick={() => setOpen(false)}
    >
      <Link href={navData.route}>
        <a>
          <span>{navData.name}</span> {navData.dropdown && <div className={styles.navArrow} />}
        </a>
      </Link>
    </li>
  );

  const handleMobileOnClick = () => {
    setDropdownMobile(!dropdownMobile);
    if (setCurrentDropdownOpen) setCurrentDropdownOpen(navData.route);
  };

  React.useEffect(() => {
    if (dropdownMobile && currentDropdownOpen !== navData.route) {
      setDropdownMobile(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDropdownOpen]);

  const MobileVersionItem = (
    <>
      {navData.dropdown ? (
        <li
          className={`${styles.navButton} ${
            navData.route === currentRouterPath ? styles.navButtonActivePage : ""
          }`}
          onClick={handleMobileOnClick}
        >
          <a>
            <span>{navData.name}</span> {navData.dropdown && <div className={styles.navArrow} />}
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
