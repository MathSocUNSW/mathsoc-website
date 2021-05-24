import React, { useState } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import styles from "src/styles/index.module.scss";
import UpcomingEvents from "components/UpcomingEvents";
import SponsorsList from "components/SponsorsList";
import { Container, Typography } from "@material-ui/core";

const Home: React.FC = () => {
  const [eventIndex, setEventIndex] = useState(0);

  return (
    <section className="home">
      <Head>
        <title>MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_skating.png" text="Welcome to UNSW Mathematics Society" />
      <section className={styles.pageContent}>
        <Container>
          <Typography variant="h5" align="center">
            UNSW Mathematics Society (MathSoc) is the constituent society of the UNSW School of
            Mathematics and Statistics, with membership open to anyone with an interest in
            mathematics. We support students by enhancing the sense of community amongst mathematics
            students, informing students of career opportunities, and providing academic forums and
            resources for students. With over 3000 members, we are one of the largest societies at
            UNSW.
          </Typography>
          <UpcomingEvents eventIndex={eventIndex} setEventIndex={setEventIndex} />
          <SponsorsList />
        </Container>
      </section>
    </section>
  );
};

export default Home;
