import { useEffect } from "react";
import TrustedByBrands from "../components/TrustedByBrands";
import styles from "./Blog.module.css";
const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="container-fluid" style={{ padding: "2rem 4rem" }}>
        <div className={styles.resourcePage24}>
          <div className={styles.sliderParent}>
            <div className={styles.blog}>
              <div className={styles.theDairySectorContainer}>
                <p className={styles.theDairySectorWantedToBoo}>
                  <span>{`The Dairy Sector wanted to boost their sales and expand their reach to the `}</span>
                  <span className={styles.southIndianMarket}>
                    South Indian market.
                  </span>
                </p>
              </div>
              <img className={styles.blogChild} alt="" src="/slider@3x.png" />
              <div className={styles.increasedSalesBy}>
                Increased Sales by 47%
              </div>
              <div className={styles.executionStrategy}>
                Execution Strategy :
              </div>
              <div className={styles.toOvercomeTheContainer}>
                <p className={styles.theDairySectorWantedToBoo}>
                  To overcome the problem of not being able to reach the south
                  Indian market and increase sales, the following strategies
                  were executed:
                </p>
              </div>
              <div className={styles.emotionalMarketingPromotedContainer}>
                <ol className={styles.emotionalMarketingPromoted}>
                  <li className="mb-3">
                    <span className={styles.emotionalMarketing}>
                      Emotional marketing:{" "}
                    </span>
                    <span>
                      Promoted milk through other dairy products, for example,
                      by promoting the goodness of milk through their curd,
                      cheese, or paneer. This involved reaching out to people
                      through culture, values, and creating a bond between the
                      product and the customer.
                    </span>
                  </li>
                  <li className="mb-3">
                    <span className={styles.emotionalMarketing}>
                      Emotional marketing:{" "}
                    </span>
                    <span>
                      Promoted milk through other dairy products, for example,
                      by promoting the goodness of milk through their curd,
                      cheese, or paneer. This involved reaching out to people
                      through culture, values, and creating a bond between the
                      product and the customer.
                    </span>
                  </li>
                  <li className="mb-3">
                    <span className={styles.emotionalMarketing}>
                      Emotional marketing:{" "}
                    </span>
                    <span>
                      Promoted milk through other dairy products, for example,
                      by promoting the goodness of milk through their curd,
                      cheese, or paneer. This involved reaching out to people
                      through culture, values, and creating a bond between the
                      product and the customer.
                    </span>
                  </li>
                  <li className="mb-3">
                    <span className={styles.emotionalMarketing}>
                      Emotional marketing:{" "}
                    </span>
                    <span>
                      Promoted milk through other dairy products, for example,
                      by promoting the goodness of milk through their curd,
                      cheese, or paneer. This involved reaching out to people
                      through culture, values, and creating a bond between the
                      product and the customer.
                    </span>
                  </li>
                </ol>
                <div>
                  <div className={styles.executionStrategy}>Result:</div>
                  <div className={styles.toOvercomeTheContainer}>
                    <ul className={styles.theDairySectorWantedToBoo}>
                      <li className="mb-3">
                        The implementation of emotional marketing resulted in a
                        significant 47% increase in sales during the campaign.
                      </li>
                      <li>
                        Furthermore, we applied additional strategies to achieve
                        a course correction, resulting in a commendable 34%
                        surge in e-commerce app downloads.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="py-3">
                  <div className={styles.executionStrategy}>
                    Tools & Techniques :
                  </div>
                  <div className={styles.toOvercomeTheContainer}>
                    <ul className={styles.theDairySectorWantedToBoo}>
                      <li className="mb-3">
                        Utilized tools like Meta Business Suite and Google
                        Analytics for analyzing the campaign
                      </li>
                      <li className="mb-3">
                        The utilization of social media advertising tactics
                        resulted in an enhanced brand image and increased
                        traffic.
                      </li>
                      <li className="mb-3">
                        Focused email marketing efforts successfully generated
                        buzz among the targeted audience.
                      </li>
                      <li className="mb-3">
                        Through App Store optimization, the level of engagement
                        was considerably increased.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className={styles.executionStrategy+" pr-2"}>Budget:</div>
                  <div className={styles.toOvercomeTheContainer}>
                    <p className={styles.theDairySectorWantedToBoo}>
                      $25K meant an extended engagement with our team, leading
                      to their desired effect in turn.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className={styles.blogInner}>
              <div className={styles.continueReadingWrapper}>
                <div className={styles.continueReading}>Continue Reading</div>
              </div>
            </div> */}
              {/* <img className={styles.blogItem} alt="" src="/line-47.svg" /> */}
            </div>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.sidebarform}>
              <div className={styles.frameParent8}>
                <div className={styles.letsConnectParent}>
                  <div className={styles.executionStrategy}>Let’s Connect</div>
                  <div className={styles.frameParent9}>
                    <input
                      className={styles.frameInput}
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                    <input
                      className={styles.frameChild7}
                      type="text"
                      placeholder="Email@gmail.com"
                    />
                    <input
                      className={styles.frameChild7}
                      type="text"
                      placeholder="Phone No."
                    />
                    <input
                      className={styles.frameChild7}
                      type="text"
                      placeholder="Company Name"
                    />
                    <input
                      className={styles.frameChild10}
                      type="text"
                      placeholder="Message"
                    />
                  </div>
                </div>
                <div className={styles.frameWrapper4}>
                  <button className={styles.submitWrapper}>
                    <div className={styles.submit}>Submit</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.sidebarcontactdetails}>
              <div className={styles.sidebarcontactdetailsInner}>
                <div className={styles.frameParent10}>
                  <div className={styles.frameWrapper5}>
                    <div className={styles.frameParent11}>
                      <img
                        className={styles.frameChild1}
                        alt=""
                        src="/frame-572@2x.png"
                      />
                      <div className={styles.contactUsParent}>
                        <div
                          className={styles.executionStrategy}
                        >{`Contact Us `}</div>
                        <div className={styles.mobileSupport9180731629Parent}>
                          <div className={styles.mobileSupport}>
                            Mobile - Support: +91 8073162943
                          </div>
                          <div className={styles.mobileSupport}>
                            Sales: +91 8073162943
                          </div>
                          <div className={styles.mobileSupport}>
                            Email - info@techrowth.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineDiv} />
                  <div className={styles.frameWrapper6}>
                    <div className={styles.frameParent12}>
                      <img
                        className={styles.frameChild12}
                        alt=""
                        src="/frame-573@2x.png"
                      />
                      <div className={styles.locationParent}>
                        <div className={styles.executionStrategy}>Location</div>
                        <div className={styles.lusakaZambiaCoIzyaneInParent}>
                          <div className={styles.mobileSupport}>
                            Lusaka, Zambia - C/O iZyane InovSolutions Ltd Mukuba
                            Pensions House, 2nd Floor Dedan Kimathi Road, Lusaka
                            10100
                          </div>
                          <div className={styles.mobileSupport}>
                            Bangalore, India - No.373, 1st floor, 2nd Phase,
                            West of Chord Road, Stage 2, Rajajinagar, Bengaluru,
                            Karnataka 560086
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrustedByBrands />
    </>
  );
};

export default Blog;
