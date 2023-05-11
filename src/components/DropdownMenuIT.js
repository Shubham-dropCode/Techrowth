import React from "react";
import { Link } from "react-router-dom";

const DropdownMenuIT = ({ sendDataToParent }) => {
  const handleClick = () => {
    const data = false;
    sendDataToParent(data);
  };
  const handleMouseLeave = () => {
    const data = false;
    sendDataToParent(data)
  }
  return (
    <div className="container-fluid position-absolute" style={{ backgroundColor: "#E9EEF4",top:"22%",zIndex:"1" }}>
      <div className="row py-4 px-4" style={{ gap: "2rem" }}>
        <div className="col text-white" style={{ backgroundColor: "#0076A2" }}>
          <ul className="text-center px-0 py-3">
            <li>
              <Link to="/DevelopmentPage" onClick={handleClick}>
                <h5 className="text-white">Development</h5>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                CMS
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Websites
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Website Accessibility
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Application
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Mobile Application
              </Link>
            </li>
            {/* <li>
              <Link to="" onClick={handleClick} className="text-white">
                Branding
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Redownloading
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                downloading
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Ecommerce Service
              </Link> */}
            {/* </li> */}
          </ul>
        </div>
        <div className="col text-white" style={{ backgroundColor: "#0076A2" }}>
          <ul className="text-center px-0 py-3">
            <li>
              <Link to="/UiUxInterface" onClick={handleClick}>
                <h5 className="text-white">UI/UX Interactive</h5>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                UI/UX Website Design
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                UI/UX Website Redesign
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                User Experience Testing
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Landing Pages & Funnels
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Conversion Rate Optimization
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Rapid Web Design
              </Link>
            </li>
            {/* <li>
              <Link to="" onClick={handleClick} className="text-white">
                Redownloading
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                downloading
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Ecommerce Service
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="col text-white" style={{ backgroundColor: "#0076A2" }}>
          <ul className="text-center px-0 py-3">
            <li>
              <Link to="/ITMain" onClick={handleClick}>
                <h5 className="text-white">IT Management</h5>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Consulting
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Infrastructure
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Tech Support
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Software as a Service
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                End-User IT Services
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Cloud Services
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Data Center Services
              </Link>
            </li>
            {/* <li>
              <Link to="" onClick={handleClick} className="text-white">
                downloading
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Ecommerce Service
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="col text-white" style={{ backgroundColor: "#0076A2" }}>
          <ul className="text-center px-0 py-3">
            <li>
              <Link to="/IntegrationPage" onClick={handleClick}>
                <h5 className="text-white">Integration</h5>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Salesforce
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Adobe
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Power BI
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Zoho
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Dynamic 365
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Tableau
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Qlik Sense
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Domo
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Klipfolio
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Looker
              </Link>
            </li>
          </ul>
        </div>
        <div className="col text-white" style={{ backgroundColor: "#0076A2" }}>
          <ul className="text-center px-0 py-3">
            <li>
              <Link to="/qualityTestingPage" onClick={handleClick}>
                <h5 className="text-white">Quality Testing</h5>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Database & Platform Testing
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Functional & Security Testing
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Usability Testing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenuIT;
