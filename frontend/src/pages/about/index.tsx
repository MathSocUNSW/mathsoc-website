import React from "react";
import Head from "next/head";

import Hero from "src/components/Hero";
import styles from "src/styles/about.module.scss";
import { facebookLink } from "src/data/socialLinks";

const About: React.FC = () => {
  return (
    <section>
      <Head>
        <title>MathSoc - About Us</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_about_us.jpg" text="About Us" />
      <section className={styles.mainContainer}>
        <div className={styles.mainCard}>
          <section className={styles.mainText}>
            <h1>About Us</h1>
            <h3>
              Welcome to the official website of the University of New South Wales&apos; (UNSW)
              Mathematics Society!
            </h3>
            <p>
              UNSW Mathematics Society (MathSoc) is the society for mathematics students, however
              membership is open to anyone, and everyone, who has an interest in mathematics.
              Affiliated with Arc @ UNSW and with the School of Mathematics and Statistics – we are
              one of the largest societies at UNSW, boasting a member count over 3,000.
            </p>
            <p>
              We have three main aims:
              <ul>
                <li>To enhance the sense of community amongst mathematics students</li>
                <li>
                  To inform students of the maths-related opportunities in their studies and careers
                </li>
                <li>
                  To support students in their studies and to provide a forum to discuss all aspects
                  of mathematics
                </li>
              </ul>
            </p>
            <p>
              Our <b>social events</b> include the &apos;usual&apos;, such as BBQs and trivia nights
              – but we also hold special events such as poker tournaments, social sports days and
              even our annual integration bee! All these are designed to help you network with other
              students, and build a community between you and others in a maths degree.
            </p>
            <p>
              <b>Academic events</b> are also major on the MathSoc calendar. For the budding
              mathematics student, we offer talks and other events that assist in aiding your choice
              in what maths major to pick,
            </p>
            <p>
              Along the same lines are our <b>Industry and Careers events</b> – which are a must for
              the older students. These help you discover potential jobs and careers that maths can
              lead you to – and also allow you to chat to people who can help you get there!
            </p>
            <p>
              To round this off, we have a{" "}
              <a href={facebookLink} target="_blank" rel="noreferrer">
                Facebook group
              </a>{" "}
              where you can discuss maths to your heart’s content – which also doubles as a place to
              discuss anything and everything mathematical. Moreover, we have dedicated First Year
              and Higher Year Facebook groups – and for First Years, MathSoc also releases solutions
              to past class tests!
            </p>
            {/* TODO finish off links */}
            <p>
              Essentially, MathSoc is here to help enrich the experience of studying maths at UNSW.
              We’re here to fulfil your social, academic and career needs – and help make your time
              at UNSW a great one!
            </p>
          </section>
        </div>
      </section>
    </section>
  );
};

export default About;
