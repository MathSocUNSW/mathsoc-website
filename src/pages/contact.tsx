// Library Imports
import React, { useState } from "react";
import Head from "next/head";
import { Typography, Alert } from "@mui/material";

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
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //Set alert display to none
  const [alertInfo, setAlert] = useState(<Alert style={{ display: "none" }} />);
  const [contactDetails, setContactDetails] = useState<contactProps>({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    subject: ""
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
    if (!emailRegex.test(contactDetails.email)) {
      setAlert(
        <Alert
          severity="error"
          variant="filled"
          onClose={() => {
            setAlert(<Alert style={{ display: "none" }} />);
          }}
        >
          Invalid Email
        </Alert>
      );
    } else if (contactDetails.firstname === "" || contactDetails.lastname === "") {
      setAlert(
        <Alert
          severity="error"
          variant="filled"
          onClose={() => {
            setAlert(<Alert style={{ display: "none" }} />);
          }}
        >
          Name not filled in
        </Alert>
      );
    } else if (contactDetails.message === "") {
      setAlert(
        <Alert
          severity="error"
          variant="filled"
          onClose={() => {
            setAlert(<Alert style={{ display: "none" }} />);
          }}
        >
          Message not filled in
        </Alert>
      );
    } else {
      //Do something with the form
      setAlert(
        <Alert
          severity="success"
          variant="filled"
          onClose={() => {
            setAlert(<Alert style={{ display: "none" }} />);
          }}
        >
          Form submitted
        </Alert>
      );
      fetch("/api/mailer", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contactDetails)
      });
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
            <div className={styles.contactForm}>
              <form onSubmit={handleSubmit}>
                {alertInfo}
                <div className={styles.contactName}>
                  <div style={{ width: "100%" }}>
                    <Typography variant="h6">First Name:</Typography>
                    <input
                      type="text"
                      name="firstname"
                      className={styles.inputItem}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <Typography variant="h6">Last Name:</Typography>
                    <input
                      type="text"
                      name="lastname"
                      className={styles.inputItem}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <Typography variant="h6">Email:</Typography>
                  <input
                    type="text"
                    className={styles.inputFullWidth}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Typography variant="h6">Subject</Typography>
                  <input
                    type="text"
                    className={styles.inputFullWidth}
                    name="subject"
                    onChange={handleChange}
                  />
                </div>
                <div></div>
                <div>
                  <Typography variant="h6">Message:</Typography>
                  <textarea
                    rows={5}
                    cols={50}
                    className={styles.messageItem}
                    name="message"
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.submitContainer}>
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
