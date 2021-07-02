import React from "react";
import Head from "next/head";
import { Container } from "@material-ui/core";

import ResourceHero from "src/components/ResourceHero";
import WholePageBox from "components/WholePageBox";

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
      <Container>
        <WholePageBox>{"Page under construction"}</WholePageBox>
      </Container>
    </section>
  );
};

export default Careers;
