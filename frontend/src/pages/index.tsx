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

// TODO: add loading animation, eager load sponsor images

const Home: React.FC = () => {
  // React state for upcoming events section
  const [eventIndex, setEventIndex] = useState(0);

  return (
    <section>
      <Head>
        <title>MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_skating.png" text="Welcome to UNSW Mathematics Society" />
      <PageBody>
        <section className="introduction">
          <WholePageBox>
            <Typography variant="h6" align="center">
              UNSW Mathematics Society (MathSoc) is the constituent society of the UNSW School of
              Mathematics and Statistics, with membership open to anyone with an interest in
              mathematics. We support students by enhancing the sense of community amongst
              mathematics students, informing students of career opportunities, and providing
              academic forums and resources for students. With over 3000 members, we are one of the
              largest societies at UNSW.
            </Typography>
          </WholePageBox>
        </section>
        <UpcomingEvents eventIndex={eventIndex} setEventIndex={setEventIndex} />
        <SponsorsList />
      </PageBody>
    </section>
  );
};

export default Home;
