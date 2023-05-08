import React, { useEffect } from "react";
// import styles from "../components/Hero.module.css";
import heroBg from "../assets/UIUX.jpg";
import RecentResult from "../components/RecentResult";
import Breadcrumbs from "../components/Breadcrumbs";
import InterestedDevelopement from "../components/InterestedDevelopment";
import ToolsSlider from "../components/ToolsSlider";
import ContactForm1 from "../components/ContactForm1";
import styles from "../components/InterestedDevelopment.module.css";

import TrustedByBrands from "../components/TrustedByBrands";
import Hero from "../components/Hero";

const UiUxInterface = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const HeroTitel = "Empowering your Online presence, Driving Actual Results";
  const HeroContent =
    "Join the Techrowth Revolution Experience Exceptional Results and elevate your business to new levels with our result-oriented strategy framework BISCCBOR!";
  const RecentText =
    "Interested in Getting In ? Discover how Techrowth can help grow your Business.";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />

      {/* <InterestedDevelopement /> */}
      <div className="container my-5">
        <div className="row">
          <div className={styles.frameParent}>
            <div className={styles.interestedInSoftwareDevelopParent}>
              <b className={styles.interestedInSoftware}>
                Interested in Software Development ?
              </b>
              <div
                className={styles.weOfferThe}
              >{`We offer the following Software Solutions `}</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.groupParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group-816.svg"
                  />
                  <div className={styles.eCommerceParent}>
                    <div className={styles.eCommerce}>E-commerce</div>
                    <div className={styles.ourTeamWorksContainer}>
                      <p className={styles.ourTeamWorks}>
                        Our team works closely with you to understand your
                        business needs and deliver customized e-commerce
                        solutions that drive sales and increase customer
                        loyalty.
                      </p>
                    </div>
                    <div className={styles.weHaveDevelopedContainer}>
                      <span
                        className={styles.weHaveDeveloped}
                      >{`We have developed more than `}</span>
                      <b className={styles.eCommercePortals}>
                        31 e-commerce portals.
                      </b>
                    </div>
                  </div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group-819.svg"
                  />
                  <div className={styles.mobileApplicationsParent}>
                    <div className={styles.mobileApplications}>
                      Mobile Applications
                    </div>
                    <div className={styles.weSpecializeInContainer}>
                      <p className={styles.ourTeamWorks}>
                        We specialize in delivering exceptional user experiences
                        for mobile users, helping you reach your target audience
                        and achieve your business goals.
                      </p>
                    </div>
                    <div className={styles.optimizedAndDevelopedContainer}>
                      <span
                        className={styles.weHaveDeveloped}
                      >{`Optimized and developed more than `}</span>
                      <b className={styles.eCommercePortals}>
                        172 mobile applications.
                      </b>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group-814.svg"
                  />
                  <div className={styles.cmsParent}>
                    <div className={styles.mobileApplications}>CMS</div>
                    <div className={styles.weSpecializeInContainer}>
                      <p className={styles.ourTeamWorks}>
                        Our expert team ensures that your website is up-to-date
                        and running smoothly, so you can focus on growing your
                        business.
                      </p>
                    </div>
                    <div className={styles.installedAndOptimizedContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span
                          className={styles.weHaveDeveloped}
                        >{`Installed and optimized over `}</span>
                        <b className={styles.websites}>144 CMS</b>
                        <span className={styles.platforms}> platforms.</span>
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
                    src="/group-817.svg"
                  />
                  <div className={styles.corporateWebsiteParent}>
                    <div className={styles.mobileApplications}>
                      Corporate Website
                    </div>
                    <div className={styles.weSpecializeInContainer}>
                      <p className={styles.ourTeamWorks}>
                        Our team is dedicated to delivering user-friendly and
                        efficient applications that help you achieve your
                        business goals.
                      </p>
                    </div>
                    <div className={styles.ourTeamHasContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span
                          className={styles.weHaveDeveloped}
                        >{`Our team has reworked and enhanced over `}</span>
                        <b className={styles.websites}>34 websites</b>
                        <span className={styles.platforms}>.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group-818.svg"
                  />
                  <div className={styles.webApplicationsParent}>
                    <div className={styles.mobileApplications}>
                      Web Applications
                    </div>
                    <div className={styles.weSpecializeInContainer}>
                      <p className={styles.ourTeamWorks}>
                        Our expert team ensures that your website is up-to-date
                        and running smoothly, so you can focus on growing your
                        business.
                      </p>
                    </div>
                    <div className={styles.weHaveDevelopedContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span
                          className={styles.weHaveDeveloped}
                        >{`Increased productivity and generated over `}</span>
                        <b className={styles.websites}>
                          $144 million in revenue.
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group-815.svg"
                  />
                  <div className={styles.cmsParent}>
                    <div className={styles.mobileApplications}>
                      Website Accessibility
                    </div>
                    <div className={styles.weSpecializeInContainer}>
                      <p className={styles.ourTeamWorks}>
                        Our team specializes in optimizing your website for all
                        users, including those with disabilities, to ensure that
                        your website is inclusive and accessible to everyone.
                      </p>
                      <p className={styles.ourTeamWorks}>&nbsp;</p>
                    </div>
                    <div className={styles.weHaveIncreasedContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span
                          className={styles.weHaveDeveloped}
                        >{`We have increased user engagement by `}</span>
                        <span className={styles.eCommercePortals}>
                          <b className={styles.b}>34%</b>
                          <span className={styles.span2}>.</span>
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
      <ToolsSlider />
      <ContactForm1 />

      <TrustedByBrands />
    </>
  );
};

export default UiUxInterface;