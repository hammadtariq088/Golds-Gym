import React, { useState } from "react";
import Img from "../Img";
import { featuredData } from "../../utils";

const GymFeatures = () => {
  const [features, setFeatures] = useState(featuredData);
  return (
    <section className="features-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="featured-columns-wrap">
              <div className="featured-items-style2 bg-img">
                <div className="row row-gutter-0">
                  {features.map((features) => {
                    const { id, src, title, text } = features;
                    return (
                      <div className="col-md-6" key={id}>
                        <div className="featured-item">
                          <div className="featured-icon">
                            <Img src={src} alt="Image" />
                          </div>
                          <div className="featured-info">
                            <h4>{title}</h4>
                            <p>{text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="featured-discount-item">
                <div className="thumb"></div>
                <div className="content">
                  <h2>35%</h2>
                  <h3>DISCOUNT</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymFeatures;
