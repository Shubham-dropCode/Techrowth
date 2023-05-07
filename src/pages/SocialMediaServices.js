import React from "react";
import Hero from "../components/Hero";
import heroBg from "../assets/rectangle-216@2x.png";
import Breadcrumb from "../components/Breadcrumbs";
import NumberCounterSocial from "../components/NumberCounterSocial";
import IndustriesWorkedWith from "../components/IndustiresWorkedWIth";
import TechnologiesWeUseAndServiSocia from "../components/TechnologiesWeUseAndServiSocia";
import ContactUsBar from "../components/ContactUsBar";
import ContactForm1 from "../components/ContactForm1";
import TrustedByBrands from "../components/TrustedByBrands";

const SocialMediaServices = () => {
  const HeroTitel = "Social Media Services";
  const HeroContent =
    "Unleash the power of digital marketing and watch as your resources flourish into bountiful rewards for a thriving customer base. ";
  const RecentText =
    "Interested in Getting In ? Discover how Techrowth can help grow your Business.";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <Breadcrumb />
      <NumberCounterSocial />
      <IndustriesWorkedWith />
      <TechnologiesWeUseAndServiSocia />
      <ContactUsBar />
      <ContactForm1 />

      <TrustedByBrands />
    </>
  );
};

export default SocialMediaServices;
