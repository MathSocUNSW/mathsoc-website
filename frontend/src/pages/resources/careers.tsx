// Library Imports
import React from "react";
import Head from "next/head";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";
import ResourceHero from "src/components/ResourceHero";

// Data
import resourceData from "src/data/resourceData";

const Careers: React.FC = () => {
  const PAGE_PATH = "/resources/careers";
  const pageData = resourceData.find((x) => x.resourceLink === PAGE_PATH);

  return (
    <section>
      <Head>
        <title>{pageData.title} - Mathsoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <ResourceHero
        url={pageData.backgroundImage}
        text={pageData.title}
        icon={pageData.iconPath}
        titlePosition="right"
      />
      <PageBody>
        <WholePageBox>Page under construction</WholePageBox>
      </PageBody>
    </section>
  );
};

export default Careers;
