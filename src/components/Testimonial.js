import React from "react";
import styles from "./Stories.module.css";
import TSlide1 from "./TestimonialSlider/TSlide1";
import TSlide2 from "./TestimonialSlider/TSlide2";
import TSlide3 from "./TestimonialSlider/TSlide3";
import TSlide4 from "./TestimonialSlider/TSlide4";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className={styles.stories} style={{ margin: "0" }}>
        <div className={styles.frameParent}>
          <div className={styles.discoverWhy100Container}>
            Discover why{" "}
            <span className="h1">
              <b> 100+ Clients</b>
            </span>{" "}
            rave about our services
          </div>
          <div className={styles.clientReview}>
            <div className={styles.frameContainer}>
              <button className={styles.groupWrapper}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/group-358.svg"
                />
              </button>
              <div className="container d-block">
                <div className={styles.group}>
                  <Slider {...settings}>
                    <div className="w-auto">
                      <TSlide1 />
                    </div>
                    <div className="w-auto">
                      <TSlide2 />
                    </div>
                    <div className="w-auto">
                      <TSlide3 />
                    </div>
                    <div className="w-auto">
                      <TSlide4 />
                    </div>
                  </Slider>
                </div>
              </div>
              <button className={styles.groupWrapper}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/group-359.svg"
                />
              </button>
            </div>
            {/* <div className={styles.circles}>
          <img className={styles.circlesChild} alt="" src="/ellipse-37.svg" />
          <img className={styles.circlesChild} alt="" src="/ellipse-38.svg" />
          <img className={styles.circlesChild} alt="" src="/ellipse-39.svg" />
          <img className={styles.circlesChild} alt="" src="/ellipse-40.svg" />
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
