import React from "react";

// Styling
import styles from "src/styles/contactpagebox.module.scss";

interface ContactPageBoxProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key?: any;
}

const ContactPageBox: React.FC<ContactPageBoxProps> = ({ children }) => {
  return (
    <div className={styles.cardBackground}>
      <section className={styles.content}>{children}</section>
    </div>
  );
};

export default ContactPageBox;
