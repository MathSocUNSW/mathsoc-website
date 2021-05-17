import React, { useState, useContext } from "react";
import { Container, Switch } from "@material-ui/core";
import Link from "next/link";

import navLinks from "src/data/navLinks";
import styles from "src/styles/NavBar.module.scss";
import Hamburger from "hamburger-react";


const NavBar: React.FC = () => {
  // mobile
  const [isOpen, setOpen] = useState(false);
  // sticky
  const [isStuck, setStuck] = useState(false);
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setStuck(window.scrollY >= 80));
  }
  const stuckShadow = {
    boxShadow: "1px 3px 20px 0 rgba(0, 0, 0, 0.25)",
  }
  // dark mode (useContext)


  return (
    <header className={styles.navbar} style={isStuck ? stuckShadow : {}}>
      <Container>
        <div className={styles.navbarContent}>
          <div className={styles.hamburger}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className={styles.logoContainer}>
            <Link href="/">
              <a>
                <img
                  src="/images/mathsocLogoLong.svg"
                  className={styles.logo}
                  alt="MathSoc Logo"
                  aria-label="logo"
                />
              </a>
            </Link>
          </div>
          <nav className={isOpen ? `${styles.navItems}` + ` ${styles.open}` : `${styles.navItems}`}>
            <ul className={styles.navLinks}>
              {navLinks.map(({ name, route }) => (
                <li key={name} className={styles.navLink} onClick={() => setOpen(false)}>
                  <Link href={route}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.toggle}>
            <Switch />
          </div>
        </div>
      </Container>
    </header>
  );
}


// const NavBar: React.FC = () => {
//   // mobile hamburger
//   const [isOpen, setOpen] = useState(false);
//   // desktop sticky navbar
//   const [isStuck, setStuck] = useState(false);
//   // window.addEventListener('scroll', () => setStuck(window.scrollY >= 80));

//   return (
//     <nav className={isStuck ? 'stuck' : ''}>
//       <div className={styles.mainContainer}>
//         <div className={styles.leftLogoContainer}>
//           <Link href="/">
//             <a>
//               <img
//                 src="/images/mathsocLogoLong.svg"
//                 className={styles.logo}
//                 alt="mathsoc logo"
//                 aria-label="logo"
//               />
//             </a>
//           </Link>
//         </div>
//         <div>
//           <ul className={styles.navBarList}>
//             {navLinks.map(({ name, route }) => (
//               <li key={name} className={styles.navItemBox}>
//                 <Link href={route}>
//                   <a className={styles.navLink}>
//                     <span className={styles.navItemText}>{name}</span>
//                   </a>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div>
//         <div className={styles.mobileMainContainer}>
//           <div style={{ visibility: "hidden" }}>
//             {/* For easy flex box */}
//             <Hamburger toggled={isOpen} toggle={setOpen} />
//           </div>
//           <Link href="/">
//             <img
//               src="/images/mathsocLogoLong.svg"
//               className={styles.logo}
//               alt="mathsoc logo"
//               aria-label="logo"
//               onClick={() => setOpen(false)}
//             />
//           </Link>

//           <div>
//             <Hamburger toggled={isOpen} toggle={setOpen} />
//           </div>
//         </div>
//         {isOpen && (
//           <div className={styles.mobileDropdown}>
//             {/* <div className={styles.mobileDropdownLeft}></div> */}
//             <div className={styles.mobileDropdownMiddle}>
//               <ul className={styles.mobileList}>
//                 {navLinks.map(({ name, route }) => (
//                   <li key={name} className={styles.navItemBox} onClick={() => setOpen(false)}>
//                     <Link href={route}>
//                       <span className={styles.navItemText}>{name}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             {/* <div className={styles.mobileDropdownRight}></div> */}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

export default NavBar;

// NOTE: fix mobile vert cent