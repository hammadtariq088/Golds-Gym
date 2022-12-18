import React, { useState } from "react";
import Img from "../Img";
import { Link } from "react-router-dom";
import { fitnessGallery } from "../../utils";

const FitnessGallery = () => {
  const [gallery, setGallery] = useState(fitnessGallery);
  return (
    <section className="gallery-area gallery-default-area my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-4 pr-0">
            <div className="section-title stitle-style2">
              <div className="subtitle">FITNESS GALLERY</div>
              <h2 className="title">
                BELIEVE IN&nbsp;
                <span>
                  YOURSELF, <br />
                  BE FIT&nbsp;
                </span>
                & HEALTHIER
              </h2>
            </div>
          </div>
          <div className="col-md-6 col-xl-8 d-none d-md-block text-center text-md-end">
            <Link to="/plans" className="btn-theme">
              Join Us
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row">
          {gallery.map((gallery) => {
            return (
              <div
                className="col-lg-3 col-md-3 col-sm-6 col-xs-6"
                key={gallery.id}
              >
                <div className="gallery-item">
                  <div className="thumb">
                    <a
                      className="lightbox-image"
                      data-fancybox="gallery"
                      href={gallery.href}
                    >
                      <Img src={gallery.src} alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FitnessGallery;
