// Library Imports
import React from "react";
import Head from "next/head";
import Script from "next/script";
import { Typography } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "src/components/WholePageBox";
import ResourceHero from "src/components/ResourceHero";

// Data
import { latexInfo } from "src/data/resourceData";
import { YTEmbed } from "components/YTEmbed";

const Latex: React.FC = () => {
  return (
    <section>
      <Head>
        <title>{latexInfo.title} - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
        {/* TODO: CodeCogs API https://editor.codecogs.com/docs/4-API.php */}
      </Head>
      <ResourceHero
        url={latexInfo.backgroundImage}
        text={latexInfo.title}
        icon={latexInfo.iconPath}
        titlePosition={latexInfo.titlePosition}
      />
      <PageBody>
        <WholePageBox>
          <Typography variant="body1">
            LaTeX is essentially treated as an efficient, neat and effective means of typesetting,
            where mathematics tends to play a large role in. It is one of the most commonly used
            typesetting tools in existence, and arguably superior to Word in certain circumstances.
          </Typography>
          <Typography variant="body1">
            In 2020, MathSoc teamed up with CSESoc to present a LaTeX seminar online. Thanks to
            Nicholas Berridge-Argent for presenting, and providing the resources{" "}
            <a
              href="/files/resources/misc/LaTeX_Seminar_2020.zip"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            ! A recording of the seminar can be found on YouTube{" "}
            <a
              href="https://www.youtube.com/watch?v=YHbjvbkAVf8"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            , and below.
          </Typography>
          <YTEmbed embedURL="https://www.youtube.com/embed/VxbnjOuGLFo" />
          <Typography variant="body1">
            Our Education Director in 2019, Rui Tong, compiled an Introduction to LaTeX guide to
            help many users start off with the software and commands. Although it is intended for
            introductory means, it was designed to provide as much of the basics as required for
            generic use as well. The guide can be found{" "}
            <a
              href="/files/resources/misc/LaTeX_Guide_2019.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </Typography>
          <Typography variant="body1">
            Back in 2015, our then-Education director Brenden Trinh presented the first Introductory
            LaTeX seminar. This seminar covers most of the foundations with LaTeX, demonstrating how
            to get started and providing a basic view of a typical LaTeX document structure. The
            files used in the presentation can be found{" "}
            <a
              href="/files/resources/misc/LaTeX_Seminar_2015.zip"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </Typography>
          <Typography variant="body1">
            For those looking to get started with LaTeX, check out the{" "}
            <a href="https://latex.codecogs.com/" target="_blank" rel="noopener noreferrer">
              CodeCogs Equation Editor
            </a>
            , an interactive tool for writing LaTeX from an equation editor.
          </Typography>
        </WholePageBox>
      </PageBody>
    </section>
  );
};

export default Latex;
