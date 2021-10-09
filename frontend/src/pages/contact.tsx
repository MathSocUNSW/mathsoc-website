// Library Imports
import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";
import Hero from "components/Hero";

// Styling
import styles from "src/styles/contact.module.scss";

// Data
import { contactUsSocials } from "src/data/socialData";

const Contact: React.FC = () => {
  return (
    <section>
      <Head>
        <title>Contact Us - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_skating.png" text="Contact Us" />
      <PageBody>
        <WholePageBox>
          <div className={styles.contactBody}>
            <div className="contactUsSection">
              <Typography variant="h4">Contact Us</Typography>
              {/* TODO Update Link? */}
              <Typography variant="body1">
                You can contact us using{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe1lAW158F3s0NFJEHn2Fsfo4goau4QQTLhlbX7cJJiXGS7xw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this form
                </a>
                .
              </Typography>
            </div>
            <div className="stayConnectedSection">
              <Typography variant="h4">Stay Connected</Typography>
              <Typography variant="body1">
                Follow us on social media to stay updated with upcoming events and opportunities!
              </Typography>
              <div className={styles.socialContainer}>
                {contactUsSocials.map(({ name, url, iconPath, altName }) => (
                  <div key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialItem}
                    >
                      <img
                        src={iconPath}
                        alt={name}
                        aria-label={name}
                        className={styles.socialIcon}
                      />
                    </a>
                    <Typography variant="body2" display="inline" noWrap={true} align="center">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "inherit",
                          textDecoration: "none"
                        }}
                      >
                        <b>{altName}</b>
                      </a>
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className="addressSection">
              <Typography variant="h4">Address</Typography>
              <Typography variant="body1">
                UNSW Mathematics Society
                <br />
                School of Mathematics and Statistics
                <br />
                University of New South Wales
                <br />
                Sydney, NSW 2052
              </Typography>
            </div>
          </div>
        </WholePageBox>
      </PageBody>
    </section>
  );
};

export default Contact;
