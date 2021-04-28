import React from 'react';
import Link from 'next/link';
import navLinks from '../../data/NavBar';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <section className={styles.mainContainer}>
      <section>
        <img src='/images/mathsocLogo.png' className={styles.logo} />
      </section>
    </section>
    // <nav
    //   style={{
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: '100%',
    //     backgroundColor: 'grey'
    //   }}
    // >
    //   <ul
    //     style={{
    //       display: 'flex',
    //       flexDirection: 'row',
    //       justifyContent: 'center',
    //       listStyleType: 'none'
    //     }}
    //   >
    //     <li className='logo'>MathSoc Logo</li>
    //     {navLinks.map(({ name, route }) => (
    //       <li key={name} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
    //         <Link href={route}>{name}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
}
