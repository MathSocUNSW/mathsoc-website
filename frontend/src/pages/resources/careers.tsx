import React from "react";
import Head from "next/head";

import ResourceHero from "src/components/ResourceHero";
import WholePageBox from "components/WholePageBox";

import resourceData from "src/data/resourceData";
import ContainerWrap from "components/ContainerWrap";

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
      <ContainerWrap>
        <WholePageBox>{"Page under construction"}</WholePageBox>
      </ContainerWrap>
    </section>
  );
};

export default Careers;
