import styles from "./AccelerateYourGrowth.module.css";

const AccelerateYourGrowth = () => {
  return (
    <div className={styles.accelerateYourGrowth}>
      <div className={styles.frameParent}>
        <div className={styles.frameParent}>
          <div className={styles.accelerateYourGrowthHeading}>
            <b className={styles.accelerateYourGrowth1}>
              Accelerate Your Growth
            </b>
            <div className={styles.withOurVersatile}>
              with Our Versatile Technology Proficiency
            </div>
          </div>
          <div className={styles.frameGroup}>
            <button className={styles.groupWrapper}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.marketing}>Marketing</div>
              </div>
            </button>
            <button className={styles.groupContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupItem} />
                <div className={styles.technology}>Technology</div>
              </div>
            </button>
            <button className={styles.groupContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupItem} />
                <div className={styles.analytics}>Analytics</div>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <button className={styles.frameButton}>
            <img className={styles.groupIcon} alt="" src="/group-358.svg" />
          </button>
          <div className={styles.a31483e59ee069da94c581Parent}>
            <img
              className={styles.a31483e59ee069da94c581Icon}
              alt=""
              src="/629a31483e59ee069da94c58-1@2x.png"
            />
            <img
              className={styles.c471a6515b1e0ad75aa21Icon}
              alt=""
              src="/5841c471a6515b1e0ad75aa2-1@2x.png"
            />
            <img
              className={styles.hubspotLogo1Icon}
              alt=""
              src="/hubspotlogo-1@2x.png"
            />
            <img className={styles.images1Icon} alt="" src="/images-1@2x.png" />
            <img
              className={styles.mailchimpLogoHorizontalBlacIcon}
              alt=""
              src="/mailchimp-logohorizontal-black-1@2x.png"
            />
            <img
              className={styles.semrushLogo1Icon}
              alt=""
              src="/semrush-logo-1@2x.png"
            />
          </div>
          <button className={styles.frameButton}>
            <img className={styles.groupIcon} alt="" src="/group-359.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccelerateYourGrowth;
