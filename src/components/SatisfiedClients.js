import styles from "./SatisfiedClients.module.css";

const SatisfiedClients = ({show}) => {
  return (
    <div className={styles.satisfiedClients}>
      <div className={styles.frameParent}>
        {show ?? (
          <div className={styles.joinTheRanksOfOurSatisfieParent}>
            <div className={styles.joinTheRanks}>
              Join the Ranks of Our Satisfied Clients
            </div>
            <b className={styles.andCounting}>100+ and Counting</b>
          </div>
        )}
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.frameGroup}>
                <div className={styles.n1Parent}>
                  <img
                    className={styles.n1Icon}
                    alt=""
                    src="/324417929-476612977997303-8923770136300221903-n-1@2x.png"
                  />
                  <img className={styles.izb1Icon} alt="" src="/izb-1@2x.png" />
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/amigo-1@2x.png"
                  />
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/logos03-1@2x.png"
                  />
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/tasmai-logo-1@2x.png"
                  />
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/main-logo-1@2x.png"
                  />
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/abhey-logo-1@2x.png"
                  />
                </div>
                <div className={styles.ggLogo1Parent}>
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/gg-logo-1@2x.png"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-664@2x.png"
                  />
                  <img className={styles.izb1Icon} alt="" src="/260-1@2x.png" />
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/prakashjewellers5-cream-color-1@2x.png"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-662@2x.png"
                  />
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-663@2x.png"
                  />
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/greenviewmedicalcenterbangalore-1-1@2x.png"
                  />
                </div>
                <div className={styles.ggLogo1Parent}>
                  <img
                    className={styles.n1Icon}
                    alt=""
                    src="/whatsapp-image-20230131-at-1724-1@2x.png"
                  />
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/whatsapp-image-20230131-at-1813-1@2x.png"
                  />
                  <img
                    className={styles.n1Icon}
                    alt=""
                    src="/whatsapp-image-20230131-at-1809-2@2x.png"
                  />
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/bluelogo2png-1@2x.png"
                  />
                  <img
                    className={styles.n1Icon}
                    alt=""
                    src="/whatsapp-image-20230131-at-1809-1@2x.png"
                  />
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/sobilogo-1@2x.png"
                  />
                  <img
                    className={styles.izb1Icon}
                    alt=""
                    src="/tecseek-logo01-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.whatsappImage20230131At1Group}>
                <img
                  className={styles.izb1Icon}
                  alt=""
                  src="/whatsapp-image-20230131-at-1727-1@2x.png"
                />
                <img
                  className={styles.izb1Icon}
                  alt=""
                  src="/logo-artwork-wihte06-1@2x.png"
                />
                <img
                  className={styles.n1Icon}
                  alt=""
                  src="/whatsapp-image-20230131-at-1702-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfiedClients;
