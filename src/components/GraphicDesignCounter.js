import React from "react";
import styles from "./BusinessAnalystics.module.css";
import NumberCounter from 'number-counter';


const GraphicDesignCounter = () => {
  return (
    <>
      <div className="container my-5">
        <div className={styles.businessAnalysticsInner}>
          <div className={styles.frameParent1}>
            <div className={styles.parent}>
              <div className={styles.div2}>
              <NumberCounter end={34} delay={1} className={styles.div1} preFix="~"/>

                {/* <div className={styles.div1}>~34</div> */}
                <div className={styles.revenueIncrement}>
                <p className={styles.unlockThePower}>Min/month Video </p>
                  <p className={styles.unlockThePower}>Editing occurs</p>
                </div>
              </div>
              <div className={styles.div2}>
              <NumberCounter end={8} delay={1} className={styles.div1}/>

                {/* <div className={styles.div1}>8</div> */}
                <div className={styles.revenueIncrement}>
                  <p className={styles.unlockThePower}>Branding Materials</p>
                  <p className={styles.unlockThePower}>made Every Month</p>
                </div>
              </div>
              <div className={styles.div4}>
              <NumberCounter end={5} delay={1} className={styles.div1}/>

                {/* <div className={styles.div1}>5</div> */}
                <div className={styles.revenueIncrement}>
                  <p className={styles.unlockThePower}>Brochure made </p>
                  <p className={styles.unlockThePower}>Every Month</p>
                </div>
              </div>
              <div className={styles.div6}>
              <NumberCounter end={89} delay={1} className={styles.div1}/>

                {/* <div className={styles.div1}>89</div> */}
                <div className={styles.revenueIncrement}>
                  <p className={styles.unlockThePower}>Logo build per year</p>
                  <p className={styles.unlockThePower}>&nbsp;</p>
                </div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div8}>
              <NumberCounter end={144} delay={1} className={styles.div9}/>

                {/* <div className={styles.div9}>144</div> */}
                <div className={styles.websitesMade}>Catalogs</div>
              </div>
              <div className={styles.div10}>
              <NumberCounter end={377} delay={1} className={styles.div11}/>

                {/* <div className={styles.div11}>377</div> */}
                <div className={styles.customerRetention}>
                  Unique Graphics <br /> Per Year
                </div>
              </div>
              <div className={styles.div12}>
              <NumberCounter end={610} delay={1} className={styles.div13} postFix="%"/>

                {/* <div className={styles.div13}>610</div> */}
                <div className={styles.socialMediaInteractionContainer}>
                  <p className={styles.unlockThePower}>
                    Unique Brand <br /> Package Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="container">
          <div className="row">
            <p className="text-center" style={{fontSize:"23px", color:"#0076A2",fontWeight:500}}>
              Reveal the depths of your individuality with our guidance, and
              bask in the radiant glow of your distinct brand style, shining for
              the world to behold
            </p>
          </div>
        </div>
        {/* <div className={styles.businessAnalysticsChild}>
          <div className={styles.instanceParent}>
            <div className={styles.rectangleWrapper}>
              <img
                className={styles.instanceChild}
                alt=""
                src="/rectangle-40291@2x.png"
              />
            </div>

            
          </div>
        </div> */}
      </div>
    </>
  );
};

export default GraphicDesignCounter;
