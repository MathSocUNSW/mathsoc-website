import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: "DM Sans",
    h2: {
      fontWeight: 500
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
