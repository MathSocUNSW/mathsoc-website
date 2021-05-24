import React from "react";
import { Container, Typography } from "@material-ui/core";
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
        <Image
          src={url}
          className={styles.image}
          alt="banner"
          layout="fill"
          priority={true}
          draggable="false"
          quality={80}
        />
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
