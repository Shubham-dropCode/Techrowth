import React from 'react'
import styles from "../ToolsSlider.module.css";


const ITSlider = () => {
  return (
    <div className="container mb-5">
      <div className={styles.interestedinsoftwaredevelopmenInner}>
        <div className={styles.frameParent}>
          <div className={styles.toolsParent}>
            <b className={styles.tools}>Tools</b>
            <div
              className={styles.weAreProficient}
            >We are proficient in</div>
          </div>
          <div className={styles.groupParent}>
            <img className={styles.frameChild} alt="" src="/group-358.svg" />
            <img className={styles.frameItem} alt="" src="/toolsIt (1).png" />
            <img className={styles.frameItem} alt="" src="/toolsIt (2).png" />
            <img className={styles.frameItem} alt="" src="/toolsIt (3).png" />
            <img className={styles.frameItem} alt="" src="/toolsIt (4).png" />
            <img className={styles.frameItem} alt="" src="/toolsIt (5).png" />
            <img className={styles.frameItem} alt="" src="/toolsIt (6).png" />
            <img className={styles.frameChild} alt="" src="/group-359.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ITSlider