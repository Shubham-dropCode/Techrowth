import styles from "./QuantifyingTheData.module.css";
import NumberCounter from 'number-counter';


const QuantifyingTheData = () => {
  return (
    <div className={styles.quantifyingTheData}>
      <div className={styles.quantifyingTheDataParent}>
        <b className={styles.quantifyingTheData1}>Quantifying the Data</b>
        <div className={styles.frameParent}>
          <div className={styles.weSetTheStandardForExcellParent}>
            <div className={styles.weSetTheContainer}>
              <p
                className={styles.weSetThe}
              >{`We set the standard for excellence, delivering impressive results and wowing `}</p>
              <p className={styles.weSetThe}>
                customers with exceptional customer service.
              </p>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
              <NumberCounter end={24} delay={1} className={styles.div} postFix="%"/>
                {/* <div className={styles.div}>24%</div> */}
                <div className={styles.revenueIncrement}>
                  <p className={styles.weSetThe}>Revenue</p>
                  <p className={styles.weSetThe}>Increment</p>
                </div>
              </div>
              <div className={styles.parent}>
              <NumberCounter end={11} delay={1} className={styles.div1} postFix="%"/>
                {/* <div className={styles.div1}>11%</div> */}
                <button className={styles.incrementSocialMediaContainer}>
                  <p className={styles.weSetThe}>Increment Social</p>
                  <p className={styles.weSetThe}>Media Interaction</p>
                </button>
              </div>
              <div className={styles.parent}>
              <NumberCounter end={22} delay={1} className={styles.div2} postFix="%"/>

                {/* <div className={styles.div2}>22%</div> */}
                <div className={styles.conversionRate}>
                  <p className={styles.weSetThe}>Conversion</p>
                  <p className={styles.weSetThe}>Rate</p>
                </div>
              </div>
              <div className={styles.parent}>
              <NumberCounter end={36} delay={1} className={styles.div1} postFix="%"/>

                {/* <div className={styles.div3}>36%</div> */}
                <div className={styles.customerRetention}>
                  <p className={styles.weSetThe}>Customer</p>
                  <p className={styles.weSetThe}>Retention</p>
                </div>
              </div>
            </div>
            <div className={styles.letsAccomplishGreat}>
              Let's accomplish great things together
            </div>
          </div>
          <button className={styles.getInTouchWrapper}>
            <div className={styles.getInTouch}>Get In Touch</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantifyingTheData;
