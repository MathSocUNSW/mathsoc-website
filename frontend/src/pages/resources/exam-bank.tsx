// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "src/components/WholePageBox";
import ResourceHero from "src/components/ResourceHero";
import Tile from "components/Tile";

// Styling
import styles from "src/styles/examBank.module.scss";

// Data
import examBankData from "src/data/examBankData";
import examBankTutorialTestsData from "src/data/examBankTutorialTestsData";
import resourceData from "src/data/resourceData";

const ExamBank: React.FC = () => {
  const PAGE_PATH = "/resources/exam-bank";
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
        titlePosition="right"
      />
      <PageBody>
        <WholePageBox>
          <Typography variant="body1">
            These are solutions to sample lab tests created by MathSoc. Please let us know if you
            find any errors!
            <br />
            <br />
            Your lab tests will involve questions very similar to those in the sample question
            banks. Basically they&apos;ll change the numbers to make sure you think about how to
            solve the problem, rather than remember the letters, digits etc..
            <br />
            <br />
            What we have prepared are responses to sample questions generated from the question
            bank. You should always try to do the problems first yourself first. Should you get
            stuck, however, you can refer to our samples here to guide you back on the right track!
            <br />
            <br />
            To get good marks, you should definitely not be relying on these solutions at all in the
            end. You should have attempted the sample questions on MapleTA often enough to handle it
            all yourself!
            <br />
            <br />
            Note that these solutions are NOT endorsed by the UNSW School of Mathematics &
            Statistics, and that errors may exist. If you find answers that are incorrect, please
            send us a message, and we’ll try to address the question as soon as possible.
            <br />
            <br />
            Good luck studying 🙂
            <br />
            <br />
            (More solutions currently being written.)
          </Typography>
        </WholePageBox>
        <div className={styles.tileSection}>
          <div className={styles.tileContainer}>
            {examBankData.map((tileData) => (
              <Tile {...tileData} key={tileData.courseCode} />
            ))}
          </div>
        </div>
        <WholePageBox>
          <Typography variant="body1">
            The following resources were used in the old semester model, where tutorial tests were
            present instead of laboratory tests. We have chosen to keep these resources to respect
            the work of the education teams before ours.
            <br />
            <br />
            We will NOT be disclosing these past tutorial tests as they are copyrighted to UNSW
            School of Mathematics and Statistics, and we have not obtained any permission to
            distribute them.
          </Typography>
        </WholePageBox>
        <div className={styles.testTileContainer}>
          {examBankTutorialTestsData.map((tileData) => (
            <Tile {...tileData} key={tileData.courseCode} />
          ))}
        </div>
      </PageBody>
    </section>
  );
};

export default ExamBank;
