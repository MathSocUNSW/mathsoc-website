// Library Imports
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Typography } from "@material-ui/core";

// Component Imports
import WholePageBox from "components/WholePageBox";
import PageBody from "components/PageBody";
import Hero from "components/Hero";

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
          <Typography variant="h5">
            Welcome to the official website of the University of New South Wales&apos; (UNSW)
            Mathematics Society!
          </Typography>
          <Typography variant="body1">
            UNSW Mathematics Society (MathSoc) is the society for mathematics students, however
            membership is open to anyone, and everyone, who has an interest in mathematics.
            Affiliated with Arc @ UNSW and with the School of Mathematics and Statistics – we are
            one of the largest societies at UNSW, boasting a member count over 3,000.
          </Typography>
          <Typography variant="body1">
            We have three main aims:
            <ol>
              <li>To enhance the sense of community amongst mathematics students</li>
              <li>
                To inform students of the maths-related opportunities in their studies and careers
              </li>
              <li>
                To support students in their studies and to provide a forum to discuss all aspects
                of mathematics
              </li>
            </ol>
          </Typography>
          <Typography variant="body1">
            Our <b>social events</b> include the &apos;usual&apos;, such as BBQs and trivia nights –
            but we also hold special events such as poker tournaments, social sports days and even
            our annual integration bee! All these are designed to help you network with other
            students, and build a community between you and others in a maths degree.
          </Typography>
          <Typography variant="body1">
            <b>Academic events</b> are also major on the MathSoc calendar. For the budding
            mathematics student, we offer talks and other events that assist in aiding your choice
            in what maths major to pick,
          </Typography>
          <Typography variant="body1">
            Along the same lines are our <b>Industry and Careers events</b> – which are a must for
            the older students. These help you discover potential jobs and careers that maths can
            lead you to – and also allow you to chat to people who can help you get there!
          </Typography>
          <Typography variant="body1">
            To round this off, we have a{" "}
            <a href={discordData.url} target="_blank" rel="noreferrer">
              Discord server
            </a>{" "}
            where you can discuss maths to your heart’s content – which also doubles as a place to
            discuss anything and everything mathematical. Moreover, we have dedicated First Year and
            Higher Year Facebook groups – and for First Years, MathSoc also releases solutions to
            past class tests!
          </Typography>
          {/* TODO finish off links */}
          <Typography variant="body1">
            Essentially, MathSoc is here to help enrich the experience of studying maths at UNSW.
            We’re here to fulfil your social, academic and career needs – and help make your time at
            UNSW a great one!
          </Typography>
          {/* TEMP */}
          <br />
          <Typography variant="h2">Meet the team!</Typography>
          <Typography variant="body1">
            {/* TODO finish */}
            Our student team is comprised of x executives, directors and subcommittee members. Stuff
            about these roles blah blah.
          </Typography>
          <Typography variant="body1">
            Click here to <Link href="/about/team">Meet the team!</Link>
          </Typography>
          <Typography variant="body1">
            Click here to see the <Link href="/about/formerteam">former team!</Link>
          </Typography>
        </WholePageBox>
      </PageBody>
    </section>
  );
};

export default About;
