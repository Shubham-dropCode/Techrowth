import React from "react";
import Hero from "../components/Hero";
import heroBg from "../assets/rectangle-216@2x.png";
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

const IntentPrototype = () => {
  const HeroTitel = "Intent";
  const HeroContent =
    "Business intent is what an organization wants to achieve, whether it's in the short or long term. It could be anything, from improving customer service to reaching a specific objective.";
  const RecentText =
    "Interested in Getting In ? Discover how Techrowth can help grow your Business.";
  return (
    <>
      <>
        <Hero
          title={HeroTitel}
          content={HeroContent}
          MyBackgroundImage={heroBg}
        />
        {/* <RecentResult /> */}
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
                      <img src="/frame-34.svg" className="py-3" />
                      <div style={{fontSize:"18px",color:"#000"}}>Email Marketing Tools</div>
                    </div>
                    <div className="col-3 py-3">
                      <img src="/frame-34.svg" className="py-3" />
                      <div style={{fontSize:"18px",color:"#000"}}>Customer Analystics Tools</div>
                    </div>
                    <div className="col-3 py-3">
                      <img src="/frame-34.svg" className="py-3" />
                      <div style={{fontSize:"18px",color:"#000"}}>Customer Relationship Management (CRM) Platforms</div>
                    </div>
                    <div className="col-3 py-3">
                      <img src="/frame-34.svg" className="py-3" />
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
                      <img
                        className={styles.child}
                        alt=""
                        src="/frame-34.svg"
                      />
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
                    <div className={styles.div1}>
                      <img
                        className={styles.child}
                        alt=""
                        src="/frame-35.svg"
                      />
                      <div className={styles.enquiry}>Branding</div>
                      <div className={styles.unleashYourBrandsContainer}>
                        <p
                          className={styles.unleashYourBrands}
                        >{`Creating distinctive `}</p>
                        <p
                          className={styles.unleashYourBrands}
                        >{`brands that leave a `}</p>
                        <p className={styles.unleashYourBrands}>
                          lasting impression
                        </p>
                      </div>
                    </div>
                    <div className={styles.div2}>
                      <img
                        className={styles.child}
                        alt=""
                        src="/frame-36.svg"
                      />
                      <div className={styles.enquiry}>Engagement</div>
                      <div className={styles.unleashYourBrandsContainer}>
                        <p
                          className={styles.unleashYourBrands}
                        >{`Elevating brand `}</p>
                        <p
                          className={styles.unleashYourBrands}
                        >{`engagement to `}</p>
                        <p
                          className={styles.unleashYourBrands}
                        >{`new heights, one `}</p>
                        <p className={styles.unleashYourBrands}>
                          click at a time.
                        </p>
                      </div>
                    </div>
                    <div className={styles.div3}>
                      <img
                        className={styles.child}
                        alt=""
                        src="/frame-37.svg"
                      />
                      <div className={styles.enquiry}>Downloading</div>
                      <div className={styles.unleashYourBrandsContainer}>
                        <p
                          className={styles.unleashYourBrands}
                        >{`Leveraging the `}</p>
                        <p
                          className={styles.unleashYourBrands}
                        >{`Power of Downloads `}</p>
                        <p className={styles.unleashYourBrands}>
                          to Achieve Your Goals
                        </p>
                      </div>
                    </div>
                    <div className={styles.div4}>
                      <img
                        className={styles.child}
                        alt=""
                        src="/frame-38.svg"
                      />
                      <div className={styles.enquiry}>E-Commerce</div>
                      <div className={styles.unleashYourBrandsContainer}>
                        <p className={styles.unleashYourBrands}>
                          Streamlining your
                        </p>
                        <p className={styles.unleashYourBrands}>
                          online business
                        </p>
                        <p
                          className={styles.unleashYourBrands}
                        >{`through our expert `}</p>
                        <p className={styles.unleashYourBrands}>
                          e-commerce solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.parent}>
                    <div className={styles.div5}>
                      <img
                        className={styles.child}
                        alt=""
                        src="/frame-39.svg"
                      />
                      <div className={styles.enquiry}>Upselling</div>
                      <div className={styles.unleashYourBrandsContainer}>
                        <p
                          className={styles.unleashYourBrands}
                        >{` Experience premium `}</p>
                        <p
                          className={styles.unleashYourBrands}
                        >{`up-selling services `}</p>
                        <p className={styles.unleashYourBrands}>
                          for faster growth.
                        </p>
                      </div>
                    </div>
                    <div className={styles.div6}>
                      <img
                        className={styles.child}
                        alt=""
                        src="/frame-40.svg"
                      />
                      <div className={styles.enquiry}>Cross-selling</div>
                      <div className={styles.unleashYourBrandsContainer}>
                        <p
                          className={styles.unleashYourBrands}
                        >{`Enhancing your `}</p>
                        <p
                          className={styles.unleashYourBrands}
                        >{`marketing efforts with `}</p>
                        <p className={styles.unleashYourBrands}>
                          targeted cross-selling.
                        </p>
                      </div>
                    </div>
                    <div className={styles.div7}>
                      <img
                        className={styles.child}
                        alt=""
                        src="/frame-41.svg"
                      />
                      <div className={styles.enquiry}>Remarketing</div>
                      <div className={styles.unleashYourBrandsContainer}>
                        <p
                          className={styles.unleashYourBrands}
                        >{`Maximizing your `}</p>
                        <p
                          className={styles.unleashYourBrands}
                        >{`ROI with our powerful `}</p>
                        <p className={styles.unleashYourBrands}>
                          remarketing services.
                        </p>
                      </div>
                    </div>
                    <div className={styles.div8}>
                      <img
                        className={styles.child}
                        alt=""
                        src="/frame-42.svg"
                      />
                      <div className={styles.enquiry}>Redownloading</div>
                      <div className={styles.unleashYourBrandsContainer}>
                        <p
                          className={styles.unleashYourBrands}
                        >{`Reviving your `}</p>
                        <p
                          className={styles.unleashYourBrands}
                        >{`customer base, `}</p>
                        <p
                          className={styles.unleashYourBrands}
                        >{`Re-Download and `}</p>
                        <p className={styles.unleashYourBrands}>reignite!</p>
                      </div>
                    </div>
                    <div className={styles.div9}>
                      <img
                        className={styles.child}
                        alt=""
                        src="/frame-43.svg"
                      />
                      <div className={styles.enquiry}>Reactivation</div>
                      <div className={styles.unleashYourBrandsContainer}>
                        <p className={styles.unleashYourBrands}>
                          Bringing your dormant
                        </p>
                        <p className={styles.unleashYourBrands}>
                          accounts back to
                        </p>
                        <p className={styles.unleashYourBrands}>
                          life and Accelerate
                        </p>
                        <p className={styles.unleashYourBrands}>
                          your banking success
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameParent1}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/frame-545@2x.png"
                    />
                    <div className={styles.socialMediaServicesContainer}>
                      <p className={styles.unleashYourBrands}>Social Media</p>
                      <p className={styles.unleashYourBrands}>Services</p>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/frame-546@2x.png"
                    />
                    <div className={styles.socialMediaServicesContainer}>
                      <p className={styles.unleashYourBrands}>{`Graphic &`}</p>
                      <p className={styles.unleashYourBrands}>Design</p>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/frame-547@2x.png"
                    />
                    <div className={styles.socialMediaServicesContainer}>
                      E-Commerce
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/frame-548@2x.png"
                    />
                    <div className={styles.socialMediaServicesContainer}>
                      Content
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <AccelerateYourGrowth /> */}
        <ToolsWeUseMainG />
        <TechnologiesWeUseAndServiSocia />
        <ContactFrom1 />

        <TrustedByBrands />
      </>
    </>
  );
};

export default IntentPrototype;
