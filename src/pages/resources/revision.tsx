// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";
import ResourceHero from "src/components/ResourceHero";
import Tile from "components/Tile";

// Styling
import styles from "src/styles/revision.module.scss";

// Data
import revisionData from "src/data/revisionData";
import { revisionInfo } from "src/data/resourceData";

const Revision: React.FC = () => {
  return (
    <section>
      <Head>
        <title>{revisionInfo.title} - Mathsoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <ResourceHero
        url={revisionInfo.backgroundImage}
        text={revisionInfo.title}
        icon={revisionInfo.iconPath}
        titlePosition={revisionInfo.titlePosition}
      />
      <PageBody>
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
            <b>Please note that </b>
            despite our best efforts in keeping our resources error-free, occasionally, one may slip
            past us. If you do happen to notice one, please do let us know ASAP by clicking here!
            These resources are NOT endorsed by the School of Mathematics and Statistics.
          </Typography>
        </WholePageBox>
        <br />
        <div className={styles.tileSection}>
          <div className={styles.tileContainer}>
            {revisionData.map((tileData) => (
              <Tile {...tileData} key={tileData.courseCode} />
            ))}
          </div>
        </div>
      </PageBody>
    </section>
  );
};

export default Revision;
