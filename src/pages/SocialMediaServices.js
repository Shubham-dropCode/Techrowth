import React from "react";
import Hero from "../components/Hero";
import heroBg from "../assets/socialimg.jpg";
import Breadcrumb from "../components/Breadcrumbs";
import NumberCounterSocial from "../components/NumberCounterSocial";
import IndustriesWorkedWith from "../components/IndustiresWorkedWIth";
import TechnologiesWeUseAndServiSocia from "../components/TechnologiesWeUseAndServiSocia";
import ContactUsBar from "../components/ContactUsBar";
import ContactForm1 from "../components/ContactForm1";
import TrustedByBrands from "../components/TrustedByBrands";
import RecentResult from "../components/RecentResult";

const SocialMediaServices = () => {
  const HeroTitel = "Social Media Services";
  const HeroContent =
    "Unleash the power of digital marketing and watch as your resources flourish into bountiful rewards for a thriving customer base. ";
  const RecentText =
    "Transform Your Business with Our Digital Marketing Services Today!     ";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <RecentResult/>
      <Breadcrumb />
      <NumberCounterSocial />
      <IndustriesWorkedWith />
      <TechnologiesWeUseAndServiSocia />
      <ContactUsBar content={RecentText} btnTxt="Contact Us"/>
      <ContactForm1  />

      <TrustedByBrands />
    </>
  );
};

export default SocialMediaServices;
