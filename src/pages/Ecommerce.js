import React, { useEffect, useState } from "react";
import ServicesWeServeEcommerce from "../components/ServicesWeServeEcommerce";
import heroBg from "../assets/Ecommercebg.jpg";
import Hero from "../components/Hero";
// import ToolsWeUseMainG from '../components/ToolsWeUseMainG';
import ToolsWeUseEcommerce from "../components/ToolsWeUseEcommerce";
import TrustedByBrands from "../components/TrustedByBrands";
import ContactForm1 from "../components/ContactForm1";
import RecentResult from "../components/RecentResult";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactUsBar from "../components/ContactUsBar";
import ContactUsForm from "../components/ContactUsForm"
const Ecommerce = () => {
  const [breadcrumb, setBreadcrumb] = useState([]);
  useEffect(() => {
    setBreadcrumb([
      { name: "Home >", path: "/" },
      { name: "Digital Marketing >", path: "/DigitalMarketing" },
      { name: "E-commerces", path: "/Ecommerce" },
    ]);
  }, []);
  const HeroTitel = "E-Commerce";
  const HeroContent =
    "Experience a seamless connection between the digital and physical world. Shop without boundaries on a platform that merges virtual and real-world experiences.";
  const RecentText =
    "Experience Explosive Growth with Our Customized Marketing Plans! Contact us now!";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <RecentResult />
      <Breadcrumbs breadcrumb={breadcrumb}/>
      <ServicesWeServeEcommerce />
      <ToolsWeUseEcommerce />
      {/* <ContactForm1 /> */}
      <ContactUsBar content={RecentText} btnTxt="Contact Us" />
      <ContactUsForm/>

      <TrustedByBrands />
    </>
  );
};

export default Ecommerce;
