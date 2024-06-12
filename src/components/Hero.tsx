import React from "react";
import { Container, Typography } from "@mui/material";
import styles from "src/styles/Hero.module.scss";
import Image from "next/image";
const { motion } = require("framer-motion"); //eslint-disable-line

interface HeroProps {
  url: string;
  text: string;
}

const Hero: React.FC<HeroProps> = ({ url, text }) => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        animate={{ opacity: 1 }}
      >
        <Image
          src={url}
          className={styles.image}
          alt="banner"
          layout="fill"
          priority={true}
          draggable="false"
          quality={80}
          key={text}
        />
        <Container>
          <div className={styles.text}>
            <Typography variant="h1" align="center">
              {text}
            </Typography>
          </div>
        </Container>
      </motion.div>
    </section>
  );
};

export default Hero;
