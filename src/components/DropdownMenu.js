import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({sendDataToParent}) => {
  const handleClick = () => {
    const data = false;
    sendDataToParent(data);
  };
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#E9EEF4", zIndex: "1" }}
    >
      <div className="row py-4 px-4" style={{ gap: "2rem" }}>
        <div className="col text-white" style={{ backgroundColor: "#0076A2" }}>
          <ul className="text-center px-0 py-3">
            <li>
              <Link to="/IntentPrototype" onClick={handleClick}>
                <h5 className="text-white">Intent We Serve</h5>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Enquiry/ Lead Generation
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Cross Selling/Up selling
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Reactivation
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Remarketing
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Engagment
              </Link>
            </li>
            <li>
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
              </Link>
            </li>
          </ul>
        </div>
        <div className="col text-white" style={{ backgroundColor: "#0076A2" }}>
          <ul className="text-center px-0 py-3">
            <li>
              <Link to="/SocialMediaServices" onClick={handleClick}>
                <h5 className="text-white">Services</h5>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Enquiry/ Lead Generation
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Cross Selling/Up selling
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Reactivation
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Remarketing
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Engagment
              </Link>
            </li>
            <li>
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
              </Link>
            </li>
          </ul>
        </div>
        <div className="col text-white" style={{ backgroundColor: "#0076A2" }}>
          <ul className="text-center px-0 py-3">
            <li>
              <Link to="/GraphicDesign" onClick={handleClick}>
                <h5 className="text-white">Graphic & Design</h5>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Enquiry/ Lead Generation
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Cross Selling/Up selling
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Reactivation
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Remarketing
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Engagment
              </Link>
            </li>
            <li>
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
              </Link>
            </li>
          </ul>
        </div>
        <div className="col text-white" style={{ backgroundColor: "#0076A2" }}>
          <ul className="text-center px-0 py-3">
            <li>
              <Link to="/Ecommerce" onClick={handleClick}>
                <h5 className="text-white">E-Commerce</h5>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Enquiry/ Lead Generation
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Cross Selling/Up selling
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Reactivation
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Remarketing
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Engagment
              </Link>
            </li>
            <li>
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
              </Link>
            </li>
          </ul>
        </div>
        <div className="col text-white" style={{ backgroundColor: "#0076A2" }}>
          <ul className="text-center px-0 py-3">
            <li>
              <Link to="/Content" onClick={handleClick}>
                <h5 className="text-white">Content</h5>
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Enquiry/ Lead Generation
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Cross Selling/Up selling
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Reactivation
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Remarketing
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Engagment
              </Link>
            </li>
            <li>
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
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
