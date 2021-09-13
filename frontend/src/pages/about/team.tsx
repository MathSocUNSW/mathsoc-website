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
      <Hero url="/images/hero/mathsoc_team.jpg" text="MathSoc Team 2021" />
      <PageBody>
        <div className={styles.flex}>
          <Typography variant="h2" align="center">
            Executives
          </Typography>
          <div className={styles.roleDescription}>
            <Typography variant="body1" align="center">
              These guys/gals are in charge of the high level direction of the society, and in
              ensuring things are on track! Positions include President, Vice President, Secretary,
              Treasurer and Arc Delegate.
            </Typography>
          </div>
          <div className={styles.cardsContainer}>
            {executivesData.map((person) => (
              <Profile
                name={person.name}
                role={person.role}
                description={person.description}
                imagePath={person.imagePath}
                key={person.name}
              />
            ))}
          </div>
          <br />
          <Typography variant="h2" align="center">
            Directors and Subcommittee
          </Typography>
          <div className={styles.roleDescription}>
            <Typography variant="body1" align="center">
              Directors contribute greatly to the innovation of MathSoc, developing fresh ideas that
              directly impact on the growth of MathSoc.
            </Typography>
            <Typography variant="body1" align="center">
              If you’re looking to casually contribute to MathSoc, being a subcommittee member is
              probably right for you. Subcommittee members volunteer their time to work with our
              directors in either the Education, Events, IT, Marketing or Sponsorship portfolios in
              bringing fresh ideas to fruition. If you’re someone enthusiastic about MathSoc,
              consider joining our subcommittee!
            </Typography>
          </div>

          <section className={styles.cardsContainer}>
            {portfolioData.map((portfolio) => (
              <PortfolioBox {...portfolio} key={portfolio.role} />
            ))}
          </section>
        </div>
      </PageBody>
    </section>
  );
};

export default Team;
