import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "DM Sans",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 600
    },
    h2: {
      fontSize: "2.75rem",
      color: "#201B4B",
      fontWeight: 500
    },
    h5: {
      fontSize: "1.45rem",
      fontWeight: 500
    },
    body1: {
      fontSize: "1.05rem"
    }
  }
});

const Layout: React.FC<unknown> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
