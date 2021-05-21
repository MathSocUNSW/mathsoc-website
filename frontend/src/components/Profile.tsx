import React from "react";
import { Typography } from "@material-ui/core";

import styles from "src/styles/Profile.module.scss";

export interface profileData {
  name: string;
  role: string;
  description?: string;
  imageURL?: string;
}

const Profile: React.FC<profileData> = ({ name, role, description }) => {
  return (
    <div className={styles.profile}>
      <div className="profileContent">
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">{role}</Typography>
        <div className={styles.textBox}>
          <Typography variant="subtitle1">
            {!description
              ? `4th Year Science and Business student. Part-time pyromaniac but only as a hobby. PM me for
          details on joining my pyramid scheme personal business venture.`
              : description}
          </Typography>
        </div>
      </div>
      <div className="profileImage">
        <div className={styles.tempPlaceHolder}></div>
      </div>
    </div>
  );
};

export default Profile;
