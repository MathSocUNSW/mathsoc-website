import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import styles from "src/styles/Layout.module.scss";

const Layout: React.FC<unknown> = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
