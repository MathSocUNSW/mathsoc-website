// Library Imports
import React from "react";
import Head from "next/head";
import { Typography, Link } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";
import Hero from "components/Hero";

// Styling
import styles from "src/styles/contact.module.scss";

// Data
import { socials } from "src/data/socialData";

const Contact: React.FC = () => {
  return (
    <section>
      <Head>
        <title>Join Us - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_skating.png" text="Join Us" />
      <PageBody>
        <WholePageBox>
            <Typography variant="h4">Join Us</Typography>
            <Typography variant="h6">So you've decided you would like to join us? Great!</Typography>
            <Typography variant="body1">
                To join our society, just fill out the following form.
                Make sure you come see us at O-Week, or any of our events to get your sticker!
                Membership is free for any students with a major in Mathematics or Statistics,
                otherwise the fee is $5 for the entire year,
                which gains you access to our amazing events and a free t-shirt!
                <ol>
                    <li>
                        Please complete the <Link href="https://forms.gle/jencyXN7gw4iDkDu8" target="_blank" rel="noopener noreferrer">sign up form</Link>.
                    </li>
                    <li>
                        <Link href="https://member.arc.unsw.edu.au/members/s/clubdetail?clubid=0016F0000371VyZQAU" target="_blank" rel="noopener noreferrer">Join us</Link> on SpArc.
                    </li>
                </ol>
            </Typography>
        </WholePageBox>
      </PageBody>
    </section>
  );
};

export default Contact;
