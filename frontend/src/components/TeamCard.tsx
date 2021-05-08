import React from "react";

import styles from "src/styles/TeamCard.module.scss";

interface TeamCardProps {
  name: string;
  role: string;
}

// REVIEW mobile

const TeamCard: React.FC<TeamCardProps> = ({ name, role }) => {
  const formattedRole = role
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  console.log(formattedRole);

  return (
    <section className={styles.mainContainer}>
      <section className={styles.leftContainer}>
        <h1>{name}</h1>
        <h3>{formattedRole}</h3>
        <p>
          4th Year Science and Business student. Part-time pyromaniac but only as a hobby. PM me for
          details on joining my pyramid scheme personal business venture.
        </p>
      </section>
      <section className={styles.rightContainer}>
        <div className={styles.tempPlaceHolder}></div>
      </section>
    </section>
  );
};

export default TeamCard;
