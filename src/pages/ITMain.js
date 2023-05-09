import React from 'react'
import heroBg from "../assets/UIUX.jpg";

import ItMain from '../components/ItMain'
import Hero from '../components/Hero'
import RecentResult from '../components/RecentResult';
import Breadcrumbs from '../components/Breadcrumbs';

const ITMain = () => {
  const HeroTitel = "A service focused on transforming software from good to great!";
  const HeroContent =
    "By using advanced testing techniques we ensure that your software has a strong foundation and a user-friendly interface that won't crumble over time.";
  return (
    
    <>
    <Hero

        title={HeroTitel}
        content={HeroContent}
        MyBackgroundImage={heroBg}
      />
      <RecentResult/>
      <Breadcrumbs/>
    <ItMain/></>
  )
}

export default ITMain