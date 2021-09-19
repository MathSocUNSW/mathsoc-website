// Library Imports
import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { Container } from "@material-ui/core";

// Component Imports
import NavItem from "./NavItem";

// Styling
import styles from "src/styles/NavBar.module.scss";

// Helper Imports
import useWindowDimensions from "src/helpers/useWindowDimensions";

// Data
import navLinks from "src/data/navLinksData";

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState(false); // mobile
  const [isStuck, setStuck] = useState(false); // sticky
  const { width } = useWindowDimensions();
  if (typeof window !== "undefined")
    window.addEventListener("scroll", () => setStuck(window.scrollY >= 80));
  const stuckShadow = { boxShadow: "1px 3px 20px 0 rgba(0, 0, 0, 0.25)" };
  // TODO: dark mode (with useContext)

  // Get path
  const router = useRouter();
  const paths = router.pathname.split("/").filter((x) => x.length !== 0);
  console.log(paths);
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
              {navLinks.map((item) => (
                <NavItem
                  key={item.name}
                  navData={item}
                  setOpen={setOpen}
                  width={width}
                  currentRouterPath={paths.length === 0 ? null : `/${paths[0]}`} // string formatted for navData
                />
              ))}
            </ul>
          </nav>
          {/* <div className={styles.toggle}> */}
          {/* TODO: Dark Mode Toggle Switch */}
          {/* <Switch /> */}
          {/* </div> */}
          {/* TEMP */}
          <div className={styles.hamburger} style={{ visibility: "hidden" }}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
