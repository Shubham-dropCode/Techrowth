import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactUsForm from "../components/ContactUsForm";
import TrustedByBrands from "../components/TrustedByBrands";
const WhoWeArePage = () => {
  return (
    <>
      <Breadcrumbs />
      <WhoWeAre />
      {/* who we are */}
      <ContactUsForm />
      <TrustedByBrands />
    </>
  );
};

export default WhoWeArePage;
