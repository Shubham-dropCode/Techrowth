import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import RecentResult from '../components/RecentResult'
import heroBg from "../assets/ContentImage.jpg";
import ToolsWeUseContent from '../components/ToolsWeUseContent';
import ContactUsBar from '../components/ContactUsBar';
import TrustedByBrands from '../components/TrustedByBrands';
import ContactUsForm from '../components/ContactUsForm';
import Breadcrumbs from '../components/Breadcrumbs';


const Content = () => {
  const [breadcrumb, setBreadcrumb] = useState([]);
  useEffect(() => {
    setBreadcrumb([
      { name: "Home >", path: "/" },
      { name: "Digital Marketing >", path: "/DigitalMarketing" },
      { name: "Content", path: "/Content" },
    ]);
  }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    
      const HeroTitel = "Content";
      const HeroContent =
        "Bringing your brand voice out to the public is as important as making flawless products. Let us help you with your content creation on all fronts.        ";
      const RecentText =
        "A Content Curation To Bring Your Ideas Out & Establish A Brand Voice with Authority! Consult our Experts now!";
  return (
    <>
     <Hero
        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <RecentResult/>
      <Breadcrumbs breadcrumb={breadcrumb}/>
      <ToolsWeUseContent/>
      <ContactUsBar content={RecentText} btnTxt="Contact Us"/>
      <ContactUsForm />

      <TrustedByBrands />

    </>
  )
}

export default Content