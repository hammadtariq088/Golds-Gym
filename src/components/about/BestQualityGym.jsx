import React from "react";
import Img from "../Img";
import LinkButton from "../LinkButton";

const BestQualityGym = () => {
  return (
    <section className="about-area about-inner-area position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title stitle-style2 text-left text-lg-center">
              <div className="subtitle">WELCOME TO Golds Gym</div>
              <h2 className="title">
                BEST <span>GYM STATION </span>FOR YOU BECAUSE
                <br />
                WE PROVIDE <span>BEST </span>QUALITY OF&nbsp;
                <span>
                  EQUIPMENTS <br />
                </span>
                AS WELL AS <span className="underline">INSTRACTORS</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 order-1 order-lg-0">
            <div className="thumb">
              <Img src="assets/img/about/best.png" alt="Image" />
            </div>
          </div>
          <div className="col-lg-5 order-0 order-lg-1">
            <div className="about-content">
              <div className="desc">
                <p>
                  Gym is very important to maintain our health luptas sit fugit,
                  sed quia cuuntur magni dolores eos qui rat ione volupta
                  pleasure rationally encounter consequences that are extremely
                </p>
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
                <div className="inline-style">
                  <LinkButton className="btn btn-theme" url="/plans">
                    LET’S START
                  </LinkButton>
                  <div className="btn-play-box">
                    <a
                      className="btn-play play-video-popup"
                      href="https://www.youtube.com/watch?v=X4aKpjO2Nk4"
                    >
                      <Img src="assets/img/icons/play-btn1.png" alt="Image" />
                      INTRO VIDEO
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-group">
        <div className="shape-img3">
          <Img src="assets/img/photos/shape1.png" alt="Image" />
        </div>
      </div>
    </section>
  );
};

export default BestQualityGym;
