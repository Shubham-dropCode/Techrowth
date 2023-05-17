import styles from "./AccelerateYourGrowth.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../assets/group-358.svg";
import RightArrow from "../assets/group-359.svg";
import Slider from "react-slick";
import { useState } from "react";

const AccelerateYourGrowth = () => {
  const [marketingShow, setMarketingShow] = useState(true);
  const [technologyShow, setTechonologyShow] = useState(false);
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        onClick={onClick}
        alt=""
        style={{
          ...style,
          display: "block",
          width: "40px",
          height: "40px",
          left: "-50px",
        }}
        src={LeftArrow}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={RightArrow}
        className={className}
        style={{
          ...style,
          display: "block",
          width: "40px",
          height: "50px",
          right: "-50px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const MarketingTools = () => {
    setTechonologyShow(false);
    setMarketingShow(true);
  };
  const TechnologyTools = () => {
    setMarketingShow(false);
    setTechonologyShow(true);
  };
  return (
    <div className={styles.accelerateYourGrowth}>
      <div className={styles.frameParent}>
        <div className={styles.frameParent}>
          <div className={styles.accelerateYourGrowthHeading}>
            <b className={styles.accelerateYourGrowth1}>
              Accelerate Your Growth
            </b>
            <div className={styles.withOurVersatile}>
              with Our Versatile Technology Proficiency
            </div>
          </div>
          <div className={styles.frameGroup}>
            <button className={styles.groupContainer} onClick={MarketingTools}>
              <div className={styles.rectangleParent}>
                {/* <div className={styles.groupChild} /> */}
                <div className={styles.marketing}>Marketing</div>
              </div>
            </button>
            <button className={styles.groupContainer} onClick={TechnologyTools}>
              <div className={styles.rectangleParent}>
                {/* <div className={styles.groupChild} /> */}
                <div className={styles.marketing}>Technology</div>
              </div>
            </button>
            <button className={styles.groupContainer}>
              <div className={styles.rectangleParent}>
                {/* <div className={styles.groupChild} /> */}
                <div className={styles.marketing}>Analytics</div>
              </div>
            </button>
          </div>
        </div>
        {/* <div className={styles.frameContainer}>
          <button className={styles.frameButton}>
            <img className={styles.groupIcon} alt="" src="/group-358.svg" />
          </button> */}

        {/* <div className={styles.a31483e59ee069da94c581Parent}> */}
        {/* <Slider {...settings}> */}
        {/* <div className="px-2">
              <img
                className={styles.a31483e59ee069da94c581Icon}
                alt=""
                src="/629a31483e59ee069da94c58-1@2x.png"
              />
            </div>

            <div>
              <img
                className={styles.c471a6515b1e0ad75aa21Icon}
                alt=""
                src="/5841c471a6515b1e0ad75aa2-1@2x.png"
              />
            </div>
            <div>
              <img
                className={styles.hubspotLogo1Icon}
                alt=""
                src="/hubspotlogo-1@2x.png"
              />
            </div>
            <div>
              <img
                className={styles.images1Icon}
                alt=""
                src="/images-1@2x.png"
              />
            </div>
            <div>
              <img
                className={styles.mailchimpLogoHorizontalBlacIcon}
                alt=""
                src="/mailchimp-logohorizontal-black-1@2x.png"
              />
            </div>
            <div>
              <img
                className={styles.semrushLogo1Icon}
                alt=""
                src="/semrush-logo-1@2x.png"
              />
            </div> */}
        {/* </Slider> */}
        {/* </div> */}
        {/* <button className={styles.frameButton}>
            <img className={styles.groupIcon} alt="" src="/group-359.svg" />
          </button>
        </div> */}
        {marketingShow && (
          <div className="container">
            <div className="row d-block align-items-center">
              <Slider {...settings}>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="/629a31483e59ee069da94c58-1@2x.png"
                  />
                </div>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="/5841c471a6515b1e0ad75aa2-1@2x.png"
                  />
                </div>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="/hubspotlogo-1@2x.png"
                  />
                </div>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="/images-1@2x.png"
                  />
                </div>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="/mailchimp-logohorizontal-black-1@2x.png"
                  />
                </div>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="/semrush-logo-1@2x.png"
                  />
                </div>
              </Slider>
              {/* <div className="col"></div>
            <div className="col"></div> */}
            </div>
          </div>
        )}
        {technologyShow && (
          <div className="container">
            <div className="row d-block align-items-center">
              <Slider {...settings}>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="sql-data-base-with-logo@2x.png"
                  />
                </div>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="googleflutterlogo@2x.png"
                  />
                </div>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="/angularar21@2x.png"
                  />
                </div>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="/react-logo-wordmark@2x.png"
                  />
                </div>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="/javalogo@2x.png"
                  />
                </div>
                <div className="col">
                  <img
                    className={styles.images1Icon}
                    alt=""
                    src="frame-1030@2x.png"
                  />
                </div>
              </Slider>
              {/* <div className="col"></div>
            <div className="col"></div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccelerateYourGrowth;
