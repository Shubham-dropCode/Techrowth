import styles from "./OneStopSolution1.module.css";
import NumberCounter from "number-counter";

const OneStopSolution1 = ({ text, text2, btnText }) => {
  return (
    <div className={styles.onestopsolution}>
      <div className={styles.frameParent}>
        <div className={styles.oneStopSolutionParent}>
          <b className={styles.oneStopSolution}>One Stop Solution</b>
          <div
            className={styles.resultDrivenIt}
          >{`Result driven IT & Digital Marketing Consultancy`}</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <NumberCounter
              end={7}
              delay={1}
              className={styles.div}
              postFix="+"
            />

            {/* <div >7+</div> */}
            <div className={styles.yearsOfAverageContainer}>
              <p className={styles.yearsOfAverage}>
                 Years of Average <br /> Team Experience
              </p>
            </div>
          </div>
          <div className={styles.group}>
            <NumberCounter
              end={100}
              delay={1}
              className={styles.div1}
              postFix="+"
            />
            {/* <div className={styles.div1}>100+</div> */}
            <div className={styles.clientsAcross5Container}>
              <p className={styles.yearsOfAverage}>
                Clients across <br />5 countries
              </p>
            </div>
          </div>
          <div className={styles.container}>
            <NumberCounter
              end={500}
              delay={1}
              className={styles.div2}
              postFix="+"
            />
            {/* <div className={styles.div2}>500+</div> */}
            <div className={styles.projects}>Projects</div>
          </div>
          <div className={styles.frameDiv}>
            <NumberCounter
              end={100}
              delay={1}
              className={styles.div3}
              postFix="%"
            />
            {/* <div className={styles.div3}>100%</div> */}
            <div className={styles.provenTrackRecordContainer}>
              <p className={styles.yearsOfAverage}>
                Proven Track <br />
                Record
              </p>
            </div>
          </div>
        </div>
        {/* <div className={styles.cta}>
          <img
            className={styles.ctaChild}
            alt=""
            src="/rectangle-4029@2x.png"
          />
          <div className="row">
            <div className="col-12 col-md-10 col-lg-10">
              <p className="col-8">{text}</p>
            </div>
            <button className={styles.buttonWrapper}>
              <div className={styles.button + "col-4"}>
                <button className={styles.buttonChild} />
                <div className={styles.bookAConsultation}>{btnText}</div>
              </div>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OneStopSolution1;
