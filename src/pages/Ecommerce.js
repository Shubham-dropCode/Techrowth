import React from "react";
import ServicesWeServeEcommerce from "../components/ServicesWeServeEcommerce";
import heroBg from "../assets/rectangle-216@2x.png";
import Hero from "../components/Hero";
// import ToolsWeUseMainG from '../components/ToolsWeUseMainG';
import ToolsWeUseEcommerce from "../components/ToolsWeUseEcommerce";
import TrustedByBrands from "../components/TrustedByBrands";
import ContactForm1 from "../components/ContactForm1";
const Ecommerce = () => {
  const HeroTitel = "E-Commerce";
  const HeroContent =
    "Experience a seamless connection between the digital and physical world. Shop without boundaries on a platform that merges virtual and real-world experiences.";
  const RecentText =
    "Interested in Getting In ? Discover how Techrowth can help grow your Business.";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <ServicesWeServeEcommerce />
      <ToolsWeUseEcommerce />
      <ContactForm1 />

      <TrustedByBrands />
    </>
  );
};

export default Ecommerce;
