import React from "react";
import styles from "../Stories.module.css";


const TSlide3 = () => {
  return (
    <div className={styles.div4}>
      <img
        className={styles.logo1Icon}
        alt=""
        src="/abhayahasta-logo-1@2x.png"
      />
      <div className={styles.weHaveBeenUsingTechrowthFParent}>
        <div className={styles.weHaveBeenContainer}>
          <p className={styles.revolutionizingTraditionalBa}>
            "We recently got our social media marketing services which were
            impressive. Not only did they understand our requirements quickly,
            but they also came up with a few suggestions from their end. So the
            design is refreshing and what my brand needed at this point in
            time."
          </p>
        </div>
        <img className={styles.groupIcon} alt="" src="/group2.svg" />
      </div>
      <div className={styles.rectangleDiv} />
    </div>
  );
};

export default TSlide3;
