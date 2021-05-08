import React from "react";
import Head from "next/head";

import Hero from "src/components/Hero";
import styles from "src/styles/team.module.scss";
import TeamCard from "src/components/TeamCard";
import executivesData from "src/data/executivesData";
import directorsData from "src/data/directorsData";

interface personData {
  name: string;
  role: string;
}

const Team: React.FC = () => {
  const teamData: Array<personData> = [...executivesData];
  directorsData.forEach((role) => {
    role.directors.forEach((person) => {
      teamData.push({ name: person.name, role: `${role.role} Director` });
    });
  });

  return (
    <section>
      <Head>
        <title>MathSoc - Meet the Team</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_team.jpg" text="Executives and Directors" />
      <section className={styles.mainContainer}>
        <h1>Executives and Directors</h1>
        <h3>The 2021 Executive and Director Team of the UNSW Mathematics Society</h3>
        <section className={styles.cardsContainer}>
          <div className={styles.cardsRow}>
            {teamData.map((person, index) => (
              <div className={styles.card} key={index}>
                <TeamCard {...person} />
              </div>
            ))}
            {/* <div className={styles.card}>
              <TeamCard />
            </div> */}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Team;
