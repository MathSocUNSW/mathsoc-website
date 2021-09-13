import React from "react";
import Layout from "../components/Layout";
import "src/styles/globals.scss";

interface AppProps {
  Component: any;
  pageProps: any;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
