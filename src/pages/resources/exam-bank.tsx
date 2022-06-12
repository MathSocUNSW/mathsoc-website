// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@mui/material";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "src/components/WholePageBox";
import ResourceHero from "src/components/ResourceHero";
import Tile from "components/Tile";

// Styling
import styles from "src/styles/examBank.module.scss";

// Data
import { RevisionTile } from "src/data/revisionData";
import { examBankInfo } from "src/data/resourceData";
import { fetchSubjectResources } from "src/lib/api";

interface ExamBankProps {
  examBankData: RevisionTile[];
  oldExamBankData: RevisionTile[];
}
const ExamBank: React.FC<ExamBankProps> = ({ examBankData, oldExamBankData }) => {
  return (
    <section>
      <Head>
        <title>{examBankInfo.title} - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <ResourceHero
        url={examBankInfo.backgroundImage}
        text={examBankInfo.title}
        icon={examBankInfo.iconPath}
        titlePosition={examBankInfo.titlePosition}
      />
      <PageBody>
        <WholePageBox>
          <Typography variant="body1">
            These are solutions to sample lab tests created by MathSoc. Please let us know if you
            find any errors!
          </Typography>
          <Typography variant="body1">
            Your lab tests will involve questions very similar to those in the sample question
            banks. Basically they&apos;ll change the numbers to make sure you think about how to
            solve the problem, rather than remember the letters, digits etc.
          </Typography>
          <Typography variant="body1">
            What we have prepared are responses to sample questions generated from the question
            bank. You should always try to do the problems first yourself first. Should you get
            stuck, however, you can refer to our samples here to guide you back on the right track!
          </Typography>
          <Typography variant="body1">
            To get good marks, you should definitely not be relying on these solutions at all in the
            end. You should have attempted the sample questions on MapleTA often enough to handle it
            all yourself!
          </Typography>
          <Typography variant="body1">
            Note that these solutions are NOT endorsed by the UNSW School of Mathematics &
            Statistics, and that errors may exist. If you find answers that are incorrect, please
            send us a message, and we’ll try to address the question as soon as possible.
          </Typography>
          <Typography variant="body1">Good luck studying 🙂</Typography>
          <Typography variant="body1">(More solutions are currently being written.)</Typography>
        </WholePageBox>
        <br />
        <div className={styles.tileSection}>
          <div className={styles.tileContainer}>
            {examBankData.map((tileData) => (
              <Tile {...tileData} key={tileData.courseCode} />
            ))}
          </div>
        </div>
        <br />
        <WholePageBox>
          <Typography variant="body1">
            The following resources were used in the old semester model, where tutorial tests were
            present instead of laboratory tests. We have chosen to keep these resources to respect
            the work of the education teams before ours.
          </Typography>
          <Typography variant="body1">
            We will NOT be disclosing these past tutorial tests as they are copyrighted to UNSW
            School of Mathematics and Statistics, and we have not obtained any permission to
            distribute them.
          </Typography>
        </WholePageBox>
        <br />
        <div className={styles.tileSection}>
          <div className={styles.testTileContainer}>
            {oldExamBankData.map((tileData) => (
              <Tile {...tileData} key={tileData.courseCode} />
            ))}
          </div>
        </div>
      </PageBody>
    </section>
  );
};

export const getStaticProps = async () => {
  const allExamBankData = await fetchSubjectResources(/Sample Paper/);
  const examBankData = [...allExamBankData];
  const oldExamBankData = [...allExamBankData];
  for (let i = 0; i < examBankData.length; i++) {
    examBankData[i] = { ...examBankData[i] };
    oldExamBankData[i] = { ...oldExamBankData[i] };
    examBankData[i].revisionLinks = examBankData[i].revisionLinks.filter(
      (revisionLink) => !/OLD /.test(revisionLink.groupHeader)
    );
    oldExamBankData[i].revisionLinks = oldExamBankData[i].revisionLinks.filter((revisionLink) =>
      /OLD /.test(revisionLink.groupHeader)
    );
  }

  return {
    props: {
      examBankData: examBankData.filter((data) => data.revisionLinks.length > 0),
      oldExamBankData: oldExamBankData.filter((data) => data.revisionLinks.length > 0)
    }
  };
};
export default ExamBank;
