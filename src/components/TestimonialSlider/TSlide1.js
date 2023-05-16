import React from "react";
import styles from "../Stories.module.css";


const TSlide1 = () => {
  return (
    <div className={styles.div4}>
      <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
      <div className={styles.weHaveBeenUsingTechrowthFParent}>
        <div className={styles.weHaveBeenContainer}>
          <p
            className={styles.revolutionizingTraditionalBa}
          >{`"We have been using Techrowth for our Digital Marketing & Digital Assets development needs; it has been completely satisfied with their product capabilities, services, and support.We are happy to recommend Techrowth Private Limited, formerly Proxy Digital Solutions and services: If you have any questions, please feel free to contact us."`}</p>
        </div>
        <img className={styles.groupIcon} alt="" src="/group2.svg" />
      </div>
      <div className={styles.rectangleDiv} />
    </div>
  );
};

export default TSlide1;
