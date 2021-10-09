// Library Imports
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Typography } from "@material-ui/core";

// Component Imports
import WholePageBox from "components/WholePageBox";
import PageBody from "components/PageBody";
import Hero from "components/Hero";

// Styling
import styles from "src/styles/about.module.scss";

// Data
import { discordData } from "src/data/socialData";

const About: React.FC = () => {
  return (
    <section className="about">
      <Head>
        <title>About Us - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_about_us.jpg" text="About Us" />
      <PageBody>
        <WholePageBox>
          <Typography variant="h2">About Us</Typography>
          <Typography variant="body1">
            Welcome to the official website of UNSW Mathematics Society! We are the society for
            mathematics students and anyone with an interest in mathematics. Affiliated wwith ARC @
            UNSW and the School of Mathematics and Statistics, we are one of the largest societies
            at UNSW, boasting a member count of over 3,000.
          </Typography>
          <div className={styles.objective}>
            <Typography variant="h4">Our aims</Typography>
            <Typography className={styles.dotPoints}>
              <ul>
                <li>
                  <div className={styles.dotPoint}>
                    <img src="/images/school.svg" alt="School.svg" className={styles.img} />
                    <Typography variant="body1">
                      To enhance the sense of community amongst students interested in maths.
                    </Typography>
                  </div>
                </li>
                <li>
                  <div className={styles.dotPoint}>
                    <img src="/images/school.svg" alt="School.svg" className={styles.img} />
                    <Typography variant="body1">
                      To inform students of the maths-related opportunities in their studies and
                      careers.
                    </Typography>
                  </div>
                </li>
                <li>
                  <div className={styles.dotPoint}>
                    <img src="/images/school.svg" alt="School.svg" className={styles.img} />
                    <Typography variant="body1">
                      To support students in their studies and to provide a forum to discuss all
                      aspects of mathematics.
                    </Typography>
                  </div>
                </li>
              </ul>
            </Typography>
          </div>

          <div className={styles.objective}>
            <Typography variant="h4">Our events</Typography>
            <Typography className={styles.dotPoints}>
              <ul>
                <li>
                  <div className={styles.dotPoint}>
                    <img src="/images/school.svg" alt="School.svg" className={styles.img} />
                    <Typography variant="body1">
                      We hold <b>Social</b> events such as BBQs, trivia nights, poker tournaments,
                      and integration bees! These are designed to expand student networks and foster
                      a stronger community.
                    </Typography>
                  </div>
                </li>
                <li>
                  <div className={styles.dotPoint}>
                    <img src="/images/school.svg" alt="School.svg" className={styles.img} />
                    <Typography className="body1">
                      Our <b>Industry and Careers</b> events help students discover potential jobs
                      and careers that maths may lead them to whilst providing the opportunity to
                      network with industry professionals.
                    </Typography>
                  </div>
                </li>
                <li>
                  <div className={styles.dotPoint}>
                    <img src="/images/school.svg" alt="School.svg" className={styles.img} />
                    <Typography className="body1">
                      <b>Academic</b> events such as revision and course selection seminars, assist
                      budding mathematics students in making decisions such as math major selection.
                    </Typography>
                  </div>
                </li>
              </ul>
            </Typography>
          </div>
          <Typography variant="body1">
            To round this off, we have a{" "}
            <a href={discordData.url} target="_blank" rel="noopener noreferrer">
              Discord server
            </a>{" "}
            where you can discuss maths to your heart’s content – which also doubles as a place to
            discuss anything and everything mathematical. Moreover, we have dedicated First year and
            Higher Year Facebook groups - and for First Years, MathSoc also releases solutions to
            past class tests!
          </Typography>
          {/* TODO finish off links */}
          <Typography variant="body1">
            Essentially, MathSoc is here to help enrich the experience of studying maths at UNSW.
            We’re here to fulfil your social, academic and career needs – and help make your time at
            UNSW a great one!
          </Typography>
        </WholePageBox>
      </PageBody>
    </section>
  );
};

export default About;
