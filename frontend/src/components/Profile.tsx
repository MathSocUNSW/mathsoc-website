import { Typography } from "@material-ui/core";
import React from "react";

import styles from "src/styles/Profile.module.scss";

export interface profileData {
  name: string;
  role: string;
  description?: string;
  imageURL?: string;
}

const Profile: React.FC<profileData> = ({ name, role }) => {
  return (
    <div className={styles.profile}>
      <div className="profileContent">
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">{role}</Typography>
        <Typography variant="subtitle1">
          4th Year Science and Business student. Part-time pyromaniac but only as a hobby. PM me for
          details on joining my pyramid scheme personal business venture.
        </Typography>
      </div>
      <div className="profileImage">
        <div className={styles.tempPlaceHolder}></div>
      </div>
    </div>
  );
};

export default Profile;
