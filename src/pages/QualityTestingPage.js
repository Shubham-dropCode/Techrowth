import React, { useEffect, useState } from "react";
import heroBg from "../assets/Qualitybg.jpg";
import Hero from "../components/Hero";
import styles from "../components/InterestedDevelopment.module.css";
import ContactUsBar from "../components/ContactUsBar";
import automaticTesting from "../assets/testing.png";
import ManualTesting from "../assets/testing (1).png";
import ContactForm1 from "../components/ContactForm1";
import TrustedByBrands from "../components/TrustedByBrands";
import RecentResult from "../components/RecentResult";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactUsForm from "../components/ContactUsForm";
const QualityTestingPage = () => {
  const [breadcrumb, setBreadcrumb] = useState([]);
  useEffect(() => {
    setBreadcrumb([
      { name: "Home >", path: "/" },
      { name: "IT Main >", path: "/ITMain" },
      { name: "Quality Testing", path: "/QualityTestingPage" },
    ]);
  }, []);
  const HeroTitel =
    "A service focused on transforming software from good to great!";
  const HeroContent =
    "By using advanced testing techniques we ensure that your software has a strong foundation and a user-friendly interface that won't crumble over time.";
  const RecentText =
    "Let us take your business to the next level with our expert IT services";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <RecentResult />
      <Breadcrumbs breadcrumb={breadcrumb}/>
      <div className="container my-5">
        <div className="row">
          <div className={styles.interestedInSoftwareDevelopParent}>
            <b
              className={styles.interestedInSoftware}
              style={{ fontSize: "36px", color: "#666" }}
            >
              Interested in Quality Testing ?{" "}
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
                  <div className={styles.eCommerce} style={{color:"#666"}}>
                    Database & Platform Testing
                  </div>
                  {/* <div className={styles.ourTeamWorksContainer}>
                    <p className={styles.ourTeamWorks}>
                      Our team works closely with you to understand your
                      business needs and deliver customized e-commerce solutions
                      that drive sales and increase customer loyalty.
                    </p>
                  </div> */}
                  <div className={styles.weHaveDevelopedContainer}>
                    <span className={styles.weHaveDeveloped}>
                      Increased data security and reliability with
                    </span>
                    <b className={styles.eCommercePortals}>95% uptime</b>
                  </div>
                  <div className={styles.weHaveDevelopedContainer}>
                    <span className={styles.weHaveDeveloped}>
                      Reduced query response time by
                      <b className={styles.eCommercePortals}> 20% </b>
                      resulting in faster transaction processing
                    </span>
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
                  <div className={styles.mobileApplications} style={{color:"#666"}}>
                    Usability Testing
                  </div>
                  {/* <div className={styles.weSpecializeInContainer}>
                    <p className={styles.ourTeamWorks}>
                      We specialize in delivering exceptional user experiences
                      for mobile users, helping you reach your target audience
                      and achieve your business goals.
                    </p>
                  </div> */}
                  <div className={styles.optimizedAndDevelopedContainer}>
                    <span className={styles.weHaveDeveloped}>
                      Identified and resolved issues with navigation, layout,
                      and design resulting in a{" "}
                      <b className={styles.eCommercePortals}>25%</b> decrease in
                      bounce rates Increased customer engagement and loyalty by
                      up to <b className={styles.eCommercePortals}>20%</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer }>
              <div className={styles.groupParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-817.svg"
                />
                <div className={styles.corporateWebsiteParent}>
                  <div className={styles.mobileApplications} style={{color:"#666"}}>
                    Functional & Security Testing{" "}
                  </div>
                  {/* <div className={styles.weSpecializeInContainer}>
                    <p className={styles.ourTeamWorks}>
                      Our team is dedicated to delivering user-friendly and
                      efficient applications that help you achieve your business
                      goals.
                    </p>
                  </div> */}
                  <div className={styles.ourTeamHasContainer}>
                    <p className={styles.ourTeamWorks}>
                      <span className={styles.weHaveDeveloped}>
                        Increased customer trust in the company's products,
                        resulting in a{" "}
                      </span>
                      <b className={styles.websites}>15% increase in sales</b>
                      <span className={styles.platforms}>.</span>
                    </p>
                  </div>
                  <div className={styles.ourTeamHasContainer}>
                    <p className={styles.ourTeamWorks}>
                      <span className={styles.weHaveDeveloped}>
                        Reduced the risk of data breaches and
                      </span>
                      <b className={styles.websites}> cyber attacks by 50%</b>
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
                  <div className={styles.mobileApplications} style={{color:"#666"}}>
                    Compatibility Testing{" "}
                  </div>
                  {/* <div className={styles.weSpecializeInContainer}>
                    <p className={styles.ourTeamWorks}>
                      Our expert team ensures that your website is up-to-date
                      and running smoothly, so you can focus on growing your
                      business.
                    </p>
                  </div> */}
                  <div className={styles.weHaveDevelopedContainer}>
                    <p className={styles.ourTeamWorks}>
                      <span className={styles.weHaveDeveloped}>
                        Ensured compatibility across various platforms, devices,
                        and operating systems resulting in a
                        <b className={styles.websites}> 40%</b> increase in
                        customer satisfaction 
                      </span>
                      <b className={styles.websites}>
                        {" "} $144 million in revenue.
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
            style={{ backgroundColor: "#0076A2", borderRadius: "50px" }}
          >
            <img src={automaticTesting} width={35} />
            <div className="pl-4 text-white">Automatic Testing</div>
          </div>

          <div
            className="col-3 py-3 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#E9EEF4", borderRadius: "50px" }}
          >
            <img src={ManualTesting} width={35} />
            <div className="pl-4" style={{ color: "#0076A2" }}>
              Manual Testing
            </div>
          </div>
        </div>
      </div>

      <ContactUsBar content={RecentText} btnTxt="Contact Us" />
      <ContactUsForm />
      <TrustedByBrands />
    </>
  );
};

export default QualityTestingPage;
