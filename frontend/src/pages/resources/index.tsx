import React from "react";
import Head from "next/head";
import Hero from "components/Hero";

/*my own imports */
import Button from "src/components/Button";
import resourceData from "src/data/resourceData";
import styles from "src/styles/resourceIndex.module.scss";
import { Container } from "@material-ui/core";

/*
- URL FOR HERO DOESN'T EXIST YET
*/
const Resources: React.FC = () => {
  return (    
    <section>
      <Head>
        <title>MathSoc - Resources</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_resources.jpg" text="Resources" />
      <Container>
        <ul className={styles.buttonSection}>
          {resourceData.map((x, index) => (
            <li key={index} className={styles.resourceBoxContainer}>
              <Button {...x} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Resources;
