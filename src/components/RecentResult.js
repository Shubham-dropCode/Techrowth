import styles from "./RecentResult.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecentResult = () => {
  const sliderData = [
    " “170% increase in vertical revenue | Global Institute",
    "“86% increase in organic traffic.” | Hotel Sector",
    " “120% increase in PPC conversation rate.” | Higher Education",
  ];
  // const setting = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   adaptiveHeight: true,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 1000,
  //   cssEase: "linear",
  // };
  return (
    <div className={styles.recentresult}>
      <div className={styles.recentResults}>Recent Results - </div>
      <div className={styles.increaseInVerticalRevenueParent}>
        {/* <Slider {...setting}> */}
          <div className={styles.increaseInVertical}>
            “170% increase in vertical revenue | Global Institute
          </div>
          <div className={styles.increaseInVertical}>
            “86% increase in organic traffic.” | Hotel Sector
          </div>
          <div className={styles.increaseInVertical}>
            “120% increase in PPC conversation rate.” | Higher Education
          </div>
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default RecentResult;
