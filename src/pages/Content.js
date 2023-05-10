import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import RecentResult from '../components/RecentResult'
import heroBg from "../assets/ContentImage.jpg";
import ToolsWeUseContent from '../components/ToolsWeUseContent';
import ContactUsBar from '../components/ContactUsBar';
import TrustedByBrands from '../components/TrustedByBrands';
import ContactUsForm from '../components/ContactUsForm';
import Breadcrumbs from '../components/Breadcrumbs';


const Content = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    
      const HeroTitel = "Content";
      const HeroContent =
        "Bringing your brand voice out to the public is as important as making flawless products. Let us help you with your content creation on all fronts.        ";
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
      <Breadcrumbs/>
      <ToolsWeUseContent/>
      <ContactUsBar/>
      <ContactUsForm />

      <TrustedByBrands />

    </>
  )
}

export default Content