import React from "react";
import { Typography } from "@material-ui/core";
import styles from "src/styles/Hero.module.scss";

interface HeroProps {
  url: string;
  text: string;
}

const Hero: React.FC<HeroProps> = ({ url, text }) => {
  const image = {
    backgroundImage: "url(" + url + ")"
  };

  return (
    <section>
      <Typography style={image} className={styles.hero} variant="h1" align="center">
        {text}
      </Typography>
    </section>
  );
};

export default Hero;
