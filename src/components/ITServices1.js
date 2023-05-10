import styles from "./ITServices1.module.css";

const ITServices1 = () => {
  return (
    <div className="container">

    
    <div className={styles.itServices}>
      <div className={styles.frameParent}>
        <div className={styles.itServicesParent}>
          <div className={styles.development}>IT Services</div>
          <div className={styles.letOurExpertContainer}>
            <p
              className={styles.letOurExpert}
            >{`Let our expert IT services team craft innovative solutions to meet your `}</p>
            <p className={styles.letOurExpert}>
              business and software needs for a successful future.
            </p>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.developmentParent}>
                <div className={styles.development}>Development</div>
                <div className={styles.cmsDevelopmentsupportWebsitContainer}>
                  <ol className={styles.cmsDevelopmentsupportWebsit}>
                    <li className={styles.cmsDevelopmentsupport}>
                      CMS Development/Support
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Website Development
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Improving Website Accessibility
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Software Development
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Ecommerce Software
                    </li>
                    <li>Mobile Application development</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.uiuxInteractiveParent}>
                <div
                  className={styles.development}
                >{`UI/UX & Interactive`}</div>
                <div className={styles.cmsDevelopmentsupportWebsitContainer}>
                  <ol className={styles.cmsDevelopmentsupportWebsit}>
                    <li className={styles.cmsDevelopmentsupport}>
                      Website Design
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Website Redesign
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      User Experience Testing
                    </li>
                    <li
                      className={styles.cmsDevelopmentsupport}
                    >{`Landing Page & Funnelling`}</li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Conversion Rate Optimization
                    </li>
                    <li>Rapid Web Design</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.itManagementParent}>
                <div className={styles.itManagement}>IT Management</div>
                <div className={styles.techSupportEndContainer}>
                  <ol className={styles.cmsDevelopmentsupportWebsit}>
                    <li className={styles.cmsDevelopmentsupport}>
                      Tech Support
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      End user IT Services
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Data Center Services
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>Consulting</li>
                    <li>Infrastructure</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper2}>
              <div className={styles.integrationsParent}>
                <div className={styles.development}>Integrations</div>
                <div className={styles.cmsDevelopmentsupportWebsitContainer}>
                  <ol className={styles.cmsDevelopmentsupportWebsit}>
                    <li className={styles.cmsDevelopmentsupport}>
                      New Software Integration.
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Chat-Bot Integration
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Analytics Software Integration
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      CRM Installation
                    </li>
                    <li>E-commerce Section Integration on Websites</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.qualityTestingParent}>
                <div className={styles.development}>Quality Testing</div>
                <div className={styles.cmsDevelopmentsupportWebsitContainer}>
                  <ol className={styles.cmsDevelopmentsupportWebsit}>
                    <li className={styles.cmsDevelopmentsupport}>
                      Functional Testing
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Performance Testing
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Usability Testing
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Security Testing
                    </li>
                    <li className={styles.cmsDevelopmentsupport}>
                      Compatibility Testing
                    </li>
                    <li>Regression Testing</li>
                  </ol>
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

export default ITServices1;
