import React from "react";

const Hero = ({ heading, text }) => {
  return (
    <section className="page-title-area bg-img hero-banner-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-title-content content-style2">
              <h2 className="title">
                <span>{heading}</span>
              </h2>
              <div className="desc">
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
