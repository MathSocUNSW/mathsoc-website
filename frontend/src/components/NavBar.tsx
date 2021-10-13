// Library Imports
import React, { useState, useContext } from "react";
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

interface NavItemsProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className: string;
}

const NavItems: React.FC<NavItemsProps> = ({ setOpen, className }) => {
  return (
    <ul className={className}>
      {navLinks.map((item) => (
        <NavItem key={item.name} {...item} setOpen={setOpen} />
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

  const { width } = useWindowDimensions();

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
              />
            </a>
          </Link>
          <NavItems setOpen={setOpen} className={styles.navItems} />
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
          {isOpen ? <NavItems setOpen={setOpen} className={styles.navItemsMobile} /> : <></>}
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
