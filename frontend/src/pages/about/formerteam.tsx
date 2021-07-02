import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

import Hero from "src/components/Hero";
import styles from "src/styles/formerteam.module.scss";
import pastTeamData from "src/data/pastTeamMembersData";
import FormerTeamMainCard from "components/FormerTeamMainCard";
import FormerTeamSubCard from "components/FormerTeamSubCard";
import ContainerWrap from "components/ContainerWrap";

const FormerTeam: React.FC = () => {
  return (
    <section>
      <Head>
        <title>Former Team - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_team.jpg" text="Former Team" />
      <ContainerWrap>
        <Typography variant="h2" align="left">
          Past Teams
        </Typography>
        {pastTeamData.map((yearData) => (
          <section key={yearData.year} className={styles.yearContainer}>
            {/* Exec and Directors */}
            <div className={styles.boxContainer}>
              <FormerTeamMainCard data={yearData} />
            </div>
            {/* Subcommittee if exists*/}
            {yearData.subcommittee && (
              <div className={styles.boxContainer}>
                <FormerTeamSubCard data={yearData} />
              </div>
            )}
          </section>
        ))}
      </ContainerWrap>
    </section>
  );
};

export default FormerTeam;
