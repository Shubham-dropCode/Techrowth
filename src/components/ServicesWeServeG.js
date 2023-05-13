import styles from "./ServicesWeServeG.module.css";
const ServicesWeServeG = () => {
  return (
    <div className="container mt-5" style={{padding:"0 4rem"}}>
    <div className={styles.servicesWeServeG}>
      <div className={styles.servicesWeServeParent}>
        <b className={styles.servicesWeServe}>Services we serve</b>
        <div className={styles.technologicalInfrastructureW}>
          Technological Infrastructure we Employ
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-929@2x.png" />
            <div className={styles.logoDesign}>Logo Design</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-930@2x.png" />
            <div className={styles.logoDesign}>Branding Material</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-931@2x.png" />
            <div className={styles.logoDesign}>Brochure</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-932@2x.png" />
            <div className={styles.logoDesign}>Company Profiles</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-933@2x.png" />
            <div className={styles.logoDesign}>Catalogs</div>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-934@2x.png" />
            <div className={styles.logoDesign}>Photoshoot/ Video Graphics</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-935@2x.png" />
            <div className={styles.logoDesign}>Social Media Poster</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-937@2x.png" />
            <div className={styles.logoDesign}>Video Production/Editing</div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameChild} alt="" src="/frame-936@2x.png" />
            <div className={styles.logoDesign}>Packaging</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServicesWeServeG;
