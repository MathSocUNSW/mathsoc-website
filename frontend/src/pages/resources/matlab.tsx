import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

import ResourceHero from "src/components/ResourceHero";
import WholePageBox from "src/components/WholePageBox";

import resourceData from "src/data/resourceData";
import ContainerWrap from "components/ContainerWrap";

const Revision: React.FC = () => {
  const PAGE_PATH = "/resources/matlab";
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
        titlePosition="left"
      />
      <ContainerWrap>
        <WholePageBox>
          <Typography variant="body1">
            You: I want to learn a programming language.
            <br />
            <br />
            Me, an intellectual: MATLAB.
            <br />
            <br />
            Hey friends, the slaves at MathSoc have created an Interactive MATLAB guide, which can
            be accessed here. It is meant to supplement the MATH1151/MATH1251 online modules, and
            contains 4 fun little projects to sink your teeth into. Note that it builds on, and does
            not replace, those modules which are excellent and comprehensive resources in itself.
            <br />
            <br />
            To access it, please export all given files into the same folder and double click on the
            one that says ‘open this’. You: I want to learn a programming language.
            <br />
            <br />
            Please do not hesitate to contact us if you have any questions, suggestions or spot any
            mistakes! 🙂
          </Typography>
        </WholePageBox>
      </ContainerWrap>
    </section>
  );
};

export default Revision;
