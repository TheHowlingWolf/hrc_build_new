import React from "react";
import SelfQ from "../../img/art-educational-paper-phrase-142815.jpg";
import one from "../../img/01.jpg";
import two from "../../img/02.jpg";
import three from "../../img/03.jpg";
const ThreeQ = () => {
  return (
    <section className="three-ques marginextra text-light py-5">
      <div className="container h-100 p-0 text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <p className="display-3 pt-3 font-weight-bold">Three Questions</p>
            <h4 className="pb-2">Our Answer</h4>
            <hr
              width="80"
              className="my-0"
              style={{ backgroundColor: "white" }}
            />
          </div>
        </div>
      </div>
      <div className="container h-100 py-5  text-left">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src={one} alt="" />
            </div>
          </div>

          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="h1 font-weight-bold text-white">
                About each of you in the House
              </h2>
              <p className="lead pt-2">
                “Being different is not being odd, it’s being unique”
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Ruhaan Chand
                <br />
                We all have different abilities, interests, talents, experience
                and backgrounds and we live life distinctly but as a team, we
                have moved past our differences and accepted our individuality.
                We have realized that being you is the most amazing and integral
                part of our beauty. Different yet connected.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src={two} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <h2 className="h1 font-weight-bold text-white">
                Unique thing about your House
              </h2>
              <p className="lead pt-2">
                “When you have fun then you’re more interested in learning”
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Magnus Carlsen
                <br />
                We as a house believe that work should have a perfect balance of
                fun and learning and we imply that in every step of our
                learning. Using our interests to make learning fun is one of the
                unique thing about our house. Be it ,using memes to understand a
                concept or singing songs to relax our minds, we have done it
                all.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src={three} alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="h1 font-weight-bold text-white">
                Unique thing about you all as a group:
              </h2>
              <p className="lead pt-2">
                “The achievement of an organization are the results of the
                combined effort of each individual"
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Vince Lombardi
                <br />
                We are competitors and have been competing with each other every
                day but as a group we support our members and help them when
                needed. Be it clearing a doubt or discussing till late at night
                for weekly tasks. Helping others voluntarily and making sure the
                task is done before time is what we all do. When needed we come
                together and stand tall as a group. For us Team always comes
                first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeQ;
