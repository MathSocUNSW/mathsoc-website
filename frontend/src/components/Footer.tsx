import React from 'react';
import styles from 'src/styles/Footer.module.scss';
import {
  discordLink,
  facebookLink,
  instagramLink,
  linkedInLink,
  youtubeLink
} from 'src/data/socialLinks';

export default function Footer() {
  return (
    <section className={styles.footer}>
      <section className={styles.footerLeft}></section>
      <section className={styles.mainContainer}>
        <div className={styles.leftText}>
          <p>&#169; UNSW Mathematics Society 2020</p>
        </div>
        <div className={styles.rightList}>
          <ul className={styles.logoList}>
            <li>
              <a href={facebookLink} target='_blank' rel='noreferrer'>
                <img
                  src='/images/facebookLogo.svg'
                  className={styles.logo}
                  aria-label='facebook'
                  alt='facebook'
                />
              </a>
            </li>
            <li>
              <a href={linkedInLink} target='_blank' rel='noreferrer'>
                <img
                  src='/images/linkedinLogo.svg'
                  className={styles.logo}
                  aria-label='linkedin'
                  alt='linkedin'
                />
              </a>
            </li>
            <li>
              <a href={instagramLink} target='_blank' rel='noreferrer'>
                <img
                  src='/images/instagramLogo.svg'
                  className={styles.logo}
                  aria-label='instagram'
                  alt='instagram'
                />
              </a>
            </li>
            <li>
              <a href={youtubeLink} target='_blank' rel='noreferrer'>
                <img
                  src='/images/youtubeLogo.svg'
                  className={styles.logo}
                  aria-label='youtube'
                  alt='youtube'
                />
              </a>
            </li>
            <li>
              <a href={discordLink} target='_blank' rel='noreferrer'>
                <img
                  src='/images/discordLogo.svg'
                  className={styles.logo}
                  aria-label='discord'
                  alt='discord'
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.footerRight}></section>
    </section>
  );
}
