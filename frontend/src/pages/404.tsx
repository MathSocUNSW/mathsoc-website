import React from "react";
import Head from "next/head";

import { Typography } from "@material-ui/core";
import ContainerWrap from "components/ContainerWrap";

const Unknown404: React.FC = () => {
  return (
    <section>
      <Head>
        <title>404 - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <ContainerWrap>
        {/* Hero: Page Not Found */}
        <div style={{ display: "grid", placeItems: "center" }}>
          <Typography variant="h1">Page Not Found</Typography>
          <Typography variant="h5">Insert random maths 404 joke (like the train thingy)</Typography>
        </div>
      </ContainerWrap>
    </section>
  );
};

export default Unknown404;
