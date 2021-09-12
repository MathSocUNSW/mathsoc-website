// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "src/components/WholePageBox";
import ResourceHero from "src/components/ResourceHero";

// Data
import { matlabInfo } from "src/data/resourceData";

const Revision: React.FC = () => {
  return (
    <section>
      <Head>
        <title>{matlabInfo.title} - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <ResourceHero
        url={matlabInfo.backgroundImage}
        text={matlabInfo.title}
        icon={matlabInfo.iconPath}
        titlePosition="left"
      />
      <PageBody>
        <WholePageBox>
          {/* TODO: Update links for here */}
          <Typography variant="body1">You: I want to learn a programming language.</Typography>
          <Typography variant="body1">Me, an intellectual: MATLAB.</Typography>
          <Typography variant="body1">
            Hey friends, the slaves at MathSoc have created an Interactive MATLAB guide, which can
            be accessed here. It is meant to supplement the MATH1151/MATH1251 online modules, and
            contains 4 fun little projects to sink your teeth into. Note that it builds on, and does
            not replace, those modules which are excellent and comprehensive resources in itself.
          </Typography>
          <Typography variant="body1">
            To access it, please export all given files into the same folder and double click on the
            one that says ‘open this’. You: I want to learn a programming language.
          </Typography>
          <Typography variant="body1">
            Please do not hesitate to contact us if you have any questions, suggestions or spot any
            mistakes! 🙂
          </Typography>
        </WholePageBox>
      </PageBody>
    </section>
  );
};

export default Revision;
