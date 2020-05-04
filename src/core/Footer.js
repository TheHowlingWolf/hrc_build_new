import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid text-center p-3"
      style={{ backgroundColor: "#222326", color: "white" }}
    >
      <div className="row">
        <div className="col font-weight-bold">
          Made from scratch using
          <span className="text-danger"> &nbsp;MERN </span>
          with &nbsp;
          <i className="fa fa-gratipay fa-2x fa-spin text-danger"></i>
          &nbsp;&nbsp; by
          <span className="text-danger"> &nbsp;HOUSE HELSINKI</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
