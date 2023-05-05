import styles from "./BoostingYourBottomLine.module.css";

const BoostingYourBottomLine = () => {
  return (
    <div className={styles.boostingYourBottomLine}>
      <div className={styles.boostingYourBottomLineInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.boostingYourBottomLineParent}>
              <b className={styles.boostingYourBottom}>
                Boosting Your Bottom Line
              </b>
              <div className={styles.ourRevenueDriving}>
                Our Revenue Driving Tactics
              </div>
            </div>
            <div className={styles.areYouSeekingContainer}>
              <p
                className={styles.areYouSeeking}
              >{`Are you seeking to enhance your business position? `}</p>
              <p
                className={styles.techrowthOffersA}
              >{`Techrowth offers a comprehensive range of services to attract, engage, and convert potential customers. `}</p>
              <p className={styles.techrowthOffersA}>
                We strive to integrate our services with the goals of your
                business through a coordinated process
              </p>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.parent}>
              <div className={styles.div}>
                <div className={styles.child} />
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.text}>
                  <div className={styles.driveWebsiteTraffic}>
                    Drive Website Traffic
                  </div>
                  <div className={styles.seoServicesEcommerceContainer}>
                    <ul className={styles.seoServicesEcommerceService}>
                      <li className={styles.seoServices}>SEO Services</li>
                      <li className={styles.seoServices}>Ecommerce Services</li>
                      <li className={styles.seoServices}>Lead Generation</li>
                      <li>Content Marketing Services</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.child} />
                <img className={styles.icon} alt="" src="/icon1.svg" />
                <div className={styles.text1}>
                  <div className={styles.createManageContainer}>
                    <p
                      className={styles.createManage}
                    >{`Create & manage powerful `}</p>
                    <p className={styles.createManage}>{`ad campaigns `}</p>
                  </div>
                  <div className={styles.ppcManagementServicesContainer}>
                    <ul className={styles.seoServicesEcommerceService}>
                      <li className={styles.seoServices}>
                        PPC Management Services
                      </li>
                      <li className={styles.seoServices}>
                        Social Advertising Services
                      </li>
                      <li>Programmatic Advertising Services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>
                <div className={styles.child} />
                <img className={styles.icon} alt="" src="/icon2.svg" />
                <div className={styles.text2}>
                  <div className={styles.driveWebsiteTraffic}>
                    <p
                      className={styles.createManage}
                    >{`Improve brand messaging `}</p>
                    <p className={styles.createManage}>and conversion</p>
                  </div>
                  <div className={styles.ppcManagementServicesContainer}>
                    <ul className={styles.seoServicesEcommerceService}>
                      <li className={styles.seoServices}>
                        Website Design Services
                      </li>
                      <li className={styles.seoServices}>
                        Website Accessibility
                      </li>
                      <li
                        className={styles.seoServices}
                      >{`Landing Pages & Funnels`}</li>
                      <li>UI/UX Website</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.child} />
                <img className={styles.icon} alt="" src="/icon3.svg" />
                <div className={styles.text3}>
                  <div className={styles.createManageContainer}>
                    <p
                      className={styles.createManage}
                    >{`Collect, analyze and deploy `}</p>
                    <p className={styles.createManage}>marketing data</p>
                  </div>
                  <div className={styles.ppcManagementServicesContainer}>
                    <ul className={styles.seoServicesEcommerceService}>
                      <li className={styles.seoServices}>
                        Analytics and Insights
                      </li>
                      <li className={styles.seoServices}>
                        Social Media Analytics
                      </li>
                      <li className={styles.seoServices}>Zoho Analytics</li>
                      <li>Power BI</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostingYourBottomLine;
