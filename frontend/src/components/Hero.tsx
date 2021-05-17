import React from "react";
import { Container, Typography } from "@material-ui/core";
import styles from "src/styles/Hero.module.scss";

interface HeroProps {
  url: string;
  text: string;
}

const Hero: React.FC<HeroProps> = ({ url, text }) => {
  return (
    <section className={styles.hero}>
      <img src={url} className={styles.image} alt="banner" />
      <Container>
        <div className={styles.text}>
          <Typography variant="h2" component="h1" align="center">
            {text}
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
