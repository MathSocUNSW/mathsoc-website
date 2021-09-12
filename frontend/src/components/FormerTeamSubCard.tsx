// Library Imports
import React from "react";
import { Typography } from "@material-ui/core";

// Styling
import styles from "src/styles/FormerTeamSubCard.module.scss";

// Data
import { subcommitteeData } from "src/data/pastTeamMembersData";

interface FormerTeamSubCardProps {
  subcommittee: subcommitteeData[];
}

const FormerTeamSubCard: React.FC<FormerTeamSubCardProps> = ({ subcommittee }) => {
  return (
    <div className={styles.mainContainer}>
      <Typography variant="h4" align="center">
        Subcommittee
      </Typography>

      <div className={styles.flexContainer}>
        {subcommittee.map(({ role, members }) => (
          <div className={styles.item} key={role}>
            <Typography variant="h5" align="center">
              {role}
            </Typography>
            <ul className={styles.list}>
              {members.map((person) => (
                <li className={styles.text} key={person}>
                  <Typography variant="body1" align="center">
                    {person}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormerTeamSubCard;
