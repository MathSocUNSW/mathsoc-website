import React from 'react';
import styles from './Footer.module.scss';
import FacebookLogo from '../../../public/images/facebookLogo.svg';
import LinkedinLogo from '../../../public/images/linkedinLogo.svg';
import InstagramLogo from '../../../public/images/instagramLogo.svg';
import YoutubeLogo from '../../../public/images/youtubeLogo.svg';
import DiscordLogo from '../../../public/images/discordLogo.svg';
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
                <div aria-label='facebook'>
                  <FacebookLogo className={styles.logo} />
                </div>
              </a>
            </li>
            <li>
              <a href={linkedInLink} target='_blank' rel='noreferrer'>
                <div aria-label='linkedin'>
                  <LinkedinLogo className={styles.logo} />
                </div>
              </a>
            </li>
            <li>
              <a href={instagramLink} target='_blank' rel='noreferrer'>
                <div aria-label='instagram'>
                  <InstagramLogo className={styles.logo} />
                </div>
              </a>
            </li>
            <li>
              <a href={youtubeLink} target='_blank' rel='noreferrer'>
                <div aria-label='youtube'>
                  <YoutubeLogo className={styles.logo} />
                </div>
              </a>
            </li>
            <li>
              <a href={discordLink} target='_blank' rel='noreferrer'>
                <div aria-label='youtube'>
                  <DiscordLogo className={styles.logo} />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.footerRight}></section>
    </section>
  );
}
