import React from "react";
import { Container, Typography } from "@mui/material";
import styles from "src/styles/Hero.module.scss";
import Image from "next/image";

interface HeroProps {
  url: string;
  text: string;
}

const Hero: React.FC<HeroProps> = ({ url, text }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <img src={url} className={styles.image} alt="banner" draggable="false" key={text} />
      </div>
      <Container>
        <div className={styles.text}>
          <Typography variant="h1" align="center">
            {text}
          </Typography>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
