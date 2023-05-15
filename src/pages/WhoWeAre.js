import React, { useEffect, useState } from "react";
import WhoWeAre from "../components/WhoWeAre";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactUsForm from "../components/ContactUsForm";
import TrustedByBrands from "../components/TrustedByBrands";
const WhoWeArePage = () => {
  const [breadcrumb, setBreadcrumb] = useState([]);
  useEffect(() => {
    setBreadcrumb([
      { name: "Home >", path: "/" },
      { name: "Who we are", path: "/WhoWeAre" },
    ]);
  }, []);
  return (
    <>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <WhoWeAre />
      {/* who we are */}
      <ContactUsForm />
      <TrustedByBrands />
    </>
  );
};

export default WhoWeArePage;
