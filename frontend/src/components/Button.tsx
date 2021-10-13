// Library Imports
import React from "react";

// Styling
import styles from "src/styles/button.module.scss";

interface buttonProps {
  text: string;
  link: string;
  color?: string; // TODO: color tag?
}

const Button: React.FC<buttonProps> = ({ text, link }) => {
  return (
    <div className={styles.buttonContainer}>
      <a href={link}>
        <button className={styles.button}>{text}</button>
      </a>
    </div>
  );
};

export default Button;
