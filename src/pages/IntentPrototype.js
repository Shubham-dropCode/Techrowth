import React, { useState } from "react";
import Hero from "../components/Hero";
import heroBg from "../assets/intentbgimg.jpg";
import RecentResult from "../components/RecentResult";
import BusinessAnalystics from "../components/BusinessAnalystics";
import ToolsWeUseMainG from "../components/ToolsWeUseMainG";
import TechnologiesWeUseAndServiSocia from "../components/TechnologiesWeUseAndServiSocia";
import TrustedByBrands from "../components/TrustedByBrands";
import ContactFrom1 from "../components/ContactForm1";
import AdvantageOfTechrowth from "../components/AdvantageOfTechrowth";
import { useEffect } from "react";
import DigitalMarektingComponent from "../components/DigitalMarektingComponent";
import DigitalMarketingServices1 from "../components/DigitalMarketingServices1";
import styles from "../components/DigitalMarketingServices1.module.css";
import ContactUsBar from "../components/ContactUsBar";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactUsForm from "../components/ContactUsForm";

const IntentPrototype = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [breadcrumb, setBreadcrumb] = useState([]);
  useEffect(() => {
    setBreadcrumb([
      { name: "Home >", path: "/" },
      { name: "Digital Marketing >", path: "/DigitalMarketing" },
      { name: "Intent We Serve", path: "/IntentPrototype" },
    ]);
  }, []);
  const HeroTitel = "Intent";
  const HeroContent =
    "Business intent is what an organization wants to achieve, whether it's in the short or long term. It could be anything, from improving customer service to reaching a specific objective.";
  const RecentText =
    "Become a class apart with our Cutting-Edge Marketing Tactics. Contact ou experts today!";
  return (
    <>
      <>
        <Hero
          title={HeroTitel}
          content={HeroContent}
          MyBackgroundImage={heroBg}
        />
        <RecentResult  />
        <Breadcrumbs breadcrumb={breadcrumb}/>
        <AdvantageOfTechrowth />
        {/* <BusinessAnalystics /> */}
        <div className={styles.digitalMarketingServices}>
          <div
            className={styles.digitalMarketingServicesInner}
            style={{ backgroundColor: "#FFF" }}
          >
            <div className={styles.frameParent}>
              <div className={styles.digitalMarketingServicesParent}>
                <b className={styles.digitalMarketingServices1}>Tools </b>
                <div
                  className={styles.intentWeServe}
                  style={{ fontSize: "18px" }}
                >
                  Digital Solutions Tools for a Streamlined Journey
                </div>
                <div className="container">
                  <div className="row g-3">
                    <div className="col-3 py-3">
                      <img src="/Frame 459.png" className="py-3" />
                      <div style={{fontSize:"18px",color:"#000"}}>Email Marketing Tools</div>
                    </div>
                    <div className="col-3 py-3">
                      <img src="/Frame 104.png" className="py-3" />
                      <div style={{fontSize:"18px",color:"#000"}}>Customer Analystics Tools</div>
                    </div>
                    <div className="col-3 py-3">
                      <img src="/Frame 105.png" className="py-3" />
                      <div style={{fontSize:"18px",color:"#000"}}>Customer Relationship Management (CRM) Platforms</div>
                    </div>
                    <div className="col-3 py-3">
                      <img src="/Frame 448.png" className="py-3" />
                      <div style={{fontSize:"18px",color:"#000"}}>Social Media Channels</div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className={styles.digitalMarketingServicesParent}>
                <b className={styles.digitalMarketingServices1}>
                  Intent We Serve
                </b>
                <div
                  className={styles.intentWeServe}
                  style={{ fontSize: "18px" }}
                >
                  Increasing brand awareness, driving website traffic,
                  generating leads, boosting sales, and building customer
                  loyalty.
                </div>
              </div>
              <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <div className={styles.div}>
                  <img className={styles.child} alt="" src="/frame-34.svg" />
                  <div className={styles.enquiry}>{`Enquiry `}</div>
                  <div className={styles.unleashYourBrandsContainer}>
                    <p
                      className={styles.unleashYourBrands}
                    >{`Unleash your brand's `}</p>
                    <p
                      className={styles.unleashYourBrands}
                    >{`digital potential: `}</p>
                    <p
                      className={styles.unleashYourBrands}
                    >{`Discover, Convert, `}</p>
                    <p className={styles.unleashYourBrands}>Succeed</p>
                  </div>
                </div>
                <div className={styles.div}>
                  <img className={styles.child} alt="" src="/frame-35.svg" />
                  <div className={styles.enquiry}>{`Bradning `}</div>
                  <div className={styles.unleashYourBrandsContainer}>
                    <p className={styles.unleashYourBrands}>
                      Creating distinctive brands that leave a lasting
                      impression{" "}
                    </p>
                    {/* <p
                      className={styles.unleashYourBrands}
                    >{`digital potential: `}</p>
                    <p
                      className={styles.unleashYourBrands}
                    >{`Discover, Convert, `}</p>
                    <p className={styles.unleashYourBrands}>Succeed</p> */}
                  </div>
                </div>
                <div className={styles.div}>
                  <img className={styles.child} alt="" src="/frame-36.svg" />
                  <div className={styles.enquiry}>{`Engagement `}</div>
                  <div className={styles.unleashYourBrandsContainer}>
                    <p className={styles.unleashYourBrands}>
                      Elevating brand engagement to new heights, one click at a
                      time.
                    </p>
                  </div>
                </div>
                <div className={styles.div}>
                  <img className={styles.child} alt="" src="/frame-37.svg" />
                  <div className={styles.enquiry}>Downloading</div>
                  <div className={styles.unleashYourBrandsContainer}>
                    <p className={styles.unleashYourBrands}>
                      Leveraging the Power of Downloads to Achieve Your Goals
                    </p>
                  </div>
                </div>
                <div className={styles.div}>
                  <img className={styles.child} alt="" src="/frame-38.svg" />
                  <div className={styles.enquiry}>E-Commerce</div>
                  <div className={styles.unleashYourBrandsContainer}>
                    <p className={styles.unleashYourBrands}>
                      Streamlining your online business through our expert
                      e-commerce solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>
                  <img className={styles.child} alt="" src="/frame-39.svg" />
                  <div className={styles.enquiry}>{`Upselling `}</div>
                  <div className={styles.unleashYourBrandsContainer}>
                    <p className={styles.unleashYourBrands}>
                      Experience premium up-selling services for faster growth.
                    </p>
                  </div>
                </div>
                <div className={styles.div}>
                  <img className={styles.child} alt="" src="/frame-40.svg" />
                  <div className={styles.enquiry}>Cross-selling</div>
                  <div className={styles.unleashYourBrandsContainer}>
                    <p className={styles.unleashYourBrands}>
                      Enhancing your marketing efforts with targeted
                      cross-selling.
                    </p>
                  </div>
                </div>
                <div className={styles.div}>
                  <img className={styles.child} alt="" src="/frame-41.svg" />
                  <div className={styles.enquiry}>{`Remarketing `}</div>
                  <div className={styles.unleashYourBrandsContainer}>
                    <p className={styles.unleashYourBrands}>
                      Maximizing your ROI with our powerful remarketing
                      services.
                    </p>
                  </div>
                </div>
                <div className={styles.div}>
                  <img className={styles.child} alt="" src="/frame-42.svg" />
                  <div className={styles.enquiry}>Redownloading</div>
                  <div className={styles.unleashYourBrandsContainer}>
                    <p className={styles.unleashYourBrands}>
                      Reviving your customer base, Re-Download and reignite!
                    </p>
                  </div>
                </div>
                <div className={styles.div}>
                  <img className={styles.child} alt="" src="/frame-43.svg" />
                  <div className={styles.enquiry}>Reactivation</div>
                  <div className={styles.unleashYourBrandsContainer}>
                    <p className={styles.unleashYourBrands}>
                      Bringing your dormant accounts back to life and Accelerate
                      your banking success
                    </p>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
              
            </div>
          </div>
        </div>
        {/* <AccelerateYourGrowth /> */}
        {/* <ToolsWeUseMainG /> */}
        {/* <TechnologiesWeUseAndServiSocia /> */}
        <ContactUsBar content={RecentText} btnTxt="Contact Us"/>
        <ContactUsForm />

        <TrustedByBrands />
      </>
    </>
  );
};

export default IntentPrototype;
