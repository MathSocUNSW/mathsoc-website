import React from "react";
import Head from "next/head";
import { Container } from "@material-ui/core";

const Unknown404: React.FC = () => {
  return (
    <div>
      <Head>
        <title>MathSoc Spaghetti</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Container>
        <h1>Page Not Found</h1>
        <h2>Insert random maths 404 joke (like the train thingy)</h2>
        <p>Redirecting you back..</p>
      </Container>
    </div>
  );
};

export default Unknown404;
