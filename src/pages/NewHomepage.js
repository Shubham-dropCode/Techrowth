import Hero from "../components/Hero";
import RecentResult from "../components/RecentResult";
import OneStopSolution1 from "../components/OneStopSolution1";
import AccelerateYourGrowth from "../components/AccelerateYourGrowth";
import ExploreOurCaseStudies from "../components/ExploreOurCaseStudies";
import QuantifyingTheData from "../components/QuantifyingTheData";
import BoostingYourBottomLine from "../components/BoostingYourBottomLine";
import DigitalMarketingServices1 from "../components/DigitalMarketingServices1";
import ITServices1 from "../components/ITServices1";
import BusinessAnalystics from "../components/BusinessAnalystics";
import SatisfiedClients from "../components/SatisfiedClients";
import FounderNote from "../components/FounderNote";
import ContactFrom1 from "../components/ContactForm1";
import Stories from "../components/Stories";
import TrustedByBrands from "../components/TrustedByBrands";
import heroBg from "../assets/rectangle-216@2x.png";
import styles from "./NewHomepage.module.css";
import Testimonial from "../components/Testimonial";
import { useEffect } from "react";
import DropdownMenu from "../components/DropdownMenu";

const NewHomepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const HeroTitel = "Empowering your Online presence, Driving Actual Results";
  const HeroContent =
    "Join the Techrowth Revolution Experience Exceptional Results and elevate your business to new levels with our result-oriented strategy framework BISCCBOR!";
  const RecentText =
    "Interested in Getting In ? Discover how Techrowth can help grow your Business.";

  return (
    <div className={styles.newHomepage}>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <RecentResult />
      <OneStopSolution1 text={RecentText} btnText="Book a Consultation!" />
      <AccelerateYourGrowth />
      <ExploreOurCaseStudies />
      <QuantifyingTheData />
      <BoostingYourBottomLine />
      <DigitalMarketingServices1 />
      <ITServices1 />
      {/* <DropdownMenu /> */}

      <BusinessAnalystics />
      <SatisfiedClients />
      <FounderNote />
      <ContactFrom1 />
      <Stories />
      <Testimonial />
      <TrustedByBrands />
    </div>
  );
};

export default NewHomepage;
