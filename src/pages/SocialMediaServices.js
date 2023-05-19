import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import heroBg from "../assets/socialimg.jpg";
import Breadcrumb from "../components/Breadcrumbs";
import NumberCounterSocial from "../components/NumberCounterSocial";
import IndustriesWorkedWith from "../components/IndustiresWorkedWIth";
import TechnologiesWeUseAndServiSocia from "../components/TechnologiesWeUseAndServiSocia";
import ContactUsBar from "../components/ContactUsBar";
import TrustedByBrands from "../components/TrustedByBrands";
import RecentResult from "../components/RecentResult";
import ContactUsForm from "../components/ContactUsForm";

const SocialMediaServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [breadcrumb, setBreadcrumb] = useState([]);
  useEffect(() => {
    setBreadcrumb([
      { name: "Home >", path: "/" },
      { name: "Digital Marketing >", path: "/DigitalMarketing" },
      { name: "Services", path: "/SocialMediaServices" },
    ]);
  }, []);
  const HeroTitel = "Digital Marketing Services";
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
      <RecentResult />
      <Breadcrumb breadcrumb={breadcrumb} />
      <NumberCounterSocial />
      <IndustriesWorkedWith />
      <TechnologiesWeUseAndServiSocia />
      <ContactUsBar content={RecentText} btnTxt="Contact Us" />
      <ContactUsForm />

      <TrustedByBrands />
    </>
  );
};

export default SocialMediaServices;
