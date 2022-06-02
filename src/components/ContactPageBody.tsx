import React from "react";

// Styling
import styles from "src/styles/contactbody.module.scss";

interface ContactPageBodyProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key?: any;
}

const ContactPageBody: React.FC<ContactPageBodyProps> = ({ children }) => {
  return (
    <div className={styles.contactPageBody}>
      <section>{children}</section>
    </div>
  );
};

export default ContactPageBody;
