import React from "react";
import Head from "next/head";
import { Container } from "@material-ui/core";

import ResourceHero from "src/components/ResourceHero";
import WholePageBox from "components/WholePageBox";

const ExamBank: React.FC = () => {
  return (
    <section>
      <Head>
        <title>MathSoc - Revision Lectures</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      {/* <ResourceHero
        url="/images/resources/revisionBackground.png"
        text="Revision Lectures"
        icon="/images/resources/revisionIcon.png"
        titlePosition="right"
      /> */}
      <Container>
        <WholePageBox>{"hello"}</WholePageBox>
      </Container>
    </section>
  );
};

export default ExamBank;
