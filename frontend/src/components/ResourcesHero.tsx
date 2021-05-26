import React from "react";
import { Typography } from "@material-ui/core";
import styles from "src/styles/ResourceHero.module.scss";

interface ResourceHeroProps {
  url: string;
  text: string;
  icon: string;
  titlePosition: string;
}

const ResourceHero: React.FC<ResourceHeroProps> = ({ url, text, icon, titlePosition }) => {
  const titleFlip = titlePosition === "right";

  const image = {
    backgroundImage: "url(" + url + ")"
  };

  return (
    <section>
      <Typography style={image} className={styles.hero} variant="h1" align="center">
        <div className={titleFlip && styles.flip}>{text}</div>
        <img src={icon} className={styles.icon} alt="icon" draggable="false" />
      </Typography>
    </section>
  );
};

export default ResourceHero;
