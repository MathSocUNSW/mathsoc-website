// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@mui/material";

// Component Imports
import PageBody from "components/PageBody";
import Hero from "src/components/Hero";
import Profile from "components/Profile";
import PortfolioBox from "components/PortfolioBox";

// Styling
import styles from "src/styles/team.module.scss";

// Library
import { fetchPortfolios, fetchExecutives } from "../../lib/api";

// Data
import { Executive, ExecutiveRole, PortfolioDetails } from "src/data/portfolioData";

const executiveRoles: ExecutiveRole[] = [
  "President",
  "Secretary & Vice President of Careers",
  "Secretary",
  "Treasurer",
  "Vice President of Education",
  "Vice President of Operations",
  "Vice President of Activities",
  "Vice President of Careers"
];

const portfolioList: string[] = [
  "Academics",
  "Maths Outreach",
  "Careers",
  "Socials",
  "Human Resources",
  "Marketing",
  "Creative",
  "IT"
];

interface TeamProps {
  executives: Executive[];
  portfolios: PortfolioDetails[];
}

const Team: React.FC<TeamProps> = ({ executives, portfolios }) => {
  executives.sort((a, b) =>
    executiveRoles.indexOf(a.role) < executiveRoles.indexOf(b.role) ? -1 : 1
  );
  portfolios.sort((a, b) =>
    portfolioList.indexOf(a.name) < portfolioList.indexOf(b.name) ? -1 : 1
  );
  return (
    <section>
      <Head>
        <title>Meet the Team - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_team_2023.jpg" text="MathSoc Team 2023" />
      <PageBody>
        <div className={styles.flex}>
          <Typography variant="h2" align="center">
            Executives
          </Typography>
          <div className={styles.roleDescription}>
            <Typography variant="body1" align="center">
              These guys/gals are in charge of the high level direction of the society, ensuring
              things are on track!
            </Typography>
          </div>
          <div className={styles.cardsContainer}>
            {executives.map((person) => (
              <Profile
                name={person.name}
                role={person.role}
                description={person.selfIntroduction}
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
              directors in either the Academic, Education, Careers, Socials, Human Resources, IT,
              Marketing or Creative portfolios in bringing fresh ideas to fruition. If you’re
              someone enthusiastic about MathSoc, consider joining our subcommittee!
            </Typography>
          </div>
          <section className={styles.cardsContainer}>
            {portfolios.map((portfolio) => (
              <PortfolioBox
                directors={portfolio.directors}
                subcommittee={portfolio.subcommittee}
                role={portfolio.name}
                key={portfolio.name}
              />
            ))}
          </section>
        </div>
      </PageBody>
    </section>
  );
};

export const getStaticProps = async (context) => {
  const portfolios = await fetchPortfolios();
  const executives = await fetchExecutives();
  return {
    props: {
      portfolios,
      executives
    }
  };
};

export default Team;
