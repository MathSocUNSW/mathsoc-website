import React from "react";
import Head from "next/head";

import { Typography } from "@material-ui/core";
import ContainerWrap from "components/ContainerWrap";
import Hero from "components/Hero";
import WholePageBox from "components/WholePageBox";

import sponsorsData from "src/data/sponsorsData";
import SponsorsBox from "components/SponsorsBox";
import styles from "src/styles/SponsorsPg.module.scss";

import alphabeticalSort from "src/helpers/alphabeticalSort";

const Sponsors: React.FC = () => {
  const parsedSponsors = sponsorsData.sort(alphabeticalSort);
  const parsedPrincipal = parsedSponsors.filter((sponsor) => sponsor.type == "principal");
  const parsedPartner = parsedSponsors.filter((sponsor) => sponsor.type == "partner");
  return (
    <section>
      <Head>
        <title>Sponsors - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_sponsors.png" text="Sponsors" />
      <ContainerWrap>
        <WholePageBox>
          <div className={styles.container}>
            <div className={styles.title}>Sponsorship Opportunities</div>
            <Typography variant="body1" align="center">
              If you are interested about sponsoring opportunities or have any questions, please
              contact our Sponsorship Directors at <br></br>
              sponsorship@mathsoc.unsw.edu.au
            </Typography>
          </div>
        </WholePageBox>
        <WholePageBox>
          <div className={styles.container}>
            <div className={styles.title}>Principal Sponsors</div>
            {parsedPrincipal.map((sponsor) => (
              <SponsorsBox {...sponsor} key={sponsor.name} />
            ))}
          </div>
        </WholePageBox>
        <WholePageBox>
          <div className={styles.container}>
            <div className={styles.title}>Partners</div>
            {parsedPartner.map((sponsor) => (
              <SponsorsBox {...sponsor} key={sponsor.name} />
            ))}
          </div>
        </WholePageBox>
      </ContainerWrap>
    </section>
  );
};

export default Sponsors;
