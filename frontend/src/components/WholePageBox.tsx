import React from "react";

import styles from "src/styles/WholePageBox.module.scss";

interface WholePageBoxProps {
  children: React.ReactNode;
  key?: any;
}

const WholePageBox: React.FC<WholePageBoxProps> = ({ children }) => {
  return (
    <div className={styles.cardBackground}>
      <section className={styles.content}>{children}</section>
    </div>
  );
};

export default WholePageBox;
