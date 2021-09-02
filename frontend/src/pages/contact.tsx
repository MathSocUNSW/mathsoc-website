import React from "react";
import Head from "next/head";
import { Typography } from "@material-ui/core";

import styles from "src/styles/contact.module.scss";
import Hero from "components/Hero";
import ContainerWrap from "components/ContainerWrap";
import WholePageBox from "components/WholePageBox";
import { contactUsSocials } from "src/data/socialData";

const pageData = {
  title: "Contact Us",
  heroURL: "/images/hero/mathsoc_skating.png"
};

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <Typography variant="h6" align="left">
      <b>{text}</b>
    </Typography>
  );
};

const Contact: React.FC = () => {
  return (
    <section>
      <Head>
        <title>{pageData.title} - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url={pageData.heroURL} text={pageData.title} />
      <ContainerWrap>
        <WholePageBox>
          <div className={styles.container}>
            <Title text="Contact" />
            {/* TODO Update Link? */}
            <Typography variant="body2">
              You can contact us using{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe1lAW158F3s0NFJEHn2Fsfo4goau4QQTLhlbX7cJJiXGS7xw/viewform"
                target="_blank"
                rel="noreferrer"
              >
                this form.
              </a>
            </Typography>
          </div>
          <div className={styles.container}>
            <Title text="Stay connected" />
            <Typography variant="body2">
              Follow us on social media to stay updated with upcoming events and opportunities!
            </Typography>
            <div className={styles.socialContainer}>
              {contactUsSocials.map(({ name, url, iconPath, altName }) => (
                <div key={name}>
                  <a href={url} target="_blank" rel="noreferrer" className={styles.socialItem}>
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
                      rel="noreferrer"
                      style={{
                        color: "inherit",
                        textDecoration: "none" /* Remove link CSS elements*/
                      }}
                    >
                      <b>{altName}</b>
                    </a>
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.container}>
            <Title text="Address" />
            <Typography variant="body2">
              UNSW Mathematics Society
              <br />
              School of Mathematics and Statistics
              <br />
              University of New South Wales
              <br />
              Sydney, NSW 2052
            </Typography>
          </div>
        </WholePageBox>
      </ContainerWrap>
    </section>
  );
};

export default Contact;
