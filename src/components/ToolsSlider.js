import styles from "./ToolsSlider.module.css";
const ToolsSlider = () => {
  return (
    <div className="container">
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
            <img className={styles.frameItem} alt="" src="/frame-846@2x.png" />
            <img className={styles.frameItem} alt="" src="/frame-847@2x.png" />
            <img className={styles.frameItem} alt="" src="/frame-848@2x.png" />
            <img className={styles.frameItem} alt="" src="/frame-849@2x.png" />
            <img className={styles.frameItem} alt="" src="/frame-1029@2x.png" />
            <img className={styles.frameItem} alt="" src="/frame-1030@2x.png" />
            <img className={styles.frameChild} alt="" src="/group-359.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSlider;
