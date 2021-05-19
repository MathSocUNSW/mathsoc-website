import React from "react";
import { Typography } from "@material-ui/core";

import styles from "src/styles/FormerTeamSubCard.module.scss";
import { yearTeamData } from "src/data/pastTeamMembersData";

interface FormerTeamSubCardProps {
  data: yearTeamData;
}

const FormerTeamSubCard: React.FC<FormerTeamSubCardProps> = ({ data }) => {
  const { year, subcommittee } = data;
  console.log(subcommittee);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.year}>
        <Typography variant="h3" align="left">
          <span style={{ fontWeight: 600 }}>
            {year}:<br /> Subcommittee
          </span>
          <span style={{ fontWeight: 600 }}></span>
        </Typography>
      </div>
      <div className={styles.flexContainer}>
        {subcommittee.map((role) => (
          <div className={styles.list} key={role.role}>
            <div className={styles.role}>
              <p className={styles.text}>
                <span className={styles.bold}>{role.role}</span>
              </p>
            </div>
            {role.members.map((person) => (
              <div className={styles.personContainer} key={person}>
                <p className={styles.text}>{person}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormerTeamSubCard;
