import styles from "./NumberCounterSocial.module.css";
import NumberCounter from "number-counter";

const NumberCounterSocial = () => {
  return (
    <div className={styles.numberCounter}>
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <div className={styles.stBlockContentParent}>
            <div className={styles.stBlockContent}>
              <div className={styles.parent}>
                <NumberCounter
                  end={21}
                  delay={1}
                  className={styles.div1}
                  postFix="%"
                />

                {/* <div className={styles.div}>21%</div> */}
                <div className={styles.increasedCustomerEngagement}>
                  Increased Customer Engagement
                </div>
              </div>
            </div>
            <img className={styles.groupChild} alt="" src="/group-1029.svg" />
          </div>
          <div className={styles.stBlockContentParent}>
            <div className={styles.stBlockContent}>
              <div className={styles.group}>
                <NumberCounter
                  end={34}
                  delay={1}
                  className={styles.div11}
                  postFix="%"
                />
                {/* <div className={styles.div1}>34%</div> */}
                <div className={styles.visitsIncrease}>Visits Increase</div>
              </div>
            </div>
            <img className={styles.groupItem} alt="" src="/group-1015.svg" />
          </div>
          <div className={styles.rdBlockContentParent}>
            <div className={styles.rdBlockContent}>
              <NumberCounter
                end={15}
                delay={1}
                className={styles.div2}
                postFix="%"
              />

              {/* <div className={styles.div2}>15%</div> */}
              <div className={styles.increasedCustomerInteraction}>
                Increased Customer Interaction
              </div>
            </div>
            <img className={styles.groupInner} alt="" src="/group-1016.svg" />
          </div>
          <div className={styles.thBlockContentParent}>
            <div className={styles.rdBlockContent}>
              <NumberCounter
                end={12}
                delay={1}
                className={styles.div3}
                postFix="%"
              />

              {/* <div className={styles.div3}>12%</div> */}
              <div className={styles.customerConversionIncreased}>
                Customer Conversion Increased
              </div>
            </div>
            <img className={styles.groupInner} alt="" src="/group-1017.svg" />
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.stBlockContentGroup}>
            <div className={styles.stBlockContent1}>
              {/* <NumberCounter end={34} delay={1} className={styles.div4} postFix="%"/> */}

              <div className={styles.div4}>21% ~ 31%</div>
              <div className={styles.increasedSocialMedia}>
                Increased Social Media Matrices
              </div>
            </div>
            <img className={styles.groupChild1} alt="" src="/group-1019.svg" />
          </div>
          <div className={styles.ndBlockContentGroup}>
            <div className={styles.ndBlockContent1}>
              <NumberCounter
                end={89}
                delay={1}
                className={styles.div6}
                postFix="+"
              />

              {/* <div className={styles.div6}>89+</div> */}
              <div className={styles.lastYearAddition}>
                Last Year Addition in downloads
              </div>
            </div>
            <img className={styles.groupInner} alt="" src="/group-1020.svg" />
          </div>
          <div className={styles.rdBlockContentGroup}>
            <div className={styles.ndBlockContent1}>
              <NumberCounter
                end={21}
                delay={1}
                className={styles.div6}
                postFix="%"
              />

              {/* <div className={styles.div6}>21%</div> */}
              <div className={styles.increasedSocialMedia1}>
                Increased Social Media Conversions
              </div>
            </div>
            <img className={styles.groupChild3} alt="" src="/group-1021.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberCounterSocial;
