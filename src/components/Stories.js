import Slider from "react-slick";
import Slide1 from "./StorieSlider/Slide1";
import Slide2 from "./StorieSlider/Slide2";
import Slide3 from "./StorieSlider/Slide3";
import Slide4 from "./StorieSlider/Slide4";
import styles from "./Stories.module.css";

const Stories = () => {
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
    rlt:false
  };
  return (
    <div className={styles.stories}>
      <div className={styles.frameParent}>
        <div className={styles.ourInsideStoriesParent}>
          <b className={styles.ourInsideStories}>Our Inside Stories</b>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <img className={styles.frameChild} alt="" src="/frame-1108.svg" />
              <div className={styles.parent}>
                <div className="container">
                  <Slider {...settings}>
                    <div>
                      <Slide1 />
                    </div>
                    <div>
                      <Slide2 />
                    </div>
                    <div>
                      <Slide3 />
                    </div>
                    <div>
                      <Slide4 />
                    </div>
                    <div>
                      <Slide3 />
                    </div>
                  </Slider>
                </div>
              </div>
              <img className={styles.frameChild} alt="" src="/frame-357.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
