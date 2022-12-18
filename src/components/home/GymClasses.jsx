import React, { useState } from "react";
import Img from "../Img";
import { Link } from "react-router-dom";
import { gymClasses } from "../../utils";

const GymClasses = () => {
  const [classes, setClasses] = useState(gymClasses);
  return (
    <section className="service-area service-default-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="title">
                <span>CLASSES </span>WE PROVIDE
              </h2>
              <div className="desc">
                <p>
                  Gym classes dolor sit amet, consectetur adipiscing elit, sed
                  do eiod tempor <br />
                  didunt ut labore et dolore m et dolore magna aliqua minim niam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-12 offset-lg-0">
            <div className="row">
              {classes.map((classes) => {
                const { id, title, mins, src } = classes;
                return (
                  <div className="col-sm-6 col-lg-4" key={id}>
                    <div className="service-item">
                      <div className="inner-content">
                        <div className="thumb">
                          <Link to="#">
                            <span>
                              <Img src={src} alt="Image" />
                            </span>
                          </Link>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <Link to="#">{title}</Link>
                          </h4>
                          <h4 className="class-time">{mins}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymClasses;
