// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "src/components/WholePageBox";
import ResourceHero from "src/components/ResourceHero";

// Data
import { rInfo } from "src/data/resourceData";

const R: React.FC = () => {
  return (
    <section>
      <Head>
        <title>{rInfo.title} - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <ResourceHero
        url={rInfo.backgroundImage}
        text={rInfo.title}
        icon={rInfo.iconPath}
        titlePosition={rInfo.titlePosition}
      />
      <PageBody>
        <WholePageBox>
          <Typography variant="body1">
            In 2021, MathSoc collaborated with BINFSOC for an introduction to R workshop, which was
            presented by Merry Chu.
          </Typography>
          <Typography variant="body1">
            Our workshop slides can be found{" "}
            <a
              href="/files/resources/misc/R_Workshop_2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            , as well as the recording{" "}
            <a href="https://youtu.be/ze4AdZnCVBo" target="_blank" rel="noopener noreferrer">
              here
            </a>
            .
          </Typography>
        </WholePageBox>
      </PageBody>
    </section>
  );
};

export default R;
