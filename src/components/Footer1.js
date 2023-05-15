import { Link } from "react-router-dom";
import styles from "./Footer1.module.css";

const Footer1 = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.footerChild} alt="" src="/group-325.svg" />
      <div className={styles.resourcesAboutTechrowthContainer}>
        <p className={styles.resources}>Resources</p>
        <p className={styles.aboutTechrowth}>
          <Link to="/WhoWeAre" className="text-white">
            About Techrowth
          </Link>{" "}
          | Contact Us |
          <Link to="/Blog" className="text-white">
            Blogs
          </Link>{" "}
          | Careers | Locations |{" "}
          <Link to="/Resource" className="text-white">
            {" "}
            Resource
          </Link>
        </p>
        <p className={styles.aboutTechrowth}>&nbsp;</p>
        <p className={styles.resources}>Intent we serve</p>
        <p className={styles.aboutTechrowth}>
          Enquiry | Cross-selling | Up-selling | Engagement | Branding |
          Remarketing| Reactivation | Downloading | Redownloading | E-commerce
        </p>
        <p className={styles.aboutTechrowth}>&nbsp;</p>
        <p className={styles.resources}> <Link to="/DigitalMarketing" className="text-white">Digital Marketing</Link></p>
        <p className={styles.aboutTechrowth}>
          <Link to="/IntentPrototype" className="text-white">
          {" "}  Intents We Serve{" "}
          </Link>
          |
          <Link to="/SocialMediaServices" className="text-white">
          {" "}  Services{" "}
          </Link>
          |
          <Link to="/GraphicDesign" className="text-white">
          {" "} Graphic & Design{" "}
          </Link>
          |
          <Link to="/Ecommerce" className="text-white">
          {" "}  E-commerce{" "}
          </Link>
          |
          <Link to="/Content" className="text-white">
          {" "}  Content{" "}
          </Link>
        </p>
        <p className={styles.aboutTechrowth}>&nbsp;</p>
        <p className={styles.resources}><Link to="/ITMain" className="text-white">IT Services</Link></p>
        <p className={styles.aboutTechrowth}>
          <Link to="/DevelopmentPage" className="text-white">
          {" "}   Development{" "}
          </Link>
          |
          <Link to="/UiUxInterface" className="text-white">
          {" "} UI/UX & Interactive{" "}
          </Link>
          |
          <Link to="/ITManagement" className="text-white">
          {" "}   IT Management{" "}
          </Link>
          |
          <Link to="/IntegrationPage" className="text-white">
          {" "}    Integrations{" "}
          </Link>
          |
          <Link to="/qualityTestingPage" className="text-white">
          {" "}    Quality Testing{" "}
          </Link>
        </p>
        <p className={styles.blankLine3}>&nbsp;</p>
        <p className={styles.resources}>Analytics</p>
        <p className={styles.businessIntelligence}>
          Business Intelligence | Data Analytics | Tools
        </p>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.coIzyaneInovsolutionsLtdMParent}>
          <div className={styles.coIzyaneInovsolutionsContainer}>
            <p
              className={styles.aboutTechrowth}
            >{`C/O iZyane InovSolutions Ltd `}</p>
            <p
              className={styles.aboutTechrowth}
            >{`Mukuba Pensions House, 2nd Floor,  `}</p>
            <p className={styles.aboutTechrowth}>
              Dedan Kimathi Road, Lusaka 10100
            </p>
            <p className={styles.aboutTechrowth}>&nbsp;</p>
            <p className={styles.aboutTechrowth}>
              info@techrowth.com | <br />
              (+260) 767527931
            </p>
          </div>
          <div className={styles.groupInner} />
          <div className={styles.no3731stContainer}>
            <p
              className={styles.aboutTechrowth}
            >{`No.373, 1st & 2nd floor, 2nd Phase`}</p>
            <p className={styles.aboutTechrowth}>
              West of Chord Road, Stage 2, Rajajinagar Bengaluru, Karnataka
              560086
            </p>
            <p className={styles.aboutTechrowth}>&nbsp;</p>
            <p className={styles.aboutTechrowth}>
              info@techrowth.com |<br /> +91 80731 62943
            </p>
          </div>
          <div className={styles.lineDiv} />
          <div className={styles.termsConditionsPrivacyPParent}>
            <div className={styles.termsConditionsContainer}>
              <p className={styles.aboutTechrowth}>{`Terms & Conditions	   `}</p>
              <p className={styles.aboutTechrowth}>{`Privacy Policy   `}</p>
              <p className={styles.aboutTechrowth}>Sitemap  </p>
            </div>
            <div className={styles.techrowthPvtLtd}>
              {" "}
              © 2023 Techrowth Pvt. Ltd.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
