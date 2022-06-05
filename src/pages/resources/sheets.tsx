// Library Imports
import React from "react";
import Head from "next/head";
import { Link, Typography } from "@mui/material";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";
import ResourceHero from "src/components/ResourceHero";
import DocumentTile from "components/DocumentTile";

// Styling
import styles from "src/styles/revision.module.scss";

// Data
import { RevisionSheetTile } from "src/data/revisionSheetData";
import { revisionSheetInfo } from "src/data/resourceData";
import { fetchSubjectResources } from "src/lib/api";
interface RevisionProps {
  revisionSheetData: RevisionSheetTile[];
}

const RevisionSheets: React.FC<RevisionProps> = ({ revisionSheetData }) => {
  return (
    <section>
      <Head>
        <title>{revisionSheetInfo.title} - Mathsoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <ResourceHero
        url={revisionSheetInfo.backgroundImage}
        text={revisionSheetInfo.title}
        icon={revisionSheetInfo.iconPath}
        titlePosition={revisionSheetInfo.titlePosition}
      />
      <PageBody>
        <WholePageBox>
          <Typography variant="body1">
            Here, you’ll quick revision sheets for Mathematics courses.
            <br />
            <br />
            Huge thanks to our Education team who worked tirelessly to bring you this material.
            <br />
            <br />
            <b>Please note that </b>
            despite our best efforts in keeping our resources error-free, occasionally, one may slip
            past us. If you do happen to notice one, please do let us know ASAP by&nbsp;
            <Link component="a" href="/contact">
              clicking here
            </Link>
            ! These resources are NOT endorsed by the School of Mathematics and Statistics.
          </Typography>
        </WholePageBox>
        <br />
      </PageBody>
      <div className={styles.tileSection}>
        <div className={styles.tileContainer}>
          {revisionSheetData.map((tileData) => (
            <DocumentTile {...tileData} key={tileData.courseCode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      revisionSheetData: (await fetchSubjectResources(/Cheat Sheet/i)).map((resource) => ({
        courseCode: resource.courseCode,
        courseTitle: resource.courseTitle,
        path: resource.revisionLinks[0].groupLinks[0].path
      }))
    }
  };
};

export default RevisionSheets;
