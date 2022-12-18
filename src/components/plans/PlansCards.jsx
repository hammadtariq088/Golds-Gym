import React, { useState } from "react";
import { gymPlans } from "../../utils";
import Button from "../Button";
import Img from "../Img";

const PlansCards = () => {
  const [plans, setPlans] = useState(gymPlans);
  return (
    <section className="pricing-area pricing-default-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="title">
                CHOOSE YOUR <span>MEMBERSHIP PLAN</span>
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
          {plans.map((plansData) => {
            const { id, name, price, duration, features, src } = plansData;
            return (
              <div className="col-md-4" key={id}>
                <div className="pricing-item mb-sm-50">
                  <div className="pricing-title">
                    <h5>{name}</h5>
                  </div>
                  <div className="pricing-thumb pricing-thumb-style1">
                    <Img src={src} alt="Image" />
                  </div>
                  <div className="pricing-amount">
                    <h2>{price}</h2>
                    <h3>{duration}</h3>
                  </div>
                  <div className="pricing-content">
                    <ul className="pricing-list">
                      {features.map((list) => {
                        return <li>{list}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="pricing-footer">
                    <div className="pricing-footer-inner">
                      <Button className="btn btn-theme">JOIN NOW</Button>
                    </div>
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

export default PlansCards;
