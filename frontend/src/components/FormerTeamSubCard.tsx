import React from "react";
import { Typography } from "@material-ui/core";

import styles from "src/styles/FormerTeamSubCard.module.scss";
import { yearTeamData } from "src/data/pastTeamMembersData";

interface FormerTeamSubCardProps {
  data: yearTeamData;
}

const FormerTeamSubCard: React.FC<FormerTeamSubCardProps> = ({ data }) => {
  const { subcommittee } = data;
  return (
    <div className={styles.mainContainer}>
      <Typography variant="h4" align="center">
        <span className={styles.title}>Subcommittee</span>
      </Typography>

      <div className={styles.flexContainer}>
        {subcommittee.map((role) => (
          <div className={styles.item} key={role.role}>
            <p className={styles.text}>
              <span className={styles.roleTitle}>{role.role}</span>
            </p>
            <div className={styles.list}>
              {role.members.map((person) => (
                <p className={styles.text} key={person}>
                  {person}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormerTeamSubCard;
