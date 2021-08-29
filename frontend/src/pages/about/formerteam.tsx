import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

import Hero from "src/components/Hero";
import styles from "src/styles/formerteam.module.scss";
import pastTeamData from "src/data/pastTeamMembersData";
import FormerTeamMainCard from "components/FormerTeamMainCard";
import FormerTeamSubCard from "components/FormerTeamSubCard";
import ContainerWrap from "components/ContainerWrap";
import WholePageBox from "components/WholePageBox";

const FormerTeam: React.FC = () => {
  return (
    <section>
      <Head>
        <title>Former Team - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_team.jpg" text="Former Team" />
      <ContainerWrap>
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
      </ContainerWrap>
    </section>
  );
};

export default FormerTeam;
