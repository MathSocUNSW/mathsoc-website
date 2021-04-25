import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <section
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'grey',
        display: 'grid',
        placeItems: 'center'
      }}
    >
      <section className={styles.flexContainer}>
        <div>
          <p>&#169; UNSW Mathematics Society 2020</p>
        </div>
        <div>
          <ul>
            <li>
              <a href='https://www.facebook.com/unswmathsoc/'>
                <img src='./img/facebook_icon.svg' alt='facebook' />
              </a>
            </li>
            <li>
              <a href='https://au.linkedin.com/company/unsw-mathematics-society'>
                <img src='./img/facebook_icon.svg' alt='linkedin' />
              </a>
            </li>
            <li>
              <a href=''>
                <img src='./img/instagram_icon.svg' alt='instagram' />
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/channel/UCV-y8pOXapCoo_DDBk2MpuA'>
                <img src='./img/youtube_icon.svg' alt='youtube' />
              </a>
            </li>
            <li>
              <a href='https://discord.com/invite/Y7FFXxh'>
                <img src='./img/discord_icon.svg' alt='discord' />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
