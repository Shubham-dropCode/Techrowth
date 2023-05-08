import React, { useEffect } from "react";
import styles from "../components/OneStopSolution1.module.css";
import Hero from "../components/Hero";
import heroBg from "../assets/rectangle-216@2x.png";
import ToolsSlider from "../components/ToolsSlider";
import ContactUsBar from "../components/ContactUsBar";
import ContactForm1 from "../components/ContactForm1";
import TrustedByBrands from "../components/TrustedByBrands";
import Breadcrumbs from "../components/Breadcrumbs";
import RecentResult from "../components/RecentResult";

const IntegrationPage = () => {
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
      <RecentResult/>
      <Breadcrumbs/>
      <div className="container my-5">
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <div className={styles.div} style={{ fontSize: "36px" }}>
              7+
            </div>
            <div className={styles.yearsOfAverageContainer}>
              <p className={styles.yearsOfAverage}>
                New Integration done last yer
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <div
              className={styles.div1}
              style={{ fontSize: "36px", top: "-1rem" }}
            >
              11Mn+
            </div>
            <div className={styles.clientsAcross5Container}>
              <p className={styles.yearsOfAverage}>Lead Conversion</p>
            </div>
          </div>
          <div className={styles.container}>
            <div
              className={styles.div2}
              style={{ fontSize: "36px", left: "2rem" }}
            >
              100,000+
            </div>
            <div className={styles.projects} style={{ left: "1.2rem" }}>
              Customer Win-Bank
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.div3} style={{ fontSize: "36px" }}>
              13%-21%
            </div>
            <div
              className={styles.provenTrackRecordContainer}
              style={{ left: "0rem" }}
            >
              <p className={styles.yearsOfAverage}>
                User Interaction Increased
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToolsSlider />
      <ContactUsBar />
      <ContactForm1 />
      <TrustedByBrands />
    </>
  );
};

export default IntegrationPage;
