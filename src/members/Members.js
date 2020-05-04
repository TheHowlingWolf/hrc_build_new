import React, { useEffect } from "react";
import { Jumbotron } from "reactstrap";
import pic from "../img/naturephotography.jpg";
import "./members.css";

const Members = ({ member }) => {
  console.log("mem:", member);
  const pro_pic = `https://hrc-backend.herokuapp.com/api/product/pro_photo/${member.id}`;
  const about_p_url = `https://hrc-backend.herokuapp.com/api/product/about_p/${member.id}`;
  const h1_hob_url = `https://hrc-backend.herokuapp.com/api/product/h1_photo/${member.id}`;
  const h2_fun_url = `https://hrc-backend.herokuapp.com/api/product/h2_photo/${member.id}`;
  const h3_qua_url = `https://hrc-backend.herokuapp.com/api/product/h3_photo/${member.id}`;
  const about_small = member.about;
  return (
    <section
      className="membeers text-light pb-5"
      style={{ backgroundColor: "white !important" }}
    >
      <header className="masthead text-white text-center">
        <div className="container h-100 p-0">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 align-self-center">
              <div className="container d-flex align-items-center flex-column">
                <img
                  className="masthead-avatar mb-5 img-fluid rounded-circle"
                  src={pro_pic}
                  alt=""
                />
                <h1 className="masthead-heading text-uppercase mb-0">
                  {member.name}
                </h1>

                <div className="divider-custom divider-light">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>

                <p className="masthead-subheading font-weight-bold mb-0">
                  Member of House Helsinki
                </p>
                <p className="lead pt-3">-- CodeName {member.roll} --</p>
              </div>
            </div>
            <div className="col-md-6 m-0 p-0 h-100 text-left">
              <p className="display-3 font-weight-bold">
                <i className="fa fa-gratipay fa-2x text-danger"></i>About
                Me......
              </p>
              <p className="h2 font-weight-light pt-3">{member.about}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="content-section-heading text-center">
          <p className="h2 text-dark font-weight-bold mb-5">
            A Peak Into My Life...
          </p>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 p-1">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Who Am I</h2>
                  <p className="lead mb-0">{about_small}</p>
                </span>
              </span>
              <img className="img-fluid" src={about_p_url} alt="" />
            </a>
          </div>
          <div className="col-lg-6 p-1">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>What I love to do</h2>
                  <p className="lead mb-0">{member.hob1}</p>
                </span>
              </span>
              <img className="img-fluid" src={h1_hob_url} alt="" />
            </a>
          </div>
          <div className="col-lg-6 p-1">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>A Funny Memory</h2>
                  <p className="mb-0">{member.hob2}</p>
                </span>
              </span>
              <img className="img-fluid" src={h2_fun_url} alt="" />
            </a>
          </div>
          <div className="col-lg-6 p-1">
            <a className="portfolio-item" href="#">
              <span className="caption">
                <span className="caption-content">
                  <h2>My Quaranting Life</h2>
                  <p className="mb-0">{member.hob3}</p>
                </span>
              </span>
              <img className="img-fluid" src={h3_qua_url} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
