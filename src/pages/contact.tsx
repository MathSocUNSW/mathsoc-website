// Library Imports
import React, { useState } from "react";
import Head from "next/head";
import { Typography } from "@mui/material";

// Component Imports
import PageBody from "components/PageBody";
import WholePageBox from "components/WholePageBox";
import Hero from "components/Hero";

// Styling
import styles from "src/styles/contact.module.scss";

// Data
import { socials } from "src/data/socialData";
import { contactProps } from "src/data/contactData";

const Contact: React.FC = () => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [contactDetails, setContactDetails] = useState<contactProps>({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setContactDetails((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactDetails);
    if (!emailRegex.test(contactDetails.email)) {
      alert("Invalid Email");
    } else {
      alert("You've submitted");
    }
  };

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
              {/* <Typography variant="h4">Contact Us</Typography>
              TODO Update Link?
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
              </Typography> */}
              <form onSubmit={handleSubmit}>
                <div className={styles.contactName}>
                  <div>
                    <Typography variant="h6">First Name:</Typography>
                    <input
                      type="text"
                      name="firstname"
                      className={styles.inputItem}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Typography variant="h6">Last Name:</Typography>
                    <input
                      type="text"
                      name="lastname"
                      className={styles.inputItem}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Typography variant="h6">Email:</Typography>
                <input
                  type="text"
                  className={styles.emailItem}
                  name="email"
                  onChange={handleChange}
                />
                <Typography variant="h6">Message:</Typography>
                <div className={styles.contactName}>
                  <textarea
                    rows={5}
                    cols={50}
                    className={styles.messageItem}
                    name="message"
                    onChange={handleChange}
                  />
                  <button type="submit" className={styles.submitButton}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="stayConnectedSection">
              <Typography variant="h4">Stay Connected</Typography>
              <Typography variant="body1">
                Follow us on social media to stay updated with upcoming events and opportunities!
              </Typography>
              <div className={styles.socialContainer}>
                {socials.map(({ name, url, iconPath, altName }) => (
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
