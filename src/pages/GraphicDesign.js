import React from "react";
import Hero from "../components/Hero";
import heroBg from "../assets/rectangle-216@2x.png";
import RecentResult from "../components/RecentResult";
import BusinessAnalystics from "../components/BusinessAnalystics";
import ToolsWeUseMainG from "../components/ToolsWeUseMainG";
import TechnologiesWeUseAndServiSocia from "../components/TechnologiesWeUseAndServiSocia";
import TrustedByBrands from "../components/TrustedByBrands";
import ContactFrom1 from "../components/ContactForm1";
import { useEffect } from "react";


const GraphicDesign = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const HeroTitel = "Empowering your Online presence, Driving Actual Results";
  const HeroContent =
    "Join the Techrowth Revolution Experience Exceptional Results and elevate your business to new levels with our result-oriented strategy framework BISCCBOR!";
  const RecentText =
    "Interested in Getting In ? Discover how Techrowth can help grow your Business.";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <RecentResult />
      {/* <OneStopSolution1 text={RecentText} btnText="Book a Consultation!" /> */}
      <BusinessAnalystics />
      {/* <AccelerateYourGrowth /> */}
      <ToolsWeUseMainG />
      <TechnologiesWeUseAndServiSocia />
      <ContactFrom1 />

      <TrustedByBrands />
    </>
  );
};

export default GraphicDesign;
