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
        <title>Former Teams - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_team.jpg" text="Former Teams" />
      <PageBody>
        <div className={styles.boxes}>
          {pastTeamData.map(({ year, execList, directorList, subcommittee }) => (
            <WholePageBox key={year}>
              <Typography variant="h2" align="center">
                {year}
              </Typography>
              <FormerTeamMainCard execList={execList} directorList={directorList} />
              {subcommittee.length > 0 && <FormerTeamSubCard subcommittee={subcommittee} />}
            </WholePageBox>
          ))}
        </div>
      </PageBody>
    </section>
  );
};

export default FormerTeam;
