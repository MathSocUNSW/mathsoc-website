import React from "react";
import { Typography } from "@material-ui/core";
import alphabeticalSort from "src/helpers/alphabeticalSort";

import { portfolio as PortfolioProps } from "src/data/portfolioData";
import styles from "src/styles/portfolio.module.scss";
const DEFAULT_PROFILE_IMAGE = "/images/team/blank_profile.png";

const Portfolio: React.FC<PortfolioProps> = ({ role, directors, subcom }) => {
  const parsedDirectors = directors.sort(alphabeticalSort);
  const parsedSubcom = subcom.sort((a, b) => a.localeCompare(b));
  return (
    <div className={styles.portfolio}>
      <Typography variant="h4" align="center">
        {role}
      </Typography>
      <br />
      {/*directors*/}
      <div className={styles.directorsBox}>
        {parsedDirectors.map((person) => (
          <div className={styles.person} key={person.name}>
            <img
              src={person.imagePath ? person.imagePath : DEFAULT_PROFILE_IMAGE}
              alt={`${person.name} photo`}
              height={150}
              width={150}
              className={styles.personImage}
            />
            <br />
            <Typography variant="h4">{person.name}</Typography>
            <Typography variant="h6">{`${role} Director`}</Typography>
          </div>
        ))}
      </div>
      {/*subcom*/}
      {parsedSubcom.length > 0 && (
        <Typography variant="h4" align="center">
          <br />
          Subcom
          <br />
        </Typography>
      )}
      {/*NOTE: education not split into two even columns, spacing*/}
      <div className={styles.subcomBox}>
        {parsedSubcom.map((person) => (
          <Typography variant="body1" align="center" key={person}>
            {person}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
