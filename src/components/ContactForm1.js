import styles from "./ContactForm1.module.css";

const ContactForm1 = () => {
  return (
    <div id="ContectFrom" className={styles.contactform}>
      <div className={styles.contactformInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-572@2x.png"
                />
                <div className={styles.contactUsParent}>
                  <div className={styles.contactUs}>{`Contact Us `}</div>
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
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-573@2x.png"
                />
                <div className={styles.contactUsParent}>
                  <div className={styles.location}>Location</div>
                  <div className={styles.lusakaZambia}>
                    Lusaka, Zambia - C/O iZyane InovSolutions Ltd Mukuba
                    Pensions House, 2nd Floor Dedan Kimathi Road, Lusaka 10100
                  </div>
                  <div className={styles.bangaloreIndia}>
                    Bangalore, India - No.373, 1st floor, 2nd Phase, West of
                    Chord Road, Stage 2, Rajajinagar, Bengaluru, Karnataka
                    560086
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.takeAdvantageOfTheOpportunParent}>
            <div className={styles.takeAdvantageOfContainer + "mt-4"}>
              <p className={styles.takeAdvantageOf}>
                <b>
                  {" "}
                  Take advantage of the opportunity to work with our team of
                  experts <br />
                  and achieve your goals. Contact us today
                </b>
              </p>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent2}>
                  <input
                    className={styles.frameInput}
                    type="text"
                    placeholder="Full Name"
                  />
                  <input
                    className={styles.frameInput}
                    type="text"
                    placeholder="Email@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent2}>
                  <input
                    className={styles.frameInput}
                    type="text"
                    placeholder="Phone No."
                  />

                  <input
                    className={styles.frameInput}
                    type="text"
                    placeholder="Company Name"
                  />
                </div>
              </div>
              <div className={styles.div}>
                <input
                  className={styles.child}
                  type="text"
                  placeholder="How can we help?"
                />
              </div>
              <button className={styles.letsGetStartedWrapper + "w-auto mb-3"} style={{borderRadius:"30px",padding:".8rem 3rem", background:"#0076A2", border:"none"}}>
                <div className={styles.letsGetStarted}>Let’s get Started!</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm1;
