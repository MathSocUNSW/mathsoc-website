import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import { createTheme, ThemeProvider } from "@material-ui/core";
import styles from "src/styles/Layout.module.scss";

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 600
    },
    h2: {
      fontSize: "2.75rem",
      color: "#201B4B",
      fontWeight: 500,
      margin: "0.75rem 0"
    },
    h4: {
      fontSize: "1.6rem",
      color: "#081f32",
      fontWeight: 600
    },
    h5: {
      fontSize: "1.45rem",
      fontWeight: 500,
      margin: "0.5rem 0"
    },
    h6: {
      fontSize: "1.3rem",
      color: "#081f32"
    },
    body1: {
      fontSize: "1.05rem",
      margin: "0.5rem 0",
      lineHeight: "1.6rem"
    },
    body2: {
      fontSize: "0.9rem"
    },
    subtitle1: {
      fontSize: "1rem",
      color: "#6e798c",
      marginTop: "0.3rem"
    }
  }
});

const Layout: React.FC<unknown> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.content}>
        <div className={styles.header}>
          <NavBar />
        </div>
        <article>{children}</article>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
