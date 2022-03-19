// Library Imports
import React from "react";
import Head from "next/head";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";
import ResourceHero from "src/components/ResourceHero";

// Data
import { careersInfo } from "src/data/resourceData";

const Careers: React.FC = () => {
  return (
    <section>
      <Head>
        <title>{careersInfo.title} - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <ResourceHero
        url={careersInfo.backgroundImage}
        text={careersInfo.title}
        icon={careersInfo.iconPath}
        titlePosition={careersInfo.titlePosition}
      />
      <PageBody>
        <WholePageBox>Page under construction</WholePageBox>
      </PageBody>
    </section>
  );
};

export default Careers;
