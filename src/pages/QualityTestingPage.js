import React from "react";
import heroBg from "../assets/UIUX.jpg";
import Hero from "../components/Hero";
import styles from "../components/InterestedDevelopment.module.css";
import ContactUsBar from "../components/ContactUsBar";
import automaticTesting from "../assets/testing.png";
import ManualTesting from "../assets/testing (1).png";
import ContactForm1 from "../components/ContactForm1";
import TrustedByBrands from "../components/TrustedByBrands";
const QualityTestingPage = () => {
  const HeroTitel =
    "A service focused on transforming software from good to great!";
  const HeroContent =
    "By using advanced testing techniques we ensure that your software has a strong foundation and a user-friendly interface that won't crumble over time.";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />

      <div className="container my-5">
        <div className="row">
          <div className={styles.interestedInSoftwareDevelopParent}>
            <b
              className={styles.interestedInSoftware}
              style={{ fontSize: "36px", color: "#666" }}
            >
              Interested in Software Development ?
            </b>
            <div
              className={styles.weOfferThe}
              style={{ fontSize: "18px", color: "#0076A2" }}
            >
              We offer the following Software Solutions
            </div>
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
                      business needs and deliver customized e-commerce solutions
                      that drive sales and increase customer loyalty.
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
                      efficient applications that help you achieve your business
                      goals.
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
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="h1 text-center" style={{ color: "#666" }}>
          Techniques
        </div>
        <div
          className="row justify-content-center text-center mt-5"
          style={{ gap: "3rem" }}
        >
          <div
            className="col-3 py-3 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#0076A2", borderRadius: "20px" }}
          >
            <img src={automaticTesting} width={35} />
            <div className="pl-4 text-white">Automatic Testing</div>
          </div>

          <div
            className="col-3 py-4 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#E9EEF4", borderRadius: "20px" }}
          >
            <img src={ManualTesting} width={35} />
            <div className="pl-4" style={{ color: "#0076A2" }}>
              Manual Testing
            </div>
          </div>
        </div>
      </div>

      <ContactUsBar />
      <ContactForm1 />
      <TrustedByBrands />
    </>
  );
};

export default QualityTestingPage;
