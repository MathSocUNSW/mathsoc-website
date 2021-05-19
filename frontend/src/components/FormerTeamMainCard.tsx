import React from "react";
import { Typography } from "@material-ui/core";

import styles from "src/styles/FormerTeamMainCard.module.scss";
import { yearTeamData } from "src/data/pastTeamMembersData";

interface formerTeamMainCardProps {
  data: yearTeamData;
}

interface data {
  role: string;
  name: string;
}

const FormerTeamMainCard: React.FC<formerTeamMainCardProps> = ({ data }) => {
  console.log(data);
  const { year, execList, directorList } = data;

  // Assumption there will always be a president
  const president = execList.find((person) => person.role === "President");
  const dataList: Array<data> = [...execList.filter((person) => person.role !== "President")];
  directorList.forEach((directorRole) => {
    const { role, directors } = directorRole;
    directors.forEach((person) => {
      dataList.push({ role: `${role} Director`, name: person.name });
    });
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.year}>
        <Typography variant="h3" align="left">
          <span style={{ fontWeight: 600 }}>{year}:</span>
        </Typography>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.president}>
          <p className={styles.text}>
            <span className={styles.bold}>President</span> {president.name}
          </p>
        </div>
        <div className={styles.other}>
          {dataList.map((person) => (
            <div key={person.name} className={styles.nameContainer}>
              <p className={styles.text}>
                <span className={styles.bold}>{person.role}</span> {person.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormerTeamMainCard;
