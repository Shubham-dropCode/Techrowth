import React from 'react'
import Slider from "react-slick";
import styles from "./ToolsSlider.module.css";
import LeftArrow from "../assets/group-358.svg";
import RightArrow from "../assets/group-359.svg";

const ToolsSliderIntegration = () => {
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
    
      return (
        <div className="container my-5">
          <div className={styles.interestedinsoftwaredevelopmenInner}>
            <div className={styles.frameParent}>
              <div className={styles.toolsParent}>
                <b className={styles.tools}>Tools</b>
                <div className={styles.weAreProficient}>We are proficient in</div>
              </div>
    
              <div className="container">
                <div className="row d-block align-items-center">
                  <Slider {...settings}>
                    <div className="col">
                      <img
                        className={styles.images1Icon}
                        alt=""
                        src="/Frame 1250.png"
                      />
                    </div>
                    <div className="col">
                      <img
                        className={styles.images1Icon}
                        alt=""
                        src="/Frame 1252.png"
                      />
                    </div>
                    <div className="col">
                      <img
                        className={styles.images1Icon}
                        alt=""
                        src="/Frame 1253.png"
                      />
                    </div>
                    <div className="col">
                      <img
                        className={styles.images1Icon}
                        alt=""
                        src="/Frame 1254.png"
                      />
                    </div>
                    <div className="col">
                      <img
                        className={styles.images1Icon}
                        alt=""
                        src="/Frame 1255.png"
                      />
                    </div>
                    <div className="col">
                      <img
                        className={styles.images1Icon}
                        alt=""
                        src="/Frame 1256.png"
                      />
                    </div>
                  </Slider>
                  {/* <div className="col"></div>
                <div className="col"></div> */}
                </div>
              </div>
              {/* <div className={styles.groupParent}>
                <img className={styles.frameChild} alt="" src="/group-358.svg" />
                <img className={styles.frameItem} alt="" src="/frame-846@2x.png" />
                <img className={styles.frameItem} alt="" src="/frame-847@2x.png" />
                <img className={styles.frameItem} alt="" src="/frame-848@2x.png" />
                <img className={styles.frameItem} alt="" src="/frame-849@2x.png" />
                <img className={styles.frameItem} alt="" src="/frame-1029@2x.png" />
                <img className={styles.frameItem} alt="" src="/frame-1030@2x.png" />
                <img className={styles.frameChild} alt="" src="/group-359.svg" />
              </div> */}
            </div>
          </div>
        </div>
      );
}

export default ToolsSliderIntegration