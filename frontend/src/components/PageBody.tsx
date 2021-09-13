// Library Imports
import React from "react";
import { Container } from "@material-ui/core";

// Styling
import styles from "src/styles/PageBody.module.scss";

// Type Definitions
interface PageBodyProps {
  // children: React.ReactNode;
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
