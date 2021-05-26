import React from "react";
import Head from "next/head";
import { Container, Typography } from "@material-ui/core";

import ResourceHero from "src/components/ResourceHero";

{
  /*TODO: custom styles for resources - DONE*/
}
import styles from "src/styles/revision.module.scss";

const Revision: React.FC = () => {
  return (
    <section>
      <Head>
        <title>MathSoc - Revision Lectures</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      {/*TODO: custom hero for resources - DONE*/}
      <ResourceHero
        url="/images/resources/revisionBackground.png"
        text="Revision Lectures"
        icon="/images/resources/revisionIcon.png"
        titlePosition="right"
      />
      <Container>
        <section className={styles.content}>
          <Typography variant="body1">
            Here, you’ll find the slides and solutions for the revision seminars we held for UNSW
            Mathematics courses. All the best for your revision :)
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
        </section>
        {/*TODO: 'tiles' for resources*/}
      </Container>
    </section>
  );
};

export default Revision;
