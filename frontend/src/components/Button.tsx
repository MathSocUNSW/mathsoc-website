// Library Imports
import React from "react";
import Link from "next/link";

// Styling
import styles from "src/styles/button.module.scss";

interface buttonProps {
  text: string;
  link?: string;
  color?: string; // TODO: color tag?
}

const Button: React.FC<buttonProps> = ({ text, link }) => {
  return (
    <div className={styles.buttonContainer}>
      <Link href={link}>
        <a>
          <button className={styles.button}>{text}</button>
        </a>
      </Link>
    </div>
  );
};

export default Button;
