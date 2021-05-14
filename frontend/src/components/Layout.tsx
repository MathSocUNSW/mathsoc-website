import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import styles from "src/styles/Layout.module.scss";

const Layout: React.FC<unknown> = ({ children }) => {
  return (
    <section className={styles.content}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <section className={styles["grid-left_side"]}></section>
      <article>{children}</article>
      <section className={styles["grid-right_side"]}></section>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default Layout;
