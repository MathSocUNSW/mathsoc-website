// Library imports
import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

// Components
import Hero from "components/Hero";
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";

// Styling
import styles from "src/styles/competitions.module.scss";

const Competitions: React.FC<{}> = () => {
  return (
    <div>
      <Head>
        <title>Competitions - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_events.jpg" text="Competitions" />
      <PageBody>
        <div className={styles.competitions}>
          <WholePageBox>
            <Typography variant="h2" align="center">
              Integration Bee
            </Typography>
            <Typography align="center">Coming Soon</Typography>
          </WholePageBox>
          <WholePageBox>
            <Typography variant="h2" align="center">
              Accelerate
            </Typography>
            <div className={styles.accelerate}>
              <a
                href="https://www.facebook.com/events/4438215162903353/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/events/accelerate_2021.jpg" />
              </a>
            </div>
            <Typography>
              Congratulations to Austin Zhang for being the winner to our 2021 Accelerate event! The
              problem set (with solutions) can be found{" "}
              <a
                href="files/competitions/accelerate-2021.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </Typography>
          </WholePageBox>
        </div>
      </PageBody>
    </div>
  );
};
export default Competitions;
