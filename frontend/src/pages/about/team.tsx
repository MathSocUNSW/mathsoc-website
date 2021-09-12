// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import Hero from "src/components/Hero";
import Profile from "components/Profile";
import PortfolioBox from "components/PortfolioBox";

// Styling
import styles from "src/styles/team.module.scss";

// Data
import executivesData from "src/data/executivesData";
import portfolioData from "src/data/portfolioData";

const Team: React.FC = () => {
  return (
    <section>
      <Head>
        <title>Meet the Team - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_team.jpg" text="Executives and Directors" />
      <PageBody>
        <Typography variant="h2" align="center">
          Executives
        </Typography>
        <Typography variant="h5" align="center">
          The 2021 Executive Team of the UNSW Mathematics Society
        </Typography>
        <div className={styles.cardsContainer}>
          {executivesData.map((person, index) => (
            <Profile
              name={person.name}
              role={person.role}
              description={person.description}
              imagePath={person.imagePath}
              key={person.name}
            />
          ))}
        </div>
        <Typography variant="h2" align="center">
          Directors
        </Typography>
        <Typography variant="h5" align="center">
          The 2021 Directors Team of the UNSW Mathematics Society
        </Typography>
        <section className={styles.cardsContainer}>
          {portfolioData.map((portfolio) => (
            <PortfolioBox {...portfolio} key={portfolio.role} />
          ))}
        </section>
      </PageBody>
    </section>
  );
};

export default Team;
