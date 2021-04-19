import React from 'react';
import Link from 'next/link';
import navLinks from '../data/NavBar';

export default function NavBar() {
  return (
    <nav>
      <div className='logo'>MathSoc</div>
      <ul>
        {navLinks.map(({ name, route }) => (
          <li key={name}>
            <Link href={route}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
