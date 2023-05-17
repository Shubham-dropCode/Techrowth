import styles from "./RecentResult.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecentResult = () => {
  const setting = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    // adaptiveHeight: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    arrow: false,
    cssEase: "linear",
  };
  return (
    <div className={styles.recentresult}>
      <div className={styles.recentResults}>Recent Results - </div>
      <div className={styles.increaseInVerticalRevenueParent}>
        <Slider {...setting}>
          <div className={styles.increaseInVertical}>
            “170% increase in vertical revenue | Global Institute
          </div>
          <div className={styles.increaseInVertical}>
            “86% increase in organic traffic.” | Hotel Sector
          </div>
          <div className={styles.increaseInVertical}>
            “120% increase in PPC conversation rate.” | Higher Education
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default RecentResult;
