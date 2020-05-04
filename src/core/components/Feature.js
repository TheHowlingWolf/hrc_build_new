import React from "react";
import "../../styles.css";

const Feature = () => {
  return (
    <section className="feature-section-home">
      <div id="particles-js"></div>
      <div className="container-fluid d-flex h-100 text-center">
        <div className="row w-100 justify-content-center align-items-center">
          <div className="col-md-12 align-self-end">
            <h2
              className="display-3 font-weight-bold"
              style={{ padding: "20px", color: "#222326" }}
            >
              We Are <span className="occs" style={{ color: "white" }}></span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
