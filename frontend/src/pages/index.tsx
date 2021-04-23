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
      <Hero />I am home
    </section>
  );
}
