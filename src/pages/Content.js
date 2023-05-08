import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import RecentResult from '../components/RecentResult'
import OneStopSolution1 from '../components/OneStopSolution1'
import heroBg from "../assets/rectangle-216@2x.png";
import ToolsWeUseContent from '../components/ToolsWeUseContent';
import ContactUsBar from '../components/ContactUsBar';
import TrustedByBrands from '../components/TrustedByBrands';
import ContactForm1 from '../components/ContactForm1';


const Content = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    
      const HeroTitel = "Empowering your Online presence, Driving Actual Results";
      const HeroContent =
        "Join the Techrowth Revolution Experience Exceptional Results and elevate your business to new levels with our result-oriented strategy framework BISCCBOR!";
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
      <ToolsWeUseContent/>
      <ContactUsBar/>
      <ContactForm1 />

      <TrustedByBrands />

    </>
  )
}

export default Content