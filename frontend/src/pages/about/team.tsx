import React from "react";
import Head from "next/head";

import Hero from "src/components/Hero";
import styles from "src/styles/team.module.scss";

const Team: React.FC = () => {
  return (
    <section>
      <Head>
        <title>MathSoc - Meet the Team</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_team.jpg" text="Executives and Directors" />
      <section className={styles.mainContainer}></section>
    </section>
  );
};

export default Team;
