import styles from "./FounderNote.module.css";

const FounderNote = () => {
  return (
    // <div className="container">
      <div className={styles.foundernote}>
        <div className={styles.founderNote}>
          <div className={styles.founderNoteChild} />
          <div className={styles.founderNoteInner}>
            <img className={styles.frameChild} alt="" src="/group-355.svg" />
          </div>
          <img
            className={styles.asifSirF12Icon}
            alt=""
            src="/asifsir-f1-2@2x.png"
          />
          <div className={styles.founderNoteItem} />
          <div className={styles.frameParent}>
            <div className={styles.coFounderNoteParent}>
              <div className={styles.coFounderNote}>Co-Founder Note</div>
              <div className={styles.managingDirectorParent}>
                <div className={styles.managingDirector}>Managing Director</div>
                <div className={styles.asifR}>- Asif R</div>
              </div>
            </div>
            <div className={styles.weAreDriven}>
              We are driven by our passion for action, our strive for
              excellence, our creator-friendly mindset, and our business-centric
              approach. Our team of highly skilled experts is the best in the
              industry, and we are persistent in investing in our people to keep
              them up-to-date with the latest skills and technologies. Working
              with us means expecting a tested and efficient process that
              ensures speedy delivery, adaptability, predictability, and
              tangible results. We have delivered hundreds of projects in the
              past few years and optimized our process to maximize efficiency.
              Techrowth is committed to maximizing the value of your business by
              providing exceptional service, high-quality output, and a
              personalized approach. Let's work together to achieve your
              business objectives and outshine your expectations.
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default FounderNote;
