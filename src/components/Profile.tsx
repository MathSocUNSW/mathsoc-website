// Library Imports
import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

// Styling
import styles from "src/styles/Profile.module.scss";
const { motion } = require("framer-motion"); //eslint-disable-line

export interface ProfileProps {
  name: string;
  role: string;
  description: string;
  imagePath: string;
}

const DEFAULT_PROFILE_IMAGE = "/images/team/blank_profile.png";

const Profile: React.FC<ProfileProps> = ({ name, role, description, imagePath }) => {
  return (
    <motion.div
      className={styles.profile}
      data-testid="tile"
      transition={{
        duration: 1,
        type: "easeOut"
      }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="profileContent">
        <Typography variant="h4">{name}</Typography>
        <Typography variant="h6">{role}</Typography>
        <div className={styles.textBox}>
          <Typography variant="subtitle1">{description}</Typography>
        </div>
      </div>
      <div className="profileImage">
        <Image
          src={imagePath ? `https:${imagePath}` : DEFAULT_PROFILE_IMAGE}
          alt={`${name} photo`}
          height={150}
          width={150}
          quality={50}
          className={styles.personImage}
          priority={true}
        />
        {/* <img
          src={imagePath ? imagePath : DEFAULT_PROFILE_IMAGE}
          alt={`${name} photo`}
          className={styles.personImage}
        ></img> */}
      </div>
    </motion.div>
  );
};

export default Profile;
