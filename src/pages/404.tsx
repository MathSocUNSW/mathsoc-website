// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import Hero from "components/Hero";
import WholePageBox from "components/WholePageBox";

// Generated with https://github.com/axieax/make404
const ARRANGEMENTS = [
  "3 ^ 4 * 5 - 1",
  "5 * 3 ^ 4 - 1",
  "5 * 9 ^ 2 - 1",
  "5 * 9 * 9 - 1",
  "9 ^ 2 * 5 - 1",
  "9 * 5 * 9 - 1",
  "9 * 9 * 5 - 1"
];

const Unknown: React.FC = () => {
  // Choose random arrangement
  const index = Math.floor(Math.random() * ARRANGEMENTS.length);

  return (
    <section>
      <Head>
        <title>404 - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_skating.png" text={ARRANGEMENTS[index]} />
      <PageBody>
        <WholePageBox>
          <a href="https://github.com/axieax/make404" style={{ display: "none" }}>
            {"M4THS0C{404_Generator}"}
          </a>
          <Typography variant="body1" align="center">
            Page Not Found 😢
          </Typography>
        </WholePageBox>
      </PageBody>
    </section>
  );
};

export default Unknown;
