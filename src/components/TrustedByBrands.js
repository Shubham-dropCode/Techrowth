import styles from "./TrustedByBrands.module.css";

const TrustedByBrands = () => {
  return (
    <div className={styles.trustedByBrands}>
      <div className={styles.trustedParent}>
        <div className={styles.trusted}>
          <b className={styles.trustedByThe}>Trusted by the Best</b>
          <div className={styles.parent}>
            <div className={styles.div}>
              <img
                className={styles.googleLogo1Icon}
                alt=""
                src="/googlelogo-1@2x.png"
              />
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
            <div className={styles.div1}>
              <img
                className={styles.clutchLogo2d745b01f0SeeklogIcon}
                alt=""
                src="/clutchlogo2d745b01f0seeklogo-1@2x.png"
              />
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
            <div className={styles.div2}>
              <img
                className={styles.pngimg1Icon}
                alt=""
                src="/pngimg-1@2x.png"
              />
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
            <div className={styles.div3}>
              <img
                className={styles.glassdoorLogo1Icon}
                alt=""
                src="/glassdoorlogo-1@2x.png"
              />
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.ctaWrapper}>
            <div className={styles.cta}>
              <img
                className={styles.ctaChild}
                alt=""
                src="/rectangle-40292@2x.png"
              />
              <div className={styles.howCanWeHelpTransformYourParent}>
                <div className={styles.howCanWe}>
                  How can we help transform your business vision?
                </div>
                <div className={styles.groupWrapper}>
                  <div className={styles.rectangleParent}>
                    <button className={styles.groupChild} />
                    <div className={styles.contactUs}>Contact Us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.logos}>
          <img
            className={styles.googlePartner11Icon}
            alt=""
            src="/googlepartner1-1@2x.png"
          />
          <img
            className={styles.b45dc8a806b0a419d8ddcUntitledIcon}
            alt=""
            src="/631b45dc8a806b0a419d8ddc-untitled2-1@2x.png"
          />
          <img
            className={styles.solutionPartner1Icon}
            alt=""
            src="/solutionpartner-1@2x.png"
          />
          <img
            className={styles.amazonAdsVerifiedPartner1Icon}
            alt=""
            src="/amazonadsverifiedpartner-1@2x.png"
          />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <img
            className={styles.shopifyPartners1Icon}
            alt=""
            src="/shopifypartners-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedByBrands;
