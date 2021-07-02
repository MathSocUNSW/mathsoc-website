import React from "react";

import styles from "src/styles/ContainerWrap.module.scss";
import { Container } from "@material-ui/core";

const ContainerWrap: React.FC = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <Container>{children}</Container>
    </div>
  );
};

export default ContainerWrap;
