import React from "react";
import Img from "../Img";
import LinkButton from "../LinkButton";

const MainHero = () => {
  return (
    <>
      <div className="bg-thumb bg-img hero-bg"></div>
      <div className="slider-content-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-8 offset-sm-2 col-lg-5 offset-lg-0">
              <div className="content">
                <div className="inner-content">
                  <div className="icon">
                    <Img src="assets/img/icons/g1.png" alt="Image" />
                  </div>
                  <h2>
                    Time <span>To</span> <span>Get</span> Fit
                  </h2>
                  <p>
                    Gym is very important to maintain our health luptas sit
                    fugit, sed quia cuuntur magni dolores eos qui rat ione
                    volupta
                  </p>
                  <LinkButton url="/contact" className="btn-theme">
                    Contact Now
                  </LinkButton>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-7">
              <div className="slider-thumb">
                <Img src="assets/img/slider/hero-img.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHero;
