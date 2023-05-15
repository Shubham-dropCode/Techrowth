import React, { useEffect, useState } from "react";
import heroBg from "../assets/newitMainbg.jpg";

import ItMain from "../components/ItMain";
import Hero from "../components/Hero";
import RecentResult from "../components/RecentResult";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactUsForm from "../components/ContactUsForm";
import TrustedByBrands from "../components/TrustedByBrands";

const ITMain = () => {
  const [breadcrumb, setBreadcrumb] = useState([]);
  useEffect(() => {
    setBreadcrumb([
      { name: "Home >", path: "/" },
      { name: "IT Main", path: "/ITMain" },
    ]);
  }, []);
  const HeroTitel =
    "Empowering you for a Better Tomorrow";
  const HeroContent =
    "With our exclusive IT services, we can help your ideas reach fruition, enhance user interaction, and bring you closer to your business goals. Let us assist you in reeling in an abundance of growth opportunities.";
  return (
    <>
      <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <RecentResult />
      <Breadcrumbs breadcrumb={breadcrumb}/>
      <ItMain />
      <ContactUsForm/>
      <TrustedByBrands/>
    </>
  );
};

export default ITMain;
