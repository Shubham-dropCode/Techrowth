import styles from "./AdvantageOfTechrowth.module.css";
const AdvantageOfTechrowth = () => {
  return (
    <div className={styles.secondPageIntent}>
      <div className="container py-5">
      <b className={styles.advantageOfTechrowth}>Advantage of Techrowth</b>
      <div className={styles.weExploreDifferentContainer +" my-4"}>
        <p className={styles.weExploreDifferent}>
          We explore different digital marketing avenues to find customers,
          suppliers, and partners that help generate leads and conversions.
        </p>
      </div>
      <div className={styles.secondPageIntentInner +" my-4"}>
        <div className={styles.frameParent }>
          <div className={styles.parent}>
            <div className={styles.div}>34%</div>
            <div className={styles.incrementInGross}>
              Increment in Gross Revenue
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>21%</div>
            <div className={styles.incrementInSocial}>
              Increment in Social Media Interaction
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>9%</div>
            <div className={styles.incrementInSocial}>
              Increment in Conversion Rate
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>36%</div>
            <div className={styles.incrementInSocial}>
              Increment in Customer Retension
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inTheRealmContainer}>
        <p className={styles.weExploreDifferent}>
          In the realm of digital marketing, we at Techrowth strive for
          excellence, producing leads and elevating conversions.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AdvantageOfTechrowth;
