import React from "react";
import styles from "../Stories.module.css";

const Slide1 = () => {
  return (
    <div className={styles.div}>
      <img className={styles.child} alt="" src="/rectangle-192@2x.png" />
      <div className={styles.revolutionizingTraditionalBaContainer}>
        <p
          className={styles.revolutionizingTraditionalBa}
        >{`Revolutionizing Traditional Banking: `}</p>
        <p
          className={styles.revolutionizingTraditionalBa}
        >{`How Introducing Online Services `}</p>
        <p
          className={styles.revolutionizingTraditionalBa}
        >{`Transformed Customer Experience `}</p>
        <p className={styles.revolutionizingTraditionalBa}>
          for Banking Client
        </p>
      </div>
    </div>
  );
};

export default Slide1;
