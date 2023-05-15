import React, { useState } from "react";
import Hero from "../components/Hero";
import heroBg from "../assets/DigitalMarketingBg.jpg";
import RecentResult from "../components/RecentResult";
import ServicesWeServeG from "../components/ServicesWeServeG";
import ToolsWeUseMainG from "../components/ToolsWeUseMainG";

import TrustedByBrands from "../components/TrustedByBrands";

import { useEffect } from "react";
import GraphicDesignCounter from "../components/GraphicDesignCounter";

import ContactUsBar from "../components/ContactUsBar";
import ContactUsForm from "../components/ContactUsForm";
import Breadcrumbs from "../components/Breadcrumbs";

const GraphicDesign = () => {
  const [breadcrumb, setBreadcrumb] = useState([]);
  useEffect(() => {
    setBreadcrumb([
      { name: "Home >", path: "/" },
      { name: "Digital Marketing >", path: "/DigitalMarketing" },
      { name: "Graphic Design", path: "/GraphicDesign" },
    ]);
  }, []);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const HeroTitel = "Graphics and Design";
  const HeroContent =
    "Unleash the essence of your individuality through our aid, and let the world bask in the brilliance of your unique brand style.";

  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <RecentResult />
      <Breadcrumbs  breadcrumb={breadcrumb}/>

      <div style={{height:"1rem"}}/>
      <GraphicDesignCounter />

      <ToolsWeUseMainG />

      <ServicesWeServeG />
      <div style={{height:"1rem"}}/>
      <ContactUsBar
        content="Drive your Success With Unique Brand Elements. Book your Consultation Today!"
        btnTxt="Contact Us"
      />

      <ContactUsForm />

      <TrustedByBrands />
    </>
  );
};

export default GraphicDesign;
