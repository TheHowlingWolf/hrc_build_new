import React from "react";
import Base from "./Base";
import Feature3 from "./components/Feature3";
import Homevideo from "./components/Homevideo";
import CardBhaiya from "./components/CardBhaiya";

const Activity = () => {
  return (
    <Base>
      <Feature3></Feature3>
      <CardBhaiya></CardBhaiya>
      <div
        className="container-fluid h-100 p-0 text-center"
        style={{ backgroundColor: "rgb(213, 39, 53" }}
      >
        <div className="row justify-content-center align-items-center w-100">
          <div className="col align-self-center text-white py-5">
            <p className="h1 font-weight-bold">
              Ok Wait! We have something for other houses as well...
            </p>
          </div>
        </div>
      </div>
      <Homevideo url="https://youtu.be/PjoneqwaO_8" />
      <div
        className="container-fluid h-100 p-0 text-center"
        style={{ backgroundColor: "rgb(213, 39, 53" }}
      >
        <div className="row justify-content-center align-items-center w-100">
          <div className="col align-self-center text-white py-5">
            <p className="h1 font-weight-bold">
              And some everyday stuff for us...
            </p>
          </div>
        </div>
      </div>
      <Homevideo url="https://youtu.be/cOouEX6DABM" />
    </Base>
  );
};

export default Activity;
