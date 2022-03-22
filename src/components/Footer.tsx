// Library Imports
import React from "react";
import { Container } from "@material-ui/core";

// Styling
import styles from "src/styles/Footer.module.scss";

// Data
import { socials } from "src/data/socialData";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.leftText}>
            <p>&#169; UNSW Mathematics Society {new Date().getFullYear()}</p>
          </div>
          <ul className={styles.socials}>
            {socials.map(({ name, url, iconPath }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialItem}
                >
                  <img src={iconPath} alt={name} aria-label={name} className={styles.socialIcon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
