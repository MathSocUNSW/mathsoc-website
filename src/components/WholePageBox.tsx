// Library Imports
import React from "react";

// Styling
import styles from "src/styles/WholePageBox.module.scss";
import BoxType from "src/components/BoxType";
const { motion } = require("framer-motion"); //eslint-disable-line

interface WholePageBoxProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  key?: any;
  size?: BoxType;
}

const WholePageBox: React.FC<WholePageBoxProps> = (props) => {
  let size: any;
  if (props.size == undefined) {
    size = styles.fullBoxBody;
  } else if (props.size == BoxType.HALF_WIDTH) {
    size = styles.halfBoxBody;
  } else if (props.size == BoxType.FULL_WIDTH) {
    size = styles.fullBoxBody;
  }
  return (
    <motion.div
      className={size}
      transition={{
        duration: 1,
        type: "easeOut"
      }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <section className={styles.content}>{props.children}</section>
    </motion.div>
  );
};

export default WholePageBox;
