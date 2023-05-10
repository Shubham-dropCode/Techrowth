import styles from "./IndustiresWorkedWIth.module.css";
const IndustiresWorkedWIth = () => {
  return (
    <div className={styles.industiresWorkedWith}>
      <div className={styles.industriesWeveWorkedWithParent}>
        <div className={styles.industriesWeveWorked}>
          Industries we’ve worked with
        </div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.groupContainer}>
              <img className={styles.frameChild} alt="" src="/group-556.svg" />
              <div className={styles.automotive}>Automotive</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
            </div>
            <div className={styles.frameDiv}>
              <img className={styles.frameChild} alt="" src="/group-557.svg" />
              <div className={styles.automotive}>Banking</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
            </div>
            <div className={styles.groupParent2}>
              <img className={styles.frameChild} alt="" src="/group-558.svg" />
              <div className={styles.automotive}>Financial</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
            </div>
            <div className={styles.groupParent4}>
              <img className={styles.frameChild} alt="" src="/group-559.svg" />
              <div className={styles.automotive}>Healthcare</div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent}>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild1} />
              <div className={styles.frameChild2} />
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/Realstates.png" />
              <div className={styles.automotive}>Real Estate</div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleGroup}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
              </div>
              <div className={styles.groupParent7}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-774.svg"
                />
                <div className={styles.manufacturing}>Manufacturing</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild1} />
              <div className={styles.frameChild2} />
            </div>
            <div className={styles.groupGroup}>
              <img className={styles.frameChild} alt="" src="/group (2).svg" />
              <div className={styles.retail}>Retail</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
            </div>
            <div className={styles.groupParent9}>
              <img className={styles.frameChild} alt="" src="/group-568.svg" />
              <div className={styles.travel}>Travel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustiresWorkedWIth;
