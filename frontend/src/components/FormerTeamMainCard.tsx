// Library Imports
import React from "react";
import { Typography } from "@material-ui/core";

// Styling
import styles from "src/styles/FormerTeamMainCard.module.scss";

// Data
import { execPerson, directorRole } from "src/data/pastTeamMembersData";

interface FormerTeamMainCardProps {
  execList: execPerson[];
  directorList: directorRole[];
}

interface data {
  role: string;
  name: string;
}

const FormerTeamMainCard: React.FC<FormerTeamMainCardProps> = ({ execList, directorList }) => {
  const dataList: data[] = [...execList];
  // Add directors to dataList
  directorList.forEach(({ role, directors }) => {
    if (directors.length >= 2) {
      const lastDirector = directors.pop();
      const concatString = `${directors.join(", ")} & ${lastDirector}`;
      dataList.push({ role: `${role} Director`, name: concatString });
    } else {
      // Only 1 director exists
      dataList.push({ role: `${role} Director`, name: directors[0] });
    }
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.category}>
        <Typography variant="h4" align="center">
          Executive Team
        </Typography>
      </div>
      <ul>
        {dataList.map((person) => (
          <li key={person.name} className={styles.nameContainer}>
            <Typography variant="body1" align="center">
              <b>{person.role}</b> - {person.name}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormerTeamMainCard;
