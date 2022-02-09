// Library Imports
import React, { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { Container } from "@material-ui/core";

// Component Imports
import NavItem from "./NavItem";

// Styling
import styles from "src/styles/NavBar.module.scss";

// Data
import navLinks from "src/data/navLinksData";

interface NavItemsProps {
  isMobile?: boolean;
  activeDropdown: number;
  setActiveDropdown: React.Dispatch<React.SetStateAction<number>>;
  closeMenus: () => void;
}

const NavItems: React.FC<NavItemsProps> = ({
  isMobile = false,
  activeDropdown,
  setActiveDropdown,
  closeMenus
}) => {
  return (
    <ul className={isMobile ? styles.navItemsMobile : styles.navItems}>
      {navLinks.map((item, index) => (
        <NavItem
          key={index}
          // index={index} // NavItems have the same state on both mobile and desktop
          index={(isMobile ? 1 : 2) * index} // separates mobile and desktop state for same NavItem
          {...item}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          closeMenus={closeMenus}
        />
      ))}
    </ul>
  );
};

const NavBar: React.FC = () => {
  // mobile
  const [isOpen, setOpen] = useState(false);

  // sticky
  const [isStuck, setStuck] = useState(false);
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setStuck(window.scrollY >= 80));
  }
  const stuckShadow = {
    boxShadow: "1px 3px 20px 0 rgba(0, 0, 0, 0.1)"
  };

  // global dropdown state
  const [activeDropdown, setActiveDropdown] = useState(-1);
  const closeMenus = () => {
    setActiveDropdown(-1);
    setOpen(false);
  };

  return (
    <header className={styles.navbar} style={isStuck ? stuckShadow : {}}>
      <Container>
        <div className={styles.navbarContent}>
          <div className={styles.hamburger}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
          </div>
          <Link href="/">
            <a>
              <img
                src="/images/mathsocWhite.svg"
                className={styles.logo}
                alt="MathSoc Logo"
                aria-label="logo"
                onClick={closeMenus}
              />
            </a>
          </Link>
          <NavItems
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            closeMenus={closeMenus}
          />
          <a
            href="https://unsw-mathematics-society.square.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/shop.svg"
              className={styles.shop}
              alt="MathSoc Shop"
              aria-label="logo"
            />
          </a>
          {isOpen ? (
            <NavItems
              isMobile
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              closeMenus={closeMenus}
            />
          ) : (
            <></>
          )}
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
