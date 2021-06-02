import React from "react";
import Head from "next/head";

import alphabeticalSort from "src/helpers/alphabeticalSort";

import Hero from "src/components/Hero";
import styles from "src/styles/team.module.scss";
import Profile, { ProfileProps } from "components/Profile";
import executivesData from "src/data/executivesData";
import directorsData from "src/data/directorsData";
import { Container, Typography } from "@material-ui/core";

const Team: React.FC = () => {
  const [tempText, setTempText] = React.useState("Write ur stuff in here");

  // // unifies the format of executive and director data
  // const teamData: profileData[] = [...executivesData];
  // directorsData.forEach((role) => {
  //   // sort directors alphabetically
  //   const sortedDirectors = role.directors.slice().sort(alphabeticalSort);
  //   sortedDirectors.forEach((director) => {
  //     teamData.push({ name: director.name, role: `${role.role} Director` });
  //   });
  // });

  const parsedDirectorsData: Array<ProfileProps> = [];
  directorsData.forEach((role) => {
    // sort directors alphabetically
    const sortedDirectors = role.directors.slice().sort(alphabeticalSort);
    sortedDirectors.forEach((director) => {
      parsedDirectorsData.push({
        name: director.name,
        role: `${role.role} Director`,
        description: director.description,
        imagePath: director.imagePath
      });
    });
  });

  return (
    <section>
      <Head>
        <title>Meet the Team - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_team.jpg" text="Executives and Directors" />
      <Container>
        <Typography variant="h2" align="center">
          Executives
        </Typography>
        <Typography variant="h5" align="center">
          The 2021 Executive Team of the UNSW Mathematics Society
        </Typography>
        <section className={styles.cardsContainer}>
          {/* TODO Remove */}
          <textarea
            style={{ width: "300px", height: "200px" }}
            onChange={(event) => setTempText(event.target.value)}
            value={tempText}
          ></textarea>
          <Profile name="testing" role="123" description={tempText} imagePath={null}></Profile>
          {executivesData.map((person, index) => (
            <Profile
              name={person.name}
              role={person.role}
              description={person.description}
              imagePath={person.imagePath}
              key={person.name}
            />
          ))}
        </section>
        <Typography variant="h2" align="center">
          Directors
        </Typography>
        <Typography variant="h5" align="center">
          The 2021 Directors Team of the UNSW Mathematics Society
        </Typography>
        <section className={styles.cardsContainer}>
          {parsedDirectorsData.map((person, index) => (
            <Profile
              name={person.name}
              role={person.role}
              description={person.description}
              imagePath={person.imagePath}
              key={person.name}
            />
          ))}
        </section>
      </Container>
    </section>
  );
};

export default Team;
