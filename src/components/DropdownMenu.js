import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ sendDataToParent }) => {
  const handleClick = () => {
    const data = false;
    sendDataToParent(data);
  };
  return (
    <div
      className="container-fluid position-absolute"
      style={{ backgroundColor: "#E9EEF4", zIndex: "1", top: "22%" }}
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
                SMM
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                SEO
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Email
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                PPC
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                SMO
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                SEM
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
                Logo Desing
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Branding Materials
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Brochure
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Company Profiles
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Catalogs
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Video Editing Photoshoot t/Video Graphics Packaging
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Photoshoot t/Video Graphics
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Packaging
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
                Explainer videos
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Product Listings
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Ecommerce seo
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Ecommerce PPC
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Social Media Shops
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Google Shop
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
                Website
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Copywriting
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Proofreading
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Blogs/Articles
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleClick} className="text-white">
                Content Curation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
