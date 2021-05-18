import React from "react";
import Head from "next/head";
import { Container, Typography } from "@material-ui/core";

const Unknown404: React.FC = () => {
  return (
    <div>
      <Head>
        <title>MathSoc - Spaghetti</title>
        <meta name="keywords" content="mathsoc" />
      </Head>
      <Container>
        {/* Hero: Page Not Found */}
        <Typography variant="h1">Page Not Found</Typography>
        <Typography variant="h5">Insert random maths 404 joke (like the train thingy)</Typography>
      </Container>
    </div>
  );
};

export default Unknown404;
