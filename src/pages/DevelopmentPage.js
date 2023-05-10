import React from "react";
import styles from "../components/Hero.module.css";
import MyBackgroundImage from "../assets/Development.jpg";
import RecentResult from "../components/RecentResult";
import Breadcrumbs from "../components/Breadcrumbs";
import InterestedDevelopement from "../components/InterestedDevelopment";
import ToolsSlider from "../components/ToolsSlider";
import ContactForm1 from "../components/ContactForm1";
import TrustedByBrands from "../components/TrustedByBrands";

const DevelopmentPage = () => {
  return (
    <>
      <div className={styles.hero}>
        <div
          className={styles.empoweringYourOnlinePresencParent}
          style={{ backgroundImage: `url(${MyBackgroundImage})` }}
        >
          <div className={styles.empoweringYourOnlineContainer}>
            <div className="col-6">
              <p className={styles.empoweringYour + "my-3"}>
              Realize the full potential of your idea with Techrowth’s Team
              </p>
              <div className={styles.joinTheTechrowthContainer}>
                <p className={styles.empoweringYour + "my-3"}>
                  <span>
                  Our IT services cover CMS, website accessibility, e-commerce, mobile apps, and beyond. Unleash the potential of your vision for a brighter future with our experts and expertise.
                  </span>
                </p>
              </div>
              <button className={styles.cta}>
                <div className={styles.talkToOur}>Talk to our strategist</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <RecentResult />
      <Breadcrumbs />
      <InterestedDevelopement />
      <ToolsSlider />
      <ContactForm1 />

      <TrustedByBrands />
    </>
  );
};

export default DevelopmentPage;
