import React from "react";

const PlansCards = () => {
  return (
    <section class="pricing-area pricing-default-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <h2 class="title">
                CHOOSE YOUR <span>MEMBERSHIP</span>
              </h2>
              <div class="desc">
                <p>
                  Gym classes dolor sit amet, consectetur adipiscing elit, sed
                  do eiod tempor <br />
                  didunt ut labore et dolore m et dolore magna aliqua minim niam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="pricing-item mb-sm-50">
              <div class="pricing-title">
                <h5>BASIC</h5>
              </div>
              <div class="pricing-thumb pricing-thumb-style1">
                <img src="assets/img/photos/pricing1.png" alt="Image" />
              </div>
              <div class="pricing-amount">
                <h2>$120</h2>
                <h3>per month</h3>
              </div>
              <div class="pricing-content">
                <ul class="pricing-list">
                  <li>6 hour access to the gym.</li>
                  <li>5 Instrument to use.</li>
                  <li>3 class per week</li>
                  <li>One month membership</li>
                  <li>Free drinking package</li>
                  <li>One personal instructor</li>
                </ul>
              </div>
              <div class="pricing-footer">
                <div class="pricing-footer-inner">
                  <a href="#/" class="btn btn-theme">
                    JOIN TODAY
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="pricing-item mb-sm-50">
              <div class="pricing-title">
                <h5>SILVER</h5>
              </div>
              <div class="pricing-thumb pricing-thumb-style2">
                <img src="assets/img/photos/pricing2.png" alt="Image" />
              </div>
              <div class="pricing-amount">
                <h2>$165</h2>
                <h3>per month</h3>
              </div>
              <div class="pricing-content">
                <ul class="pricing-list">
                  <li>Unlimited access to the gym.</li>
                  <li>20 Instrument to use.</li>
                  <li>5 class per week</li>
                  <li>Six month membership</li>
                  <li>Free drinking package</li>
                  <li>Two personal instructor</li>
                </ul>
              </div>
              <div class="pricing-footer">
                <div class="pricing-footer-inner">
                  <a href="#/" class="btn btn-theme">
                    JOIN TODAY
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="pricing-item">
              <div class="pricing-title">
                <h5>GOLD</h5>
              </div>
              <div class="pricing-thumb pricing-thumb-style3">
                <img src="assets/img/photos/pricing3.png" alt="Image" />
              </div>
              <div class="pricing-amount">
                <h2>$225</h2>
                <h3>per month</h3>
              </div>
              <div class="pricing-content">
                <ul class="pricing-list">
                  <li>Unlimited access to the gym.</li>
                  <li>All Instrument to use.</li>
                  <li>7 class per week</li>
                  <li>One year membership</li>
                  <li>Free drinking package</li>
                  <li>Five personal instructor</li>
                </ul>
              </div>
              <div class="pricing-footer">
                <div class="pricing-footer-inner">
                  <a href="#/" class="btn btn-theme">
                    JOIN TODAY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansCards;
