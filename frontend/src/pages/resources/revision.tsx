import React from "react";
import Head from "next/head";
import { Container, Typography } from "@material-ui/core";

import ResourceHero from "src/components/ResourceHero";
import styles from "src/styles/revision.module.scss";
import WholePageBox from "components/WholePageBox";

import Tile from "components/Tile";
import revisionData from "src/data/revisionData";
import resourceData from "src/data/resourceData";

const Revision: React.FC = () => {
  const PAGE_PATH = "/resources/revision";
  const pageData = resourceData.find((x) => x.resourceLink === PAGE_PATH);

  return (
    <section>
      <Head>
        <title>MathSoc - {pageData.title}</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <ResourceHero
        url={pageData.backgroundImage}
        text={pageData.title}
        icon={pageData.iconPath}
        titlePosition="right"
      />
      <Container>
        <WholePageBox>
          <Typography variant="body1">
            Here, you’ll find the slides and solutions for the revision seminars we held for UNSW
            Mathematics courses. All the best for your revision 😊
            <br />
            <br />
            Huge thanks to our Education team who worked tirelessly to bring you this material and
            present the revision seminars.
            <br />
            <br />
            <strong>Please note that, </strong>
            despite our best efforts in keeping our resources error-free, occasionally, one may slip
            past us. If you do happen to notice one, please do let us know ASAP by clicking here!
            These resources are NOT endorsed by the School of Mathematics and Statistics.
          </Typography>
        </WholePageBox>
        <div className={styles.tileContainer}>
          {revisionData.map((tileData) => (
            <Tile {...tileData} key={tileData.courseCode} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Revision;
