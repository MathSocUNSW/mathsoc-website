import React from 'react';
import '../css/global.scss';

export default function Footer() {
  return (
    <div>
      <footer>
        <div className='copyright__container'>
          <p>© UNSW Mathematics Society 2020</p>
        </div>
        <div className='social__container'>
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
      </footer>
    </div>
  );
}
