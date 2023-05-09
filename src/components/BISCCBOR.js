import styles from "./BISCCBOR.module.css";
import bisccbor from "../assets/Biccbor.png";
const BISCCBOR = () => {
  return (
    <div className={styles.bisccbor}>
      <div className={styles.main}>
        <div className={styles.heading}>
          <b className={styles.bISCCBOR}>B-I-S-C-C-B-O-R</b>
          <div className={styles.experienceTheChange}>
            Experience the Change
          </div>
        </div>
        <div className={styles.subheading}>
          <div>
            BISCCBOR is a proven digital marketing strategy developed by experts
            with over 30 years of experience. This framework has been
            successfully implemented in 100+ businesses globally, resulting in a
            17% reduction in the marketing budget and a 25% increase in business
            goals.
          </div>
        </div>
        {/* <img
          className={styles.bisccborImgIcon}
          alt=""
          src="/bisccbor-img@2x.png"
        /> */}
        <div className="container">
          <img src={bisccbor}  width={1100}/>
        </div>
        <div className={styles.colContainer}>
          <div className={styles.col1}>
            <div className={styles.groupParent}>
              <img className={styles.frameChild} alt="" src="/group-366.svg" />
              <div className={styles.businessParent}>
                <div className={styles.bisccborIsA}>Business</div>
                <div className={styles.definingWhatYour}>
                  Defining what your business is and who your clients are paves
                  the pathway for an unprecedented growth plan with
                  result-driven strategies.
                </div>
              </div>
            </div>
            <div className={styles.groupParent}>
              <img className={styles.frameChild} alt="" src="/group-373.svg" />
              <div className={styles.intentsParent}>
                <div className={styles.bisccborIsA}>Intents</div>
                <div className={styles.businessIntentRepresents}>
                  Business intent represents the direction in which a company
                  intends to go with their digital marketing campaign. This
                  defines what the organization wants to achieve. A business
                  objective specifies the methods and paths that you can use to
                  achieve that goal.
                </div>
              </div>
            </div>
            <div className={styles.groupParent}>
              <img className={styles.frameChild} alt="" src="/group-378.svg" />
              <div className={styles.businessParent}>
                <div className={styles.bisccborIsA}>Segment</div>
                <div className={styles.audienceSegmentationIsContainer}>
                  <p className={styles.audienceSegmentationIs}>
                    Audience segmentation is the process of dividing your target
                    market into smaller groups based on the goals of your
                    campaign. This is typically done in order to achieve more
                    efficient marketing, with tailored products or services
                    offered to specific groups of your clients.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.groupParent}>
              <img className={styles.frameChild} alt="" src="/group-374.svg" />
              <div className={styles.channelsParent}>
                <div className={styles.bisccborIsA}>Channels</div>
                <div className={styles.hereWeIdentifyContainer}>
                  <p className={styles.audienceSegmentationIs}>
                    Here, we identify the digital marketing channels that will
                    best serve your needs. That is, depending on the choices
                    made here, businesses can efficiently communicate and sell
                    their products or services via the internet or other
                    technologies. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col1}>
            <div className={styles.groupParent2}>
              <img className={styles.frameChild} alt="" src="/group-379.svg" />
              <div className={styles.communicationParent}>
                <div className={styles.bisccborIsA}>Communication</div>
                <div className={styles.aClearCommunication}>
                  A clear communication strategy strategizes your digital
                  marketing plan. This will establish how your business will
                  reach out and engage with its target audience using the
                  available channels.
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <img className={styles.frameChild} alt="" src="/group-375.svg" />
              <div className={styles.budgetParent}>
                <div className={styles.budget}>Budget</div>
                <div className={styles.afterTheOptimization}>
                  After the optimization, you’ll realize a significant reduction
                  in budget costs compared to your original digital marketing
                  plans.
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/group-376.svg"
                />
              </div>
              <div className={styles.budgetParent}>
                <div className={styles.budget}>Optimization</div>
                <div className={styles.thisIsWhere}>
                  This is where we’ll work our magic and optimize various
                  aspects of your campaign that will have a significant impact
                  on the success of your digital marketing campaign. An
                  optimized campaign often involves making adjustments to a
                  variety of elements in order to achieve greater results and
                  improve performance.
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <img className={styles.frameChild} alt="" src="/group-377.svg" />
              <div className={styles.budgetParent}>
                <div className={styles.budget}>Results</div>
                <div className={styles.withOurApproach}>
                  With our approach, you'll notice a significant change from
                  your previous results and achieve your established goals. Our
                  digital marketing campaign guarantees success for a brighter
                  future.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.achieveMaximumDigitalContainer}>
          <p className={styles.audienceSegmentationIs}>
            <span>{`Achieve maximum digital marketing success by using `}</span>
            <span className={styles.easyToMeasure}>Easy-To-Measure</span>
            <span className={styles.strategiesAndSpecific}>
              {" "}
              strategies and specific metrics.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BISCCBOR;
