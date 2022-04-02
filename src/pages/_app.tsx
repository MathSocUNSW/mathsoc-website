/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ThemeProvider, Theme, StyledEngineProvider, createTheme } from "@mui/material/styles";
import Layout from "../components/Layout";
import "src/styles/globals.scss";


declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


const theme = createTheme();

interface AppProps {
  Component: any;
  pageProps: any;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
