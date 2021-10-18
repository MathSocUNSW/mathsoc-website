// Library Imports
import React, { useState } from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";
import Hero from "components/Hero";
import UpcomingEvents from "components/UpcomingEvents";
import SponsorsList from "components/SponsorsList";
import RecentEvents from "components/RecentEvents";

// Styling
import styles from "src/styles/home.module.scss";

// TODO: add loading animation, eager load sponsor images

const Home: React.FC = () => {
  return (
    <section>
      <Head>
        <title>MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_skating.png" text="Welcome to UNSW Mathematics Society" />
      <PageBody>
        <div className={styles.intro}>
          <WholePageBox>
            <Typography variant="body1" align="center">
              UNSW Mathematics Society (MathSoc) is the constituent society of the UNSW School of
              Mathematics and Statistics, with membership open to anyone with an interest in
              mathematics. We support students by enhancing the sense of community amongst
              mathematics students, informing students of career opportunities, and providing
              academic forums and resources for students. With over 3000 members, we are one of the
              largest societies at UNSW.
            </Typography>
          </WholePageBox>
        </div>
        <UpcomingEvents />
        <RecentEvents />
        <SponsorsList />
      </PageBody>
    </section>
  );
};

export default Home;
