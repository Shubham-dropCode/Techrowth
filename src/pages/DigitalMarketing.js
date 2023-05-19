import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import RecentResult from "../components/RecentResult";
import OneStopSolution1 from "../components/OneStopSolution1";
import SatisfiedClients from "../components/SatisfiedClients";
import AccelerateYourGrowth from "../components/AccelerateYourGrowth";
import DigitalMarektingComponent from "../components/DigitalMarektingComponent";
import DigitalMarketingServices1 from "../components/DigitalMarketingServices1";
import Testimonial from "../components/Testimonial";
import BISCCBOR from "../components/BISCCBOR";
import ExploreOurCaseStudies from "../components/ExploreOurCaseStudies";
import RevenueGenerated from "../components/RevenueGenerated";
import heroBg from "../assets/DigitalMarketingBgImg.png";
import ITServices1 from "../components/ITServices1";
import BusinessAnalystics from "../components/BusinessAnalystics";
import ContactFrom1 from "../components/ContactForm1";
import TrustedByBrands from "../components/TrustedByBrands";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactUsForm from "../components/ContactUsForm";
import ContactUsBar from "../components/ContactUsBar";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [breadcrumb, setBreadcrumb] = useState([]);
  useEffect(() => {
    setBreadcrumb([
      { name: "Home >", path: "/" },
      { name: "Digital Marketing", path: "/DigitalMarketing" },
    ]);
  }, []);

  const HeroTitel = "Unleash the power of your brand voice with Techrowth";
  const HeroContent =
    "Unlock the potential of your brand and seize future growth opportunities with our result-driven strategies. Our extensive digital channels can help you reach a wider audience, boost brand visibility, and drive growth.";
  const RecentText =
    "Take guidance from Expert Professionals! Maximize the potential of your online reach with our digital marketing solutions!";
  const cotactBarContent =
    "Wondering if you could be a part of a success story? Book a free consultation today and learn more!";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <RecentResult />
      <Breadcrumbs breadcrumb={breadcrumb} />
      <OneStopSolution1 />
      <ContactUsBar content={RecentText} btnTxt="Contact Us" />
      <SatisfiedClients show={false} />
      <AccelerateYourGrowth />
      <DigitalMarektingComponent />
      <DigitalMarketingServices1 />
      <Testimonial />
      <BISCCBOR />
      <ExploreOurCaseStudies />
      <ContactUsBar content={cotactBarContent} btnTxt="Contact Us" />
      <RevenueGenerated />
      <ITServices1 />
      <BusinessAnalystics show={false} onDisplay={true} titleDiplay={true} />
      <ContactUsForm />

      <TrustedByBrands />
    </>
  );
};

export default DigitalMarketing;
