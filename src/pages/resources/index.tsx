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
import resourceInfo from "src/data/resourceData";

const Resources: React.FC = () => {
  return (
    <section>
      <Head>
        <title>Resources - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_resources.jpg" text="Resources" />
      <PageBody>
        <ul className={styles.resources}>
          {resourceInfo.map((resource, index) => (
            <li key={index}>
              <Strip {...resource} />
            </li>
          ))}
        </ul>
      </PageBody>
    </section>
  );
};

export default Resources;
