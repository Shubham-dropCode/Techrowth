import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ breadcrumb }) => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#0076A2" }}>
      <div className="row p-3 ms-1">
        {breadcrumb.map((item) => (
          <div className="text-white" key={item.path}>
            <Link to={item.path} className="text-white">{item.name}</Link>
          </div>
        ))}
        {/* <li className="breadcrumb-item" key={item.path}>
            <Link to={item.path}>{item.name}</Link>
          </li> */}
      </div>
    </div>
  );
};

export default Breadcrumbs;
