import React from "react";
import trainers1 from "../images/trainers1.png";

const Hometrainers = () => {
  return (
    <div className="main-content">
      <section className="about-area about-default-area position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-5 col-xl-5 order-0 order-lg-1 ml-4">
              <div className="about-content">
                <div className="section-title stitle-style2">
                  <div className="subtitle">SCIENCE 1999</div>
                  <h2 className="title">
                    BEST{" "}
                    <span>
                      EQUIPMENTS <br /> &amp; FITNESS{" "}
                    </span>
                    TRAINERS
                  </h2>
                  <div className="desc">
                    <p>
                      Gym is very important to maintain our health luptas sit
                      fugit, sed quia cuuntur magni dolores eos qui rat ione
                      volupta pleasure rationally encounter consequences that
                      are extremely{" "}
                    </p>
                  </div>
                </div>
                <div className="inner-content">
                  <div className="about-list">
                    <ul>
                      <li>Builds Aerobic Power</li>
                      <li>Strong body Structure</li>
                      <li>Boots your Memory</li>
                      <li>Brng about resultful Sleep</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-7 col-xl-7 order-1 order-lg-0">
              <div className="thumb" data-aos="fade-left">
                <img src="assets/img/about/3.png" alt="Image" />
              </div>
            </div> */}
            </div>
            <div className="col-lg-6 col-xl-5 order-0 order-lg-1">
              <img src={trainers1} />
            </div>
          </div>
        </div>
        <div className="shape-group">
          <div className="shape-img1">
            <img src="" alt="Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hometrainers;
