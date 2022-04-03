// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@mui/material";

// Component Imports
import WholePageBox from "components/WholePageBox";
import PageBody from "components/PageBody";
import Hero from "components/Hero";

// Styling
import styles from "src/styles/about.module.scss";

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
          <Typography variant="body1" style={{ marginBottom: "0.2rem" }}>
            <b>
              The UNSW Mathematics Society (MathSoc) is the consitutent society of the School of
              Mathematics and Statistics, with membership open to anyone with an interest in
              mathematics.
            </b>
          </Typography>
          <Typography variant="body1">
            We support students by enhancing the sense of community amongst mathematics students,
            informing students of career opportunities, and developing academic resources.
          </Typography>
          <div className={styles.objective}>
            <Typography variant="h4">Our aims</Typography>
            <ul className={styles.dotPoints}>
              <li>
                <div className={styles.dotPoint}>
                  <img src="/images/fi-rs-checkbox.svg" alt="School.svg" className={styles.img} />
                  <Typography variant="body1" style={{ marginTop: 0, marginBottom: "0.7rem" }}>
                    To enhance the sense of community amongst students interested in maths
                  </Typography>
                </div>
              </li>
              <li>
                <div className={styles.dotPoint}>
                  <img src="/images/fi-rs-checkbox.svg" alt="School.svg" className={styles.img} />
                  <Typography variant="body1" style={{ marginTop: 0, marginBottom: "0.7rem" }}>
                    To inform students of the maths-related opportunities in their studies and
                    careers
                  </Typography>
                </div>
              </li>
              <li>
                <div className={styles.dotPoint}>
                  <img src="/images/fi-rs-checkbox.svg" alt="School.svg" className={styles.img} />
                  <Typography variant="body1" style={{ marginTop: 0, marginBottom: "0.7rem" }}>
                    To support students in their studies and to provide a forum to discuss all
                    aspects of mathematics
                  </Typography>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.objective}>
            <Typography variant="h4">Our events</Typography>
            <ul className={styles.dotPoints}>
              <li>
                <div className={styles.dotPoint}>
                  <img
                    src="/images/fi-rs-graduation-cap.svg"
                    alt="School.svg"
                    className={styles.img}
                  />
                  <Typography variant="body1" style={{ marginTop: 0, marginBottom: "0.2rem" }}>
                    <b>Academic</b>
                  </Typography>
                </div>
                <Typography
                  variant="body1"
                  className={styles.eventInfo}
                  style={{ marginTop: 0, marginBottom: "0.7rem" }}
                >
                  First and Second Year Revision Seminars and Workshops, Competitions
                </Typography>
              </li>
              <li>
                <div className={styles.dotPoint}>
                  <img src="/images/fi-rs-building.svg" alt="School.svg" className={styles.img} />
                  <Typography variant="body1" style={{ marginTop: 0, marginBottom: "0.2rem" }}>
                    <b>Career</b>
                  </Typography>
                </div>
                <Typography
                  variant="body1"
                  className={styles.eventInfo}
                  style={{ marginTop: 0, marginBottom: "0.7rem" }}
                >
                  Resume and Interview Workshops, Q&A Sessions, Industry Mentoring Program
                </Typography>
              </li>
              <li>
                <div className={styles.dotPoint}>
                  <img
                    src="/images/fi-rs-glass-cheers.svg"
                    alt="School.svg"
                    className={styles.img}
                  />
                  <Typography variant="body1" style={{ marginTop: 0, marginBottom: "0.2rem" }}>
                    <b>Social</b>
                  </Typography>
                </div>
                <Typography
                  variant="body1"
                  className={styles.eventInfo}
                  style={{ marginTop: 0, marginBottom: "0.7rem" }}
                >
                  Peer Mentoring Program, BBQs, Trivia and Games Nights, Movie Nights, Balls,
                  Pubcrawls
                </Typography>
              </li>
            </ul>
          </div>
        </WholePageBox>
      </PageBody>
    </section>
  );
};

export default About;
