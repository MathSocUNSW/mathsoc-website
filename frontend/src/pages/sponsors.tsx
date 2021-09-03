import React from "react";
import Head from "next/head";

import { Typography } from "@material-ui/core";
import ContainerWrap from "components/ContainerWrap";
import Hero from "components/Hero";
import WholePageBox from "components/WholePageBox";

import sponsorsData from "src/data/sponsorsData";
import SponsorsPg from "components/SponsorsPg";
import styles from "src/styles/SponsorsPg.module.scss";

const Sponsors: React.FC = () => {
  return (
    <section>
      <Head>
        <title>Sponsors - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_sponsors.png" text="Sponsors" textColor="dark"/>
      <ContainerWrap>
      <WholePageBox>
        <div className={styles.container}>
          <Typography variant="h7" align="center" className={styles.title}>Sponsorship Opportunities</Typography>
          <br></br>
          <Typography align="center">
            If you are interested about sponsoring opportunities or have any 
            questions, please contact our Sponsorship Directors at <br></br>
            sponsorship@mathsoc.unsw.edu.au
          </Typography>
          <br></br><br></br>
          <Typography variant="h7" className={styles.title}>Principal Sponsors</Typography>
            {sponsorsData.map((sponsor) => (
              <SponsorsPg {...sponsor} typeCheck="principal" />
            ))} 
          <br></br><br></br>
          <Typography variant="h7" className={styles.title}>Partners</Typography>
            {sponsorsData.map((sponsor) => (
              <SponsorsPg {...sponsor} typeCheck="partner" />
            ))}
        </div>
      </WholePageBox>
      </ContainerWrap>
    </section>
  );
};

export default Sponsors;
