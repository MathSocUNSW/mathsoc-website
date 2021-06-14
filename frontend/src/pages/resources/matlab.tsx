import React from "react";
import Head from "next/head";
import { Container, Typography } from "@material-ui/core";

import ResourceHero from "src/components/ResourceHero";
import WholePageBox from "components/WholePageBox";

const Revision: React.FC = () => {
  return (
    <section>
      <Head>
        <title>MathSoc - MATLAB Guide</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <ResourceHero
        url="/images/resources/matlabBackground.png"
        text="MATLAB Guide"
        icon="/images/resources/matlabIcon.png"
        titlePosition="left"
      />
      <Container> 
        <WholePageBox>
          <Typography variant="body1">
            You: I want to learn a programming language.
            <br />
            <br />
            Me, an intellectual: MATLAB.
            <br />
            <br />
            Hey friends, the slaves at MathSoc have created an Interactive MATLAB guide, 
            which can be accessed here. It is meant to supplement the MATH1151/MATH1251 
            online modules, and contains 4 fun little projects to sink your teeth into. 
            Note that it builds on, and does not replace, those modules which are excellent 
            and comprehensive resources in itself.
            <br />
            <br />
            To access it, please export all given files into the same folder and double 
            click on the one that says ‘open this’.
            You: I want to learn a programming language.
            <br />
            <br />
            Please do not hesitate to contact us if you have any questions, suggestions 
            or spot any mistakes! 🙂
          </Typography>
        </WholePageBox>
      </Container>
    </section>
  );
};

export default Revision;
