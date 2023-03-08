// Library Imports
import React from "react";
import { Typography } from "@mui/material";

// Styling
import styles from "src/styles/ResourceHero.module.scss";
import { Opacity } from "@mui/icons-material";
const { motion } = require("framer-motion"); //eslint-disable-line

interface ResourceHeroProps {
  url: string;
  text: string;
  icon: string;
  titlePosition: string;
}

const ResourceHero: React.FC<ResourceHeroProps> = ({ url, text, icon, titlePosition }) => {
  const titleFlip = titlePosition === "right";

  const bgImage = {
    backgroundImage: `url(${url})`
  };

  return (
    <motion.div
      transition={{
        delay: 0.5,
        x: { duration: 1 },
        default: { ease: "linear" }
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <section className={styles.hero} style={bgImage}>
        <div className={`${styles.title} ${titleFlip ? styles.flip : ""}`}>
          <Typography variant="h1" align="center">
            {text}
          </Typography>
        </div>
        <img src={icon} className={styles.icon} alt="icon" draggable="false" />
      </section>
    </motion.div>
  );
};

export default ResourceHero;
