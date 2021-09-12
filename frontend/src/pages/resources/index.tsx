// Library Imports
import React from "react";
import Head from "next/head";

// Component Imports
import PageBody from "components/PageBody";
import Hero from "src/components/Hero";
import Strip from "components/Strip";

// Styling
import styles from "src/styles/resources.module.scss";

// Data
import resourceData from "src/data/resourceData";

const Resources: React.FC = () => {
  return (
    <section>
      <Head>
        <title>Resources - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_resources.png" text="Resources" />
      <PageBody>
        <ul className={styles.resources}>
          {resourceData.map((resource, index) => (
            <li key={index}>
              <Strip {...resource} titlePosition={index % 2 == 0 ? "left" : "right"} />
            </li>
          ))}
        </ul>
      </PageBody>
    </section>
  );
};

export default Resources;
