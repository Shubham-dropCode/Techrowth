import React from "react";
import bgImg from "../assets/rectangle-40292@2x.png";

const ContactUsBar = ({ content, btnTxt }) => {
  return (
    <div className="container my-5" style={{ padding: "0 4rem" }}>
      <div
        className="row d-flex p-5"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          borderRadius: "30px",
        }}
      >
        <div
          className="col-8 my-1 a p-0 text-white text-left d-flex align-items-center"
          style={{ fontSize: "18px" }}
        >
          {content}
        </div>
        <div className="col-4 text-center d-flex justify-content-end align-items-center">
          <button
            type="button"
            className="btn btn-light w-75"
            style={{ borderRadius: "15px", color: "#0076A2" }}
          >
            <b>{btnTxt}</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBar;
