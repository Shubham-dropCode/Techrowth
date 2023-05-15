import styles from "./DigitalMarekting.module.css";
const DigitalMarektingComponent = () => {
  return (
    <div className={styles.digitalMarekting}>
      <div className={styles.trafficAndRevenueGeneratedParent}>
        <b className={styles.trafficAndRevenueContainer}>
          <p className={styles.trafficAndRevenue + "mb-5"}>
            Traffic and Revenue generated through our
         <br/>
            Digital Marketing Services
          </p>
        </b>
        <div className={styles.groupParent}>
          <div className={styles.percentageBoxParent}>
            <div className={styles.percentageBox}>
              <div className={styles.parent}>
                <b className={styles.b}>{`170% `}</b>
                <div className={styles.increaseInVertical}>
                  Increase in Vertical Revenue
                </div>
              </div>
            </div>
            <img className={styles.groupChild} alt="" src="/group-358 1 (1).svg" />
          </div>
          <div className={styles.percentageBoxParent}>
            <div className={styles.percentageBox}>
              <div className={styles.parent}>
                <b className={styles.b1}>{`86% `}</b>
                <div className={styles.increaseInOrganic}>
                  Increase in Organic Traffic
                </div>
              </div>
            </div>
            <img className={styles.groupItem} alt="" src="/group-358 1 (2).svg" />
          </div>
          <div className={styles.percentageBoxParent}>
            <div className={styles.percentageBox}>
              <div className={styles.parent}>
                <b className={styles.b2}>{`120% `}</b>
                <div className={styles.rateOfPpc}>
                  Rate of PPC Conversion Increased
                </div>
              </div>
            </div>
            <img className={styles.groupInner} alt="" src="/group-358 1 (3).svg" />
          </div>
          <div className={styles.percentageBoxParent}>
            <div className={styles.percentageBox}>
              <div className={styles.parent}>
                <b className={styles.b3}>{`48% `}</b>
                <div className={styles.increaseInOrganic}>
                  Improvement in cost per lead
                </div>
              </div>
            </div>
            <img className={styles.groupIcon} alt="" src="/group-358 1 (4).svg" />
          </div>
        </div>
      </div>
      
      <div className={styles.problemsWeHaveSolvedParent}>
        <div className={styles.problemsWeHave}>Problems We have Solved</div>
        <div className="container">

        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.groupContainer}>
              <img className={styles.frameChild} alt="" src="/group-358 1 (5).svg" />
              <div
                className={styles.businessEnquiriesAnd}
              >{`Business Enquiries and Branding Makeover `}</div>
            </div>
            <div className={styles.groupContainer}>
              <img className={styles.frameChild} alt="" src="/group-358 1 (6).svg" />
              <div className={styles.businessEnquiriesAnd}>
                Cross-Sell or Up-Sell products
              </div>
            </div>
            <div className={styles.groupContainer}>
              <img className={styles.frameChild} alt="" src="/group-358 1 (7).svg" />
              <div className={styles.businessEnquiriesAnd}>
                Reactivate Old Accounts
              </div>
            </div>
            <div className={styles.groupContainer}>
              <img className={styles.frameChild} alt="" src="/group-358 1 (8).svg" />
              <div className={styles.businessEnquiriesAnd}>
                Compelling Content
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.groupParent4}>
              <img className={styles.frameChild} alt="" src="/group-358 1 (9).svg" />
              <div className={styles.businessEnquiriesAnd}>
                Increase downloads or E-commerce sales
              </div>
            </div>
            <div className={styles.groupParent4}>
              <img className={styles.frameChild} alt="" src="/group-358 1 (10).svg" />
              <div className={styles.businessEnquiriesAnd}>
                Remarketing Campaigns
              </div>
            </div>
            <div className={styles.groupParent4}>
              <img className={styles.frameChild} alt="" src="/group-358 1 (11).svg" />
              <div className={styles.businessEnquiriesAnd}>
                Establish Business Voice
              </div>
            </div>
            <div className={styles.groupParent4}>
              <img className={styles.frameChild} alt="" src="/group-358 1 (12).svg" />
              <div className={styles.businessEnquiriesAnd}>
                Health Social Media Image
              </div>
            </div>
          </div>
        </div>
          </div>
      </div>
      <div className={styles.cta}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-4029@2x.png"
          />
          <div className={styles.facingASimilarProblemTalkParent}>
            <div className={styles.facingASimilarContainer}>
              <p className={styles.trafficAndRevenue}>
                Facing a similar problem?
              </p>
              <p className={styles.trafficAndRevenue}>
                Talk to our experts and get a personalized solution.
              </p>
            </div>
            <button className={styles.contactUsWrapper}>
              <div className={styles.contactUs}>Contact Us</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarektingComponent;
