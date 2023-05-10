import React from "react";
import styles from "./BusinessAnalystics.module.css";

const ItMainCounter = () => {
  return (
    <div>
      <div className="container my-4">
        <div className={styles.businessAnalysticsInner}>
          <div className={styles.frameParent1}>
            <div className={styles.parent}>
              <div className={styles.div2}>
                <div className={styles.div1}>~34</div>
                <div className={styles.revenueIncrement}>
                  <p className={styles.unlockThePower}>min/month Video </p>
                  <p className={styles.unlockThePower}>Editing occurs</p>
                </div>
              </div>
              <div className={styles.div2}>
                <div className={styles.div1}>8</div>
                <div className={styles.revenueIncrement}>
                  <p className={styles.unlockThePower}>Branding Materials</p>
                  <p className={styles.unlockThePower}>made Every Month</p>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.div1}>5</div>
                <div className={styles.revenueIncrement}>
                  <p className={styles.unlockThePower}>Brochure made </p>
                  <p className={styles.unlockThePower}>Every Month</p>
                </div>
              </div>
              <div className={styles.div6}>
                <div className={styles.div1}>89</div>
                <div className={styles.revenueIncrement}>
                  <p className={styles.unlockThePower}>Logo build per year</p>
                  <p className={styles.unlockThePower}>&nbsp;</p>
                </div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div8}>
                <div className={styles.div9}>144</div>
                <div className={styles.websitesMade}>Catalogs</div>
              </div>
              <div className={styles.div10}>
                <div className={styles.div11}>377</div>
                <div className={styles.customerRetention}>
                  Unique Graphics <br /> Per Year
                </div>
              </div>
              <div className={styles.div12}>
                <div className={styles.div13}>610</div>
                <div className={styles.socialMediaInteractionContainer}>
                  <p className={styles.unlockThePower}>
                    Unique Brand <br /> Package Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
          <div className="row">
            <p
              className="text-center"
              style={{ fontSize: "23px", color: "#0076A2", fontWeight: 500 }}
            >
              Reveal the depths of your individuality with our guidance, and
              bask in the radiant glow of your distinct brand style, shining for
              the world to behold
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ItMainCounter;
