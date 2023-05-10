import styles from "./BusinessAnalystics.module.css";

const BusinessAnalystics = ({ show, onDisplay, titleDiplay }) => {
  return (
    <div className={styles.businessAnalystics}>
      <div className={styles.frameParent}>
        {titleDiplay && (
          <div className={styles.businessAnalyticsParent}>
            <div className={styles.businessAnalytics}>Business Analytics </div>
            <div className={styles.unlockThePowerContainer}>
              <p className={styles.unlockThePower}>
                Unlock the power of data - elevate your performance
              </p>
              <p className={styles.unlockThePower}>
                {" "}
                with our Analytics services 
              </p>
            </div>
          </div>
        )}
        {onDisplay && (
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-572.svg"
                />
                <div className={styles.analyticsInsightsContainer}>
                  <p className={styles.unlockThePower}>Analytics</p>
                  <p className={styles.unlockThePower}>{`& Insights`}</p>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-573.svg"
                />
                <div className={styles.analyticsInsightsContainer}>
                  <p className={styles.unlockThePower}>Customized</p>
                  <p className={styles.unlockThePower}>Dashboards</p>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/SocialMedaiAnalytics.png"
                />
                <div className={styles.analyticsInsightsContainer}>
                  <p className={styles.unlockThePower}>Social media</p>
                  <p className={styles.unlockThePower}>Analytics</p>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-574.svg"
                />
                <div className={styles.analyticsInsightsContainer}>
                  <p className={styles.unlockThePower}>Mobile</p>
                  <p className={styles.unlockThePower}>Analytics </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {show && (
        <div>
          <div className={styles.businessAnalysticsInner}>
            <div className={styles.frameParent1}>
              <div className={styles.parent}>
                <div className={styles.div}>
                  <div className={styles.div1}>24%</div>
                  <div className={styles.revenueIncrement}>
                    <p className={styles.unlockThePower}>Revenue</p>
                    <p className={styles.unlockThePower}>Increment</p>
                  </div>
                </div>
                <div className={styles.div2}>
                  <div className={styles.div1}>987</div>
                  <div className={styles.seoAudits}>SEO Audits</div>
                </div>
                <div className={styles.div4}>
                  <div className={styles.div1}>22%</div>
                  <div className={styles.seoAudits}>Conversion Rate</div>
                </div>
                <div className={styles.div6}>
                  <div className={styles.div1}>172</div>
                  <div className={styles.seoAudits}>Mobile Apps</div>
                </div>
              </div>
              <div className={styles.group}>
                <div className={styles.div8}>
                  <div className={styles.div9}>415</div>
                  <div className={styles.websitesMade}>Websites Made</div>
                </div>
                <div className={styles.div10}>
                  <div className={styles.div11}>36%</div>
                  <div className={styles.customerRetention}>
                    Customer Retention
                  </div>
                </div>
                <div className={styles.div12}>
                  <div className={styles.div13}>11%</div>
                  <div className={styles.socialMediaInteractionContainer}>
                    <p className={styles.unlockThePower}>
                      Social Media Interaction
                    </p>
                    <p className={styles.unlockThePower}>Increment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.businessAnalysticsChild}>
            <div className={styles.instanceParent}>
              <div className={styles.rectangleWrapper}>
                <img
                  className={styles.instanceChild}
                  alt=""
                  src="/rectangle-40291@2x.png"
                />
              </div>

              <div className={styles.wonderingIfYouCouldBeAPaParent}>
                <div className={styles.wonderingIfYouContainer}>
                  <p className={styles.unlockThePower}>
                    Wondering if you could be a part of a success story?
                  </p>
                  <p className={styles.unlockThePower}>
                    Book a free consultation today and learn more!
                  </p>
                </div>
                <button className={styles.contactUsWrapper} autoFocus>
                  <div className={styles.contactUs}>Contact Us</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessAnalystics;
