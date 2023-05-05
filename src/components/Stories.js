import styles from "./Stories.module.css";

const Stories = () => {
  return (
    <div className={styles.stories}>
      <div className={styles.frameParent}>
        <div className={styles.ourInsideStoriesParent}>
          <b className={styles.ourInsideStories}>Our Inside Stories</b>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <img className={styles.frameChild} alt="" src="/frame-1108.svg" />
              <div className={styles.parent}>
                <div className={styles.div}>
                  <img
                    className={styles.child}
                    alt=""
                    src="/rectangle-192@2x.png"
                  />
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
                <div className={styles.div}>
                  <img
                    className={styles.child}
                    alt=""
                    src="/rectangle-1921@2x.png"
                  />
                  <div className={styles.transformingFinancialServiceContainer}>
                    <p
                      className={styles.revolutionizingTraditionalBa}
                    >{`Transforming Financial Services: `}</p>
                    <p
                      className={styles.revolutionizingTraditionalBa}
                    >{`How Our Cashless Solution Improved `}</p>
                    <p className={styles.revolutionizingTraditionalBa}>
                      a Financial Institution's Operations
                    </p>
                  </div>
                </div>
                <div className={styles.div}>
                  <img
                    className={styles.child}
                    alt=""
                    src="/rectangle-1922@2x.png"
                  />
                  <div className={styles.boostingKidsEngagementContainer}>
                    <p
                      className={styles.revolutionizingTraditionalBa}
                    >{`Boosting Kids Engagement: `}</p>
                    <p
                      className={styles.revolutionizingTraditionalBa}
                    >{`How We Helped an FMCG Brand in `}</p>
                    <p
                      className={styles.revolutionizingTraditionalBa}
                    >{`Zambia Enhance Their Social Media `}</p>
                    <p className={styles.revolutionizingTraditionalBa}>
                      Channels
                    </p>
                  </div>
                </div>
                <div className={styles.div}>
                  <img
                    className={styles.child}
                    alt=""
                    src="/rectangle-1923@2x.png"
                  />
                  <div className={styles.boostingKidsEngagementContainer}>
                    <p
                      className={styles.revolutionizingTraditionalBa}
                    >{`How Shifting Focus to the Gifting `}</p>
                    <p
                      className={styles.revolutionizingTraditionalBa}
                    >{`Market Helped an Art Company `}</p>
                    <p
                      className={styles.revolutionizingTraditionalBa}
                    >{`Compete in a Saturated Painting `}</p>
                    <p className={styles.revolutionizingTraditionalBa}>Indus</p>
                  </div>
                </div>
              </div>
              <img className={styles.frameChild} alt="" src="/frame-357.svg" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Stories;
