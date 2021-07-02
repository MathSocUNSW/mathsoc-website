import React from "react";
import Head from "next/head";
import Hero from "src/components/Hero";

import Strip from "components/Strip";
import resourceData from "src/data/resourceData";
import styles from "src/styles/resources.module.scss";
import ContainerWrap from "components/ContainerWrap";

const Resources: React.FC = () => {
  return (
    <section>
      <Head>
        <title>Resources - Mathsoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_resources.png" text="Resources" />
      <ContainerWrap>
        <ul className={styles.resources}>
          {resourceData.map((resource, index) => (
            <li key={index}>
              <Strip {...resource} titlePosition={index % 2 == 0 ? "left" : "right"} />
            </li>
          ))}
        </ul>
      </ContainerWrap>
    </section>
  );
};

export default Resources;
