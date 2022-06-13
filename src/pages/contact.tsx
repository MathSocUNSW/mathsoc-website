// Library Imports
import React, { useState } from "react";
import Head from "next/head";
import { Typography, Alert, Button } from "@mui/material";

// Component Imports
import WholePageBox from "components/WholePageBox";
import PageBody from "components/PageBody";
import BoxType from "components/BoxType";
import Hero from "components/Hero";

// Styling
import styles from "src/styles/contact.module.scss";

// Data
import { socials } from "src/data/socialData";
import { Contact, FormInput, Severity } from "src/data/contactData";

const Contact: React.FC = () => {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //Set alert display to none
  const [alertInfo, setAlert] = useState(<Alert style={{ display: "none" }} />);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [contactDetails, setContactDetails] = useState<Contact>({
    name: "",
    email: "",
    message: "",
    subject: ""
  });

  const alertComponentValue = (text: string, type: Severity) => {
    setAlert(
      <Alert
        severity={type}
        variant="filled"
        onClose={() => {
          setAlert(<Alert style={{ display: "none" }} />);
        }}
        className={styles.alertIcon}
      >
        {text}
      </Alert>
    );
  };

  const handleChange = (event: FormInput) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setContactDetails((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!emailRegex.test(contactDetails.email)) {
      alertComponentValue("Invalid Email", "error");
    } else if (contactDetails.name === "") {
      alertComponentValue("Name not filled in", "error");
    } else if (contactDetails.message === "") {
      alertComponentValue("Message not filled in", "error");
    } else if (contactDetails.subject === "") {
      alertComponentValue("Subject not filled in", "error");
    } else {
      //All requirements satisfied
      try {
        setDisableSubmit(true);
        const response = await fetch("/api/mailer", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contactDetails)
        });
        if (response.status == 200) {
          alertComponentValue("Form submitted", "success");
          event.target.reset();
        } else if (response.status >= 400) {
          alertComponentValue("Form could not be submitted", "error");
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log(err);
          alertComponentValue(err.message, "error");
        }
      }
      setDisableSubmit(false);
    }
  }

  return (
    <section>
      <Head>
        <title>Contact Us - MathSoc</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Hero url="/images/hero/mathsoc_skating.png" text="Contact Us" />
      <PageBody>
        <div className={styles.contactContainer}>
          <WholePageBox size={BoxType.HALF_WIDTH}>
            {alertInfo}
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div>
                <Typography variant="h6" component="label" htmlFor="contactName">
                  Name
                </Typography>
                <input
                  type="text"
                  name="name"
                  id="contactName"
                  className={styles.inputItem}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Typography variant="h6" component="label" htmlFor="contactEmail">
                  Email
                </Typography>
                <input
                  type="text"
                  name="email"
                  id="contactEmail"
                  className={styles.inputItem}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Typography variant="h6" component="label" htmlFor="contactSubject">
                  Subject
                </Typography>
                <input
                  type="text"
                  className={styles.inputItem}
                  name="subject"
                  id="contactSubject"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Typography variant="h6" component="label" htmlFor="contactMessage">
                  Message
                </Typography>
                <textarea
                  rows={5}
                  cols={50}
                  className={styles.messageItem}
                  name="message"
                  id="contactMessage"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.submitContainer}>
                <div className={styles.submitItem}>
                  <Button
                    disabled={disableSubmit}
                    variant="contained"
                    type="submit"
                    sx={{ borderRadius: 28 }}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
            <section className="stayConnectedSection">
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
            </section>
            <section className="addressSection">
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
            </section>
          </WholePageBox>
        </div>
      </PageBody>
    </section>
  );
};

export default Contact;
