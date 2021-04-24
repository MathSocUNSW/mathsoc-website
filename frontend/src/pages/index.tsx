import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';

export default function index() {
  return (
    <section>
      <Head>
        <title>MathSoc</title>
        <meta name='keywords' content='mathsoc' />
      </Head>
      <Hero />
      <section style={{ display: 'flex', justifyContent: 'center', paddingTop: '25px' }}>
        <p style={{ textAlign: 'center', paddingLeft: '25%', paddingRight: '25%' }}>
          UNSW Mathematics Society (MathSoc) is the constituent society of the UNSW School of
          Mathematics and Statistics, with membership open to anyone with an interest in
          mathematics. We support students by enhancing the sense of community amongst mathematics
          students, informing students of career opportunities, and providing academic forums and
          resources for students. With over 3000 members, we are one of the largest societies at
          UNSW.
        </p>
      </section>
    </section>
  );
}
