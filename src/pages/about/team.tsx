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

// Library
import { fetchTeam } from "../../lib/api";

// Data
import { MemberDetails } from "src/data/portfolioData";

const executiveRoles = ["President", "Vice President", "Secretary", "Treasurer", "Arc Delegate"];

const portfolioRoles = [
  "Education",
  "Events (Corporate)",
  "Events (Social)",
  "HR",
  "IT",
  "Marketing",
  "Sponsorships"
];
interface Portfolios {
  [key: string]: MemberDetails[];
}

const partition = (members: MemberDetails[]): Portfolios => {
  const portfolios: Portfolios = {};
  for (const portfolioRole of portfolioRoles) {
    portfolios[portfolioRole] = members.filter((member) => member.role.includes(portfolioRole));
  }
  return portfolios;
};

interface TeamProps {
  members: MemberDetails[];
}

const Team: React.FC<TeamProps> = ({ members }) => {
  const executives = members.filter((member) => {
    return executiveRoles.includes(member.role);
  });
  executives.sort((a, b) =>
    executiveRoles.indexOf(a.role) < executiveRoles.indexOf(b.role) ? -1 : 1
  );
  const portfolios = partition(members);
  console.log(portfolios);
  return (
    <section>
      <Head>
        <title>Meet the Team - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_team_2021.jpg" text="MathSoc Team 2021" />
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
                description={person.description as string}
                imagePath={person.imagePath as string}
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
            {portfolioRoles.map((portfolioRole) => (
              <PortfolioBox
                members={portfolios[portfolioRole]}
                role={portfolioRole}
                key={portfolioRole}
              />
            ))}
          </section>
        </div>
      </PageBody>
    </section>
  );
};

export const getStaticProps = async (context) => {
  const members = await fetchTeam();
  return {
    props: {
      members
    }
  };
};

export default Team;
