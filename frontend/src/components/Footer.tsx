import React from "react";
import styles from "src/styles/Footer.module.scss";
import { socials } from "src/data/socialData";

import { Container } from "@material-ui/core";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.leftText}>
            <p>&#169; UNSW Mathematics Society 2020</p>
          </div>
          <ul className={styles.socials}>
            {socials.map(({ name, url, iconPath }) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noreferrer" className={styles.socialItem}>
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
