import styles from "./ContactUsForm.module.css";
const ContactUsForm = () => {
  return (
    <div className="container-fluid" style={{padding:"0 6rem",marginBottom:"3rem"}}>
      <div className={styles.contactusform}>
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
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-572@2x.png"
              />
              <div className={styles.locationParent}>
                <div className={styles.location}>Location</div>
                <div className={styles.lusakaZambia}>
                  Lusaka, Zambia - C/O iZyane InovSolutions Ltd Mukuba Pensions
                  House, 2nd Floor Dedan Kimathi Road, Lusaka 10100
                </div>
                <div className={styles.bangaloreIndia}>
                  Bangalore, India - No.373, 1st floor, 2nd Phase, West of Chord
                  Road, Stage 2, Rajajinagar, Bengaluru, Karnataka 560086
                </div>
              </div>
              <img
                className={styles.frameItem}
                alt=""
                src="/frame-573@2x.png"
              />
            </div>
            <div className={styles.letUsKnowParent}>
              <div className={styles.letUsKnow}>Let Us Know</div>
              <div className={styles.frameDiv}>
                <div className={styles.parent}>
                  <input
                    className={styles.input2}
                    type="text"
                    placeholder="Phone No."
                  />
                  <input
                    className={styles.input2}
                    type="text"
                    placeholder="Email@gmail.com"
                  />
                </div>
                <div className={styles.group}>
                  <input
                    className={styles.input2}
                    type="text"
                    placeholder="Phone No."
                  />
                  <input
                    className={styles.input2}
                    type="text"
                    placeholder="Company Name"
                  />
                </div>
                <input
                  className={styles.input4}
                  type="text"
                  placeholder="Message"
                />
              </div>
              <button className={styles.submitWrapper} autoFocus>
                <div className={styles.submit}>Submit</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
