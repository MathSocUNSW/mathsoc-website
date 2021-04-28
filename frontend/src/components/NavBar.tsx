import React from 'react';
import Link from 'next/link';
import navLinks from '../data/NavBar';
import styles from 'src/styles/NavBar.module.scss';

export default function NavBar() {
  return (
    <section className={styles.mainContainer}>
      <section className={styles.leftLogoContainer}>
        <Link href='/'>
          <img
            src='/images/mathsocLogoLong.svg'
            className={styles.logo}
            alt='mathsoc logo'
            aria-label='logo'
          />
        </Link>
      </section>
      <section>
        <ul className={styles.navBarList}>
          {navLinks.map(({ name, route }) => (
            <li key={name} className={styles.navItemBox}>
              <Link href={route}>
                <span className={styles.navItemText}>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
