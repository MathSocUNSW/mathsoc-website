import React, { useState, useContext } from "react";
import Link from "next/link";
import { Container, Switch } from "@material-ui/core";

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
  // TODO: dark mode (with useContext)

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
            {/* TODO: Dark Mode Toggle Switch */}
            <Switch />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default NavBar;