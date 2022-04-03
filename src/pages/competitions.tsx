// Library imports
import React from "react";
import Head from "next/head";
import { Typography } from "@mui/material";

// Components
import Hero from "components/Hero";
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";

// Styling
import styles from "src/styles/competitions.module.scss";

// Data
import { Competition } from "src/data/competitionData";
import { fetchCompetitions } from "src/lib/api";

interface CompetitionsProps {
  competitions: Competition[];
}

const Competitions: React.FC<CompetitionsProps> = ({ competitions }) => {
  return (
    <div>
      <Head>
        <title>Competitions - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_comp.jpg" text="Competitions" />
      <PageBody>
        <div className={styles.competitions}>
          {competitions.map((competition, i) => (
            <WholePageBox key={i}>
              <Typography variant="h2" align="center">
                {competition.name}
              </Typography>
              <div className={styles.promotionImage}>
                <img src={`https:${competition.promotionalImage}`} />
              </div>
              <Typography>
                {competition.description} The problem set (with solutions) can be found{" "}
                <a
                  href={`https:${competition.solutionsLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </Typography>
            </WholePageBox>
          ))}
        </div>
      </PageBody>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const competitions: Competition[] = await fetchCompetitions();
  return {
    props: {
      competitions
    }
  };
};

export default Competitions;
