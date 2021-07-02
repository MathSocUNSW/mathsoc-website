import React from "react";
import Head from "next/head";

import { Typography } from "@material-ui/core";
import ContainerWrap from "components/ContainerWrap";
import Hero from "components/Hero";
import { grid } from "@material-ui/system";

const Sponsors: React.FC = () => {
  return (
    <section>
      <Head>
        <title>Sponsors - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_skating.png" text="Sponsors" />
      <ContainerWrap>
        <div style={{ display: "grid", placeItems: "center" }}>
          <Typography variant="body1">Under construction</Typography>
        </div>
      </ContainerWrap>
    </section>
  );
};

export default Sponsors;
