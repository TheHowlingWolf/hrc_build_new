import React from "react";
import Map from "../../map/Map";

const OurNetwork = () => {
  return (
    <section className="section-full-height" style={{ color: "white" }}>
      <div className="container-fluid h-100 text-center">
        <div className="row w-100 justify-content-center align-items-center">
          <div className="col-12 ">
            <p className="display-3 font-weight-bolder pt-5">Our Network</p>
            <p className="h4">We Are Spread All Over Your Country</p>
            <Map/>
          </div>

          <div className="col-12 align-self-center extrapadding">

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNetwork;
