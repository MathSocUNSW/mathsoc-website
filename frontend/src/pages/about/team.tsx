import React from "react";
import Head from "next/head";

import alphabeticalSort from "src/helpers/alphabeticalSort";

import Hero from "src/components/Hero";
import styles from "src/styles/team.module.scss";
import Profile, { profileData } from "components/Profile";
import executivesData from "src/data/executivesData";
import directorsData from "src/data/directorsData";
import { Container, Typography } from "@material-ui/core";

const Team: React.FC = () => {
  // unifies the format of executive and director data
  const teamData: profileData[] = [...executivesData];
  directorsData.forEach((role) => {
    // sort directors alphabetically
    const sortedDirectors = role.directors.slice().sort(alphabeticalSort);
    sortedDirectors.forEach((director) => {
      teamData.push({ name: director.name, role: `${role.role} Director` });
    });
  });

  return (
    <section>
      <Head>
        <title>MathSoc - Meet the Team</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_team.jpg" text="Executives and Directors" />
      <Container>
        <Typography variant="h2" align="center">
          Executives and Directors
        </Typography>
        <Typography variant="h5" align="center">
          The 2021 Executive and Director Team of the UNSW Mathematics Society
        </Typography>
        <section className={styles.cardsContainer}>
          {teamData.map((person, index) => (
            <Profile {...person} key={person.name} />
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Team;
