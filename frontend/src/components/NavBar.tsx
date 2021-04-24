import React from 'react';
import Link from 'next/link';
import navLinks from '../data/NavBar';

export default function NavBar() {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'grey'
      }}
    >
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          listStyleType: 'none'
        }}
      >
        <li className='logo'>MathSoc Logo</li>
        {navLinks.map(({ name, route }) => (
          <li key={name} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <Link href={route}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
