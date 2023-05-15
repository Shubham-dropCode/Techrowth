import React, { useEffect, useState } from "react";
// import styles from "../components/Hero.module.css";
import heroBg from "../assets/UIUX.jpg";

import RecentResult from "../components/RecentResult";
import Breadcrumbs from "../components/Breadcrumbs";
import InterestedDevelopement from "../components/InterestedDevelopment";
import ToolsSlider from "../components/ToolsSlider";
// import ContactForm1 from "../components/ContactForm1";
import ContactUsForm from "../components/ContactUsForm";
import styles from "../components/InterestedDevelopment.module.css";
import TrustedByBrands from "../components/TrustedByBrands";
import Hero from "../components/Hero";
import ContactUsBar from "../components/ContactUsBar";

const UiUxInterface = () => {
  const [breadcrumb, setBreadcrumb] = useState([]);
  useEffect(() => {
    setBreadcrumb([
      { name: "Home >", path: "/" },
      { name: "IT Main >", path: "/ITMain" },
      { name: "UI/UX Interactive", path: "/UiUxInterface" },
    ]);
  }, []);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const HeroTitel = "Leave your mark through an interactive User Interface!";
  const HeroContent =
    "Transform your online business presence with our UI/UX expertise. Our team of experts fabricate visually stunning and user-friendly interfaces that captivate your customers' attention and keep them engaged.";
  const RecentText =
    "Interested in Getting In ? Discover how Techrowth can help grow your Business.";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />

      <RecentResult />
      <Breadcrumbs breadcrumb={breadcrumb} />
      <div className="container my-5">
        <div className="row">
          <div className={styles.frameParent}>
            <div className={styles.interestedInSoftwareDevelopParent}>
              <b className={styles.interestedInSoftware}>
                Interested in UI/UX Design ?
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
                    src="/frame (1).png"
                  />
                  <div className={styles.eCommerceParent}>
                    <div className={styles.eCommerce}>UI/UX Website Design</div>
                    <div className={styles.ourTeamWorksContainer}>
                      <p className={styles.ourTeamWorks}>
                        We understand that a well-designed website can
                        significantly improve customer experience and drive
                        business growth.
                      </p>
                    </div>
                    <div className={styles.weHaveDevelopedContainer}>
                      <span className={styles.weHaveDeveloped}>
                        Our team has designed over
                      </span>
                      <b className={styles.eCommercePortals}> 440 websites.</b>
                    </div>
                  </div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame (6).png"
                  />
                  <div className={styles.mobileApplicationsParent}>
                    <div className={styles.mobileApplications}>
                      User Experience Testing
                    </div>
                    <div className={styles.weSpecializeInContainer}>
                      <p className={styles.ourTeamWorks}>
                        Our team uses cutting-edge technology and best practices
                        to identify and resolve user experience issues, helping
                        companies save money.
                      </p>
                    </div>
                    <div className={styles.optimizedAndDevelopedContainer}>
                      <span className={styles.weHaveDeveloped}>
                        Reduced overhead costs to companies by an average of{" "}
                      </span>
                      <b className={styles.eCommercePortals}>21%.</b>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame (5).png"
                  />
                  <div className={styles.cmsParent}>
                    <div className={styles.mobileApplications}>
                      Conversion Rate Optimization
                    </div>
                    <div className={styles.weSpecializeInContainer}>
                      <p className={styles.ourTeamWorks}>
                        Our team uses data-driven strategies to optimize
                        websites and increase conversions, helping our clients
                        achieve their business objectives.
                      </p>
                    </div>
                    <div className={styles.installedAndOptimizedContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span className={styles.weHaveDeveloped}>
                          Increased revenue for our clients by{" "}
                        </span>
                        <b className={styles.websites}>21%-34%.</b>
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
                    src="/frame (4).png"
                  />
                  <div className={styles.corporateWebsiteParent}>
                    <div className={styles.mobileApplications}>
                      UI/UX Website Redesign
                    </div>
                    <div className={styles.weSpecializeInContainer}>
                      <p className={styles.ourTeamWorks}>
                      Our team specializes in redesigning websites to provide a smoother customer interface that drives engagement and conversions.
                      </p>
                    </div>
                    <div className={styles.ourTeamHasContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span
                          className={styles.weHaveDeveloped}
                        >Helped our clients increase revenue by </span>
                        <b className={styles.websites}>7%-13%</b>
                        <span className={styles.platforms}>.</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame (3).png"
                  />
                  <div className={styles.webApplicationsParent}>
                    <div className={styles.mobileApplications}>
                    Landing Pages & Funnels                    </div>
                    <div className={styles.weSpecializeInContainer}>
                      <p className={styles.ourTeamWorks}>
                      Our team creates landing pages and funnels that are optimized for conversions, helping our clients achieve their marketing goals.
                      </p>
                    </div>
                    <div className={styles.weHaveDevelopedContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span
                          className={styles.weHaveDeveloped}
                        >Brand engagement for our clients by </span>
                        <b className={styles.websites}>
                        13%-21%.
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame (2).png"
                  />
                  <div className={styles.cmsParent}>
                    <div className={styles.mobileApplications}>
                    Rapid Web Design

                    </div>
                    <div className={styles.weSpecializeInContainer}>
                      <p className={styles.ourTeamWorks}>
                      Our team is committed to delivering high-quality websites quickly, so our clients can start generating revenue and growing their business as soon as possible.
                      </p>
                      {/* <p className={styles.ourTeamWorks}>&nbsp;</p> */}
                    </div>
                    <div className={styles.weHaveIncreasedContainer}>
                      <p className={styles.ourTeamWorks}>
                        <span
                          className={styles.weHaveDeveloped}
                        >Generated total revenue growth of </span>
                        <span className={styles.eCommercePortals}>
                          <b className={styles.b}>7%-12% </b>
                          <span className={styles.span2}>for our clients.</span>
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
      <ContactUsBar content="Want to make your user’s experience intuitively easy and seamless?" btnTxt="Contact Us"/>
      <ContactUsForm />

      <TrustedByBrands />
    </>
  );
};

export default UiUxInterface;
