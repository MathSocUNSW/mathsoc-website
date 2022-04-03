// Library Imports
import React from "react";
import { createTheme, ThemeProvider, Theme, StyledEngineProvider } from "@mui/material";
import "@mui/styles";

// Component Imports
import Footer from "./Footer";
import NavBar from "./NavBar";

// Styling
import styles from "src/styles/Layout.module.scss";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  typography: {
    fontFamily: "DM Sans",
    h1: {
      fontSize: "3.45rem",
      ["@media screen and (max-width: 860px)"]: {
        fontSize: "2.6rem"
      },
      fontWeight: 600
    },
    h2: {
      fontSize: "2.3rem",
      color: "#201B4B",
      fontWeight: 500,
      margin: "0.2rem 0"
    },
    h4: {
      fontSize: "1.6rem",
      color: "#081f32",
      fontWeight: 600
    },
    h5: {
      fontSize: "1.45rem",
      fontWeight: 500,
      margin: "0.2rem 0"
    },
    h6: {
      fontSize: "1.2rem",
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
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className={styles.content}>
          <div className={styles.header}>
            <NavBar />
          </div>
          <article>{children}</article>
          <Footer />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Layout;
