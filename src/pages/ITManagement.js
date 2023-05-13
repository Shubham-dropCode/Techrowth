import React from "react";
import Hero from "../components/Hero";
import RecentResult from "../components/RecentResult";
import Breadcrumbs from "../components/Breadcrumbs";
import styles from "../components/InterestedDevelopment.module.css";
import ITSlider from "../components/ToolsSliders/ITSlider";
import ContactUsBar from "../components/ContactUsBar";
import heroBg from "../assets/Itmanagementbgimg.jpg";
import ContactUsForm from "../components/ContactUsForm";
import TrustedByBrands from "../components/TrustedByBrands";

const ITManagement = () => {
  const HeroTitel =
    "Maximize the benefits your business can reap by using our IT support.";
  const HeroContent =
    "We will streamline your IT operations, optimize your tech investments, and ensure your technology infrastructure is always running smoothly. Focus on growing your business with a peaceful mind.";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />

      <RecentResult />
      <Breadcrumbs />
      <div className="container my-5">
        <div className="row">
          <div className={styles.frameParent}>
            <div className={styles.interestedInSoftwareDevelopParent}>
              <b className={styles.interestedInSoftware}>
                Interested in IT Management ?
              </b>
              <div className={styles.weOfferThe}>
                We offer the following Software Solutions
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group (2).png"
                  />
                  <div className={styles.eCommerceParent}>
                    <div className={styles.eCommerce}>Consulting</div>
                    <div className={styles.ourTeamWorksContainer}>
                      <p className={styles.ourTeamWorks}>
                        Increased efficiency, improved business processes,
                        enhanced decision-making, and reduced costs.
                      </p>
                    </div>
                    <div className={styles.weHaveDevelopedContainer}>
                      <span className={styles.weHaveDeveloped}>
                        Reduced Cost-To-Company
                      </span>
                      <b className={styles.eCommercePortals}> 34%</b>
                    </div>
                  </div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group111.png"
                  />
                  <div className={styles.mobileApplicationsParent}>
                    <div className={styles.eCommerce}>Tech Support</div>
                    <div className={styles.ourTeamWorksContainer}>
                      <p className={styles.ourTeamWorks}>
                        Decreased downtime and increased productivity through
                        the resolution of technical issues.
                      </p>
                    </div>
                    <div className={styles.optimizedAndDevelopedContainer}>
                      <span className={styles.weHaveDeveloped}>
                        Maintained Uptime at
                      </span>
                      <b className={styles.eCommercePortals}> 95%</b>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group (3).png"
                  />
                  <div className={styles.cmsParent}>
                    <div className={styles.eCommerce}>Cloud Services</div>
                    <div className={styles.ourTeamWorksContainer}>
                      <p className={styles.ourTeamWorks}>
                        Increased flexibility and scalability through the use of
                        cloud-based resources.
                      </p>
                    </div>
                    <div className={styles.installedAndOptimizedContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span className={styles.weHaveDeveloped}>
                          Scaling Cost Reduced by 13%
                        </span>
                        <b className={styles.websites}> 21%-34%.</b>
                        {/* <span className={styles.platforms}> platforms.</span> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group (4).png"
                  />
                  <div className={styles.corporateWebsiteParent}>
                    <div className={styles.eCommerce}>Infrastructure</div>
                    <div className={styles.ourTeamWorksContainer}>
                      <p className={styles.ourTeamWorks}>
                        Improved performance, scalability, and reliability of
                        the company's technology infrastructure.
                      </p>
                    </div>
                    <div className={styles.ourTeamHasContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span className={styles.weHaveDeveloped}>
                          Overhead Cost Reduced by
                        </span>
                        <b className={styles.websites}> $144 Mn</b>
                        <span className={styles.platforms}>.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group (6).png"
                  />
                  <div className={styles.webApplicationsParent}>
                    <div className={styles.eCommerce}>
                      Software as a Service
                    </div>
                    <div className={styles.ourTeamWorksContainer}>
                      <p className={styles.ourTeamWorks}>
                        Streamlined operations and increased productivity
                        through the use of personalized software.
                      </p>
                    </div>
                    <div className={styles.weHaveDevelopedContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span className={styles.weHaveDeveloped}>
                          Increased Revenue
                        </span>
                        <b className={styles.websites}> 21%</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group (5).png"
                  />
                  <div className={styles.cmsParent}>
                    <div className={styles.eCommerce}>Data Center Services</div>
                    <div className={styles.weSpecializeInContainer}>
                      <p className={styles.ourTeamWorks}>
                        Improved data management and protection through
                        efficient and secure data center operations.
                      </p>
                    </div>
                    <div className={styles.weHaveIncreasedContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span className={styles.weHaveDeveloped}>
                          Data Breach Avoided
                        </span>
                        <span className={styles.eCommercePortals}>
                          <b className={styles.b}> 144 times</b>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ITSlider/>
      <ContactUsBar
        content="Transform your true potential into your business reality! Discover how we can help you unlock new levels of IT management & security.
        "
        btnTxt="Contact Us"
      />
      <ContactUsForm />

      <TrustedByBrands />
    </>
  );
};

export default ITManagement;
