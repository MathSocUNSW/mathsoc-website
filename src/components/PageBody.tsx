// Library Imports
import React from "react";
import { Container } from "@mui/material";

// Styling
import styles from "src/styles/PageBody.module.scss";
import { type } from "os";

// Type Definitions
interface PageBodyProps {
  // children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const PageBody: React.FC<PageBodyProps> = ({ children }) => {
  return (
    <div className={styles.pageBody}>
      <Container>{children}</Container>
    </div>
  );
};

export default PageBody;
