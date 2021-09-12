// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";
import Hero from "src/components/Hero";
import FormerTeamMainCard from "components/FormerTeamMainCard";
import FormerTeamSubCard from "components/FormerTeamSubCard";

// Styling
import styles from "src/styles/formerteam.module.scss";

// Data
import pastTeamData from "src/data/pastTeamMembersData";

const FormerTeam: React.FC = () => {
  return (
    <section>
      <Head>
        <title>Former Team - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_team.jpg" text="Former Team" />
      <PageBody>
        {pastTeamData.map((yearData) => (
          <WholePageBox key={yearData.year}>
            <div className={styles.year}>
              <Typography variant="h2" align="center">
                <span>{yearData.year}</span>
              </Typography>
            </div>
            <div className={yearData.subcommittee ? styles.execTeam : null}>
              <FormerTeamMainCard data={yearData} />
            </div>
            {yearData.subcommittee && <FormerTeamSubCard data={yearData} />}
          </WholePageBox>
        ))}
      </PageBody>
    </section>
  );
};

export default FormerTeam;
