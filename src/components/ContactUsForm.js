import styles from "./ContactUsForm.module.css";
const ContactUsForm = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.lookingToSolveANaggingBusParent}>
        <div className={styles.lookingToSolve}>
          Looking to solve a nagging business issue?
        </div>
        <div className={styles.dontLetIt}>
          Don’t let it hold you back any longer!
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <img className={styles.frameChild} alt="" src="/frame-572@2x.png" />
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
          <div className={styles.frameParent1}>
            <img className={styles.frameChild} alt="" src="/frame-573@2x.png" />
            <div className={styles.locationParent}>
              <div className={styles.location}>Location</div>
              <div className={styles.lusakaZambia}>
                Lusaka, Zambia - C/O iZyane InovSolutions Ltd Mukuba Pensions
                House, 2nd Floor Dedan Kimathi Road, Lusaka 10100
              </div>
              <div className={styles.lusakaZambia}>
                Bangalore, India - No.373, 1st floor, 2nd Phase, West of Chord
                Road, Stage 2, Rajajinagar, Bengaluru, Karnataka 560086
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.submitWrapper}>
            <div className={styles.submit}>Submit</div>
          </div>
          <div className={styles.letUsKnow}>Let Us Know</div>
          <div className={styles.frameParent3}>
            <div className={styles.parent}>
              <div className={styles.fullNameWrapper}>
                <div className={styles.mobileSupport}>Full Name</div>
              </div>
              <div className={styles.div}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.emailgmailcom}>Email@gmail.com</div>
                </div>
              </div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.phoneNo}>Phone No.</div>
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.rectangleParent}>
                  <div className={styles.groupChild} />
                  <div className={styles.companyName}>Company Name</div>
                </div>
              </div>
            </div>
            <div className={styles.div3}>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleDiv} />
                <div className={styles.message}>Message</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
