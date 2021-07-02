import React from "react";
import Head from "next/head";
import { Container, Typography } from "@material-ui/core";

import ResourceHero from "src/components/ResourceHero";
import WholePageBox from "src/components/WholePageBox";

import resourceData from "src/data/resourceData";

const Latex: React.FC = () => {
  const PAGE_PATH = "/resources/latex";
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
      <Container>
        <WholePageBox>
          <Typography variant="body1">
            LaTeX is essentially treated as an efficient, neat and effective means of typesetting,
            where mathematics tends to play a large role in. It is one of the most commonly used
            typesetting tools in existence, and arguably superior to Word in certain circumstances.
          </Typography>
        </WholePageBox>
        <WholePageBox>
          <Typography variant="body1">
            In 2020, MathSoc teamed up with CSESoc to present a LaTeX seminar online. Thanks to
            Nicholas Berridge-Argent for presenting, and providing the resources here! A recording
            of the seminar can be found on YouTube here.
          </Typography>
        </WholePageBox>
        <WholePageBox>
          <Typography variant="body1">
            Our Education Director in 2019, Rui Tong, compiled an Introduction to LaTeX guide to
            help many users start off with the software and commands. Although it is intended for
            introductory means, it was designed to provide as much of the basics as required for
            generic use as well. The guide can be found here.
          </Typography>
        </WholePageBox>
        <WholePageBox>
          <Typography variant="body1">
            Back in 2015, our then-Education director Brenden Trinh presented the first Introductory
            LaTeX seminar. This seminar covers most of the foundations with LaTeX, demonstrating how
            to get started and providing a basic view of a typical LaTeX document structure. The
            files used in the presentation can be found here
          </Typography>
        </WholePageBox>
      </Container>
    </section>
  );
};

export default Latex;
