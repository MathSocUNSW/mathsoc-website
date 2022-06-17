// Library Imports
import React from "react";

// Styling
import styles from "src/styles/WholePageBox.module.scss";
import BoxType from "src/components/BoxType";

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
    <div className={size}>
      <section className={styles.content}>{props.children}</section>
    </div>
  );
};

export default WholePageBox;
