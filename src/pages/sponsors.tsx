// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";
import Hero from "components/Hero";
import SponsorsBox from "components/SponsorsBox";

// Styling
import styles from "src/styles/sponsors.module.scss";

// Data
import sponsorsData, { sponsor } from "src/data/sponsorsData";

interface sponsorSectionProps {
  sponsorType: string;
  condition: (sponsor: sponsor) => boolean;
}

const SponsorSection = ({ sponsorType, condition }: sponsorSectionProps) => {
  const specificSponsors = sponsorsData.filter(condition);

  return (
    <WholePageBox>
      <Typography variant="h2" align="center">
        {sponsorType}
      </Typography>
      {specificSponsors.map((sponsor) => (
        <SponsorsBox {...sponsor} key={sponsor.name} />
      ))}
    </WholePageBox>
  );
};

const Sponsors: React.FC = () => {
  const principals = (sponsor: sponsor) => sponsor.type === "principal";
  const majors = (sponsor: sponsor) => sponsor.type === "major";
  const affiliates = (sponsor: sponsor) =>
    sponsor.type === "marketing" || sponsor.type === "events";

  return (
    <section>
      <Head>
        <title>Sponsors - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_sponsors.png" text="Sponsors" />
      <PageBody>
        <div className={styles.sponsorsPg}>
          <WholePageBox>
            <div className="sponsorUs">
              <Typography variant="h2" align="center">
                Sponsorship Opportunities
              </Typography>
              <Typography variant="body1" align="center">
                If you are interested about sponsoring opportunities or have any questions, please
                contact our Sponsorship Directors at
                <br />
                <a href="mailto:sponsorships@unswmathsoc.org">sponsorships@unswmathsoc.org</a>
              </Typography>
            </div>
          </WholePageBox>
          <SponsorSection sponsorType="Principal Sponsors" condition={principals} />
          <SponsorSection sponsorType="Major Sponsors" condition={majors} />
          <SponsorSection sponsorType="Affiliates" condition={affiliates} />
        </div>
      </PageBody>
    </section>
  );
};

export default Sponsors;
