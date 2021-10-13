// Library Imports
import React, { useState } from "react";
import Link from "next/link";

// Component Imports
import { navLink } from "src/data/navLinksData";
import NavDropdown from "./NavDropdown";

// Styling
import styles from "src/styles/NavItem.module.scss";
import { Typography } from "@material-ui/core";

// Clean up, use extend
interface NavItemProps {
  navData: navLink;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavItem: React.FC<NavItemProps> = ({ name, route, dropdown, setOpen }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <li className={styles.navItem}>
      <Link href={route}>
        <a className={styles.navLink}>
          <Typography style={{ color: "inherit" }}>{name}</Typography>
        </a>
      </Link>
      {dropdown.length > 0 ? (
        <div className={styles.dropdownContainer}>
          <img
            src="images/arrowDown.svg"
            className={styles.arrowDown}
            onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
          />
          <img
            src="images/arrowRight.svg"
            className={styles.arrowRight}
            onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
          />
          {isExpanded ? (
            <NavDropdown items={dropdown} setDropdown={setExpanded} baseRoute={route} />
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

// const NavItem: React.FC<NavItemProps> = ({ navData, setOpen, width }) => {
//   // Something is interfering with dropdown when mobile, so new state is used
//   const [dropdown, setDropdown] = React.useState(false);
//   const [dropdownMobile, setDropdownMobile] = React.useState(false);

//   const onMouseEnter = () => setDropdown(true);
//   const onMouseLeave = () => setDropdown(false);

//   const DesktopVersionDropdown = (
//     <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//       {/* Crude fix of type here, may cause errors in the future */}
//       {navData.dropdown && (
//         <NavDropdown items={navData.dropdown} setDropdown={setDropdown} baseRoute={navData.route} />
//       )}
//     </div>
//   );

//   const MobileVersionDropdown = (
//     <div className={styles.mobileContainer}>
//       {navData.dropdown && (
//         <li className={styles.navButton} onClick={() => setOpen(false)}>
//           <Link href={navData.route}>
//             <a style={{ fontSize: "15px" }}>{navData.name}</a>
//           </Link>
//         </li>
//       )}
//       {navData.dropdown &&
//         navData.dropdown.map((item) => (
//           <li key={item.name} className={styles.navButton} onClick={() => setOpen(false)}>
//             <Link href={navData.route + item.subRoute}>
//               <a style={{ fontSize: "15px" }}>{item.name}</a>
//             </Link>
//           </li>
//         ))}
//     </div>
//   );

//   const DesktopVersionItem = (
//     <li className={styles.navButton} onClick={() => setOpen(false)}>
//       <Link href={navData.route}>
//         <a>
//           {navData.name} {navData.dropdown && <div className={styles.navArrow} />}
//         </a>
//       </Link>
//     </li>
//   );

//   const MobileVersionItem = (
//     <>
//       {navData.dropdown ? (
//         <li className={styles.navButton} onClick={() => setDropdownMobile(!dropdownMobile)}>
//           <a>
//             {navData.name} {navData.dropdown && <div className={styles.navArrow} />}
//           </a>
//         </li>
//       ) : (
//         DesktopVersionItem
//       )}
//     </>
//   );

//   return (
//     <div>
//       {/* Done to separate CSS attributes from mainContainer and dropdown */}
//       <div className={styles.mainContainer} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//         {width > 860 ? DesktopVersionItem : MobileVersionItem}
//       </div>
//       {navData.dropdown && dropdown && width > 860 && DesktopVersionDropdown}
//       {navData.dropdown && dropdownMobile && !(width > 860) && MobileVersionDropdown}
//     </div>
//   );
// };

export default NavItem;
