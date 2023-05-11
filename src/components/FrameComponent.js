import styles from "./FrameComponent.module.css";
const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.groupParent}>
          <div className={styles.lineParent}>
            <div className={styles.groupChild} />
            <div className={styles.ellipseParent}>
              <img className={styles.groupItem} alt="" src="/ellipse-31.svg" />
              <div className={styles.k}>K </div>
            </div>
          </div>
          <div className={styles.discussBusinessIntentionsContainer}>
            <ul className={styles.discussBusinessIntentionsN}>
              <li className={styles.discussBusinessIntentions}>
                Discuss business intentions, needs, and goals for the software
              </li>
              <li className={styles.discussBusinessIntentions}>
                Gather critical information about technological needs and assess
                current IT infrastructure
              </li>
              <li className={styles.discussBusinessIntentions}>
                Propose tailored solution to improve the situation or achieve
                objectives
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.lineParent}>
            <div className={styles.groupChild} />
            <div className={styles.ellipseGroup}>
              <img className={styles.groupItem} alt="" src="/ellipse-31.svg" />
              <div className={styles.r}>R</div>
            </div>
          </div>
          <div className={styles.discussBusinessIntentionsContainer}>
            <ul className={styles.discussBusinessIntentionsN}>
              <li className={styles.discussBusinessIntentions}>
                Project management team creates comprehensive plan to address
                technological needs
              </li>
              <li className={styles.discussBusinessIntentions}>
                Plan is based on business intelligence and documentation of
                deployment plan, version management tactics, budgeting, and
                timeline
              </li>
              <li>
                Quality of tools and technology used is dictated by proposal
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.groupContainer}>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.ellipseContainer}>
              <img className={styles.groupItem} alt="" src="/ellipse-87.svg" />
              <div className={styles.a}>A</div>
            </div>
          </div>
          <div className={styles.uiuxDesignTeamContainer}>
            <ul className={styles.discussBusinessIntentionsN}>
              <li className={styles.discussBusinessIntentions}>
                UI/UX design team uses latest technology to create user-friendly
                interface
              </li>
              <li className={styles.discussBusinessIntentions}>
                Software is developed and tested rigorously
              </li>
              <li className={styles.discussBusinessIntentions}>
                Issues and bugs are identified and addressed promptly
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <div className={styles.ellipseGroup}>
              <img className={styles.groupItem} alt="" src="/ellipse-88.svg" />
              <div className={styles.c}>C</div>
            </div>
          </div>
          <div className={styles.discussBusinessIntentionsContainer}>
            <ul className={styles.discussBusinessIntentionsN}>
              <li className={styles.discussBusinessIntentions}>
                Software is delivered and deployed with comprehensive
                documentation and training provided
              </li>
              <li className={styles.discussBusinessIntentions}>
                Ongoing support is provided to ensure software remains
                up-to-date and fully functional
              </li>
              <li>
                Client is equipped with knowledge and tools to maintain software
                after handover
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
