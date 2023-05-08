import React from "react";
import bgImg from "../assets/rectangle-40292@2x.png";

const ContactUsBar = () => {
  return (
    <div className="container my-5">
      <div
        className="row d-flex p-5"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          borderRadius: "30px",
        }}
      >
        <div className="col-8 my-1 a p-0">
          <p className="text-white" style={{ fontSize: "18px" }}>
            Interested in Getting In ? <br />
            Discover how Techrowth can help grow your Business.
          </p>
        </div>
        <div className="col-4 text-center d-flex justify-content-center align-items-center">
          <button
            type="button"
            class="btn btn-light w-auto"
            style={{ borderRadius: "15px" }}
          >Book a consultant</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBar;
