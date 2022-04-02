// Library imports
import React from "react";
import Head from "next/head";
import { Typography } from "@mui/material";

// Components
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";
import ResourceHero from "components/ResourceHero";

// Data
import { appInfo } from "src/data/resourceData";

const Applications: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Applications - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <ResourceHero
        url={appInfo.backgroundImage}
        text={appInfo.title}
        icon={appInfo.iconPath}
        titlePosition={appInfo.titlePosition}
      />
      <PageBody>
        <WholePageBox>
          <Typography variant="body1" align="center">
            Coming Soon 👀
          </Typography>
        </WholePageBox>
      </PageBody>
    </div>
  );
};
export default Applications;
