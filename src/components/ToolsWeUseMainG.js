import styles from "./ToolsWeUseMainG.module.css";
const ToolsWeUseMainG = () => {
  return (
    <div className={styles.toolsweusemain}>
      <div className={styles.toolsweuse}>
        <div className={styles.toolsWeUseParent}>
          <b className={styles.toolsWeUse}>Tools we use</b>
          <div className={styles.digitalSolutionsTools}>
            Digital Solutions Tools for a Streamlined Journey
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.designParent}>
            <div className={styles.design}>{`Design `}</div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-374@2x.png"
                />
                <div className={styles.photoshop}>Photoshop</div>
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-377@2x.png"
                />
                <div className={styles.photoshop}>Canva</div>
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-375@2x.png"
                />
                <div className={styles.photoshop}>Figma</div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-379@2x.png"
                />
                <div className={styles.photoshop}>Corel Draw</div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameChild1} />
                </div>
                <div className={styles.photoshop}>Illustrator</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.editingParent}>
              <div className={styles.editing}>{`Editing `}</div>
              <div className={styles.frameParent5}>
                <div className={styles.frameParent6}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-387@2x.png"
                  />
                  <div className={styles.adobePremierProWrapper}>
                    <div className={styles.adobePremierPro}>
                      Adobe Premier Pro
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent6}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-388@2x.png"
                  />
                  <div className={styles.adobeAfterEffects}>
                    Adobe After Effects
                  </div>
                </div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.frameParent6}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-389@2x.png"
                  />
                  <div className={styles.photoshop}>Cap Cut</div>
                </div>
                <div className={styles.frameParent6}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-390@2x.png"
                  />
                  <div className={styles.photoshop}>Davinci Resolve</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsWeUseMainG;
