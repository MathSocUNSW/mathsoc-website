import React from "react";
import { Typography } from "@material-ui/core";

import styles from "src/styles/FormerTeamMainCard.module.scss";
import { yearTeamData } from "src/data/pastTeamMembersData";

interface FormerTeamMainCardProps {
  data: yearTeamData;
}

interface data {
  role: string;
  name: string;
}

const FormerTeamMainCard: React.FC<FormerTeamMainCardProps> = ({ data }) => {
  const { execList, directorList } = data;

  const dataList: Array<data> = [...execList];
  directorList.forEach((directorRole) => {
    const { role, directors } = directorRole;
    if (directors.length >= 2) {
      const lastDirector = directors.pop();
      const concatString = `${directors.map((x) => x.name).join(", ")} & ${lastDirector.name}`;
      dataList.push({ role: `${role} Director`, name: concatString });
    } else {
      // Only 1 director exists
      dataList.push({ role: `${role} Director`, name: directors[0].name });
    }
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.execTitle}>
        <Typography variant="h4" align="center">
          <span>Executive Team</span>
        </Typography>
      </div>
      <div className={styles.flexContainer}>
        {dataList.map((person) => (
          <div key={person.name} className={styles.nameContainer}>
            <p className={styles.text}>
              <span className={styles.bold}>{person.role}</span> - {person.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormerTeamMainCard;
