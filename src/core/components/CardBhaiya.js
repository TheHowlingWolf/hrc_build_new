import React from "react";
import prof from "../../img/ElProf.jpg";
import soham from "../../img/InkedOptimized-soham_LI.jpg";
const CardBhaiya = () => {
  return (
    <section className="bhaiyaCard">
      <div className="container h-100 py-5 text-center">
        <div className="row justify-content-center align-item-center">
          <div className="col align-self center">
            <p className="display-4 text-white font-weight-bold">Introducing</p>
          </div>
        </div>
        <div className="row justify-content-center align-item-center w-100 p-2">
          <div
            className="col-4 align-self-center border p-0"
            style={{ backgroundColor: "#ffffff" }}
          >
            <img
              className="img-fluid rounded
          "
              src={soham}
              alt=""
              width="100%"
              style={{ borderRadius: "100px,0px,50px,0px ;" }}
            />
            <p className="h1 font-weight-bold text-darks">Soham Pathak</p>
          </div>
          <div className="col-4 align-self-center">
            <p className="display-2 font-weight-bolder text-light p-0">A.K.A</p>
          </div>
          <div className="col-4 align-self-center">
            <img className="img-fluid rounded" src={prof} alt="" height="60%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardBhaiya;
