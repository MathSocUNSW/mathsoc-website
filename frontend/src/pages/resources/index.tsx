import React from "react";
import Head from "next/head";
import Hero from "src/components/Hero";

/*my own imports */
import Strip from "components/Strip";
import resourceData from "src/data/resourceData";
import styles from "src/styles/resources.module.scss";
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
      <Hero url="/images/hero/mathsoc_resources.png" text="Resources" />
      <Container>
        <ul className={styles.resources}>
          {resourceData.map((resource, index) => (
            <li key={index}>
              <Strip {...resource} titlePosition={index % 2 == 0 ? "left" : "right"} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Resources;
