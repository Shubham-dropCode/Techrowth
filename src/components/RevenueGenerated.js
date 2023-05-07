import styles from "./RevenueGenerated.module.css";
const RevenueGenerated = () => {
  return (
    <div className={styles.revenuegenerated}>
      {/* <div className={styles.cta}>
        <img className={styles.ctaChild} alt="" src="/rectangle-4029@2x.png" />
        <div className={styles.interestedInGettingInDisParent}>
          <div className={styles.interestedInGettingContainer}>
            <p className="col-8">
              Wondering if you could be a part of a success story?
              <br />
              Book a free consultation today and learn more!
            </p>
          </div>
          <button className={styles.buttonWrapper}>
            <div className={styles.button + "col-4"}>
              <button className={styles.buttonChild} />
              <div className={styles.bookAConsultation}>Contact Us</div>
            </div>
          </button>
        </div>
      </div> */}
      <div className={styles.revenueGeneratedThroughOurParent}>
        <b className={styles.revenueGeneratedThrough}>
          Revenue generated through our strategies
        </b>
        <div className={styles.frameParent}>
          <div className={styles.mnParent}>
            <div className={styles.mn}>11 Mn+</div>
            <div className={styles.overallLeadsGenerated}>
              Overall Leads generated
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.mn}>130+</div>
            <div className={styles.incrementInAverage}>
              increment in average followers
            </div>
          </div>
          <div className={styles.mnParent}>
            <div className={styles.mn}>80%</div>
            <div className={styles.overallLeadsGenerated}>
              increment in average likes
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mx-0 w-100">
        <div className="row border-3 p-4 w-100" style={{ backgroundColor: "#EFF3F6",borderRadius:"30px" }}>
          <div className="col-12">
            <div style={{fontSize:"18px"}}>
              Attract and retain customers, suppliers, and partners with
              Techrowth digital marketing. <br/> Boost revenue by
              <span className="h1" style={{fontWeight:"700",color:"#0076a2"}}> 17-25%.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueGenerated;
