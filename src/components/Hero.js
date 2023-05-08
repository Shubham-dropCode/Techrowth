import styles from "./Hero.module.css";
import Breadcrumbs from "./Breadcrumbs";
import RecentResult from "./RecentResult";

const Hero = ({ title, content, MyBackgroundImage }) => {
  return (
    <>
      <div className={styles.hero}>
        <div
          className={styles.empoweringYourOnlinePresencParent}
          style={{ backgroundImage: `url(${MyBackgroundImage})` }}
        >
          <div className={styles.empoweringYourOnlineContainer}>
            <div className="col-6">
              <p className={styles.empoweringYour + "my-3"}>{title}</p>
              <div className={styles.joinTheTechrowthContainer}>
                <p className={styles.empoweringYour + "my-3"}>
                  <span>{content}</span>
                </p>
              </div>
              <button className={styles.cta}>
                <div className={styles.talkToOur}>Talk to our strategist</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
