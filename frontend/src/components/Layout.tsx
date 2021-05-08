import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <section className='content'>
      <header>
        <NavBar />
      </header>
      <section className='grid-left_side'></section>
      <article>{children}</article>
      <section className='grid-right_side'></section>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
