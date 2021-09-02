import React from "react";
import Head from "next/head";

import { Typography } from "@material-ui/core";
import ContainerWrap from "components/ContainerWrap";
import Hero from "components/Hero";
import { grid } from "@material-ui/system";

import sponsorsData from "src/data/sponsorsData";

import SponsorsPg from "components/SponsorsPg";

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
          <Typography variant="h2" align="center">Sponsorship Opportunities</Typography>
          <Typography variant="h5" align="center">
            If you are interested about sponsoring opportunities or have any questions, 
            please contact our Sponsorship Directors at sponsorship@mathsoc.unsw.edu.au
          </Typography>
          <Typography variant="h2">Principal Sponsors</Typography>
            {sponsorsData.map((sponsor) => (
              <SponsorsPg {...sponsor} typeCheck="principal" />
            ))}
          <Typography variant="h2">Partners</Typography>
            {sponsorsData.map((sponsor) => (
              <SponsorsPg {...sponsor} typeCheck="partner" />
            ))}
        </div>
      </ContainerWrap>
    </section>
  );
};

export default Sponsors;
