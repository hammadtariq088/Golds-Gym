import React from "react";

const ExerciseCards = ({ currentExercises }) => {
  return (
    <section className="product-area product-grid-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="product-content-area">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="product-item">
                    <div className="product-thumb">
                      <a href="shop-single-product.html">
                        <img src="assets/img/shop/2.jpg" alt="Image" />
                      </a>
                      <div className="product-action">
                        <a className="btn-theme" href="shop-cart.html">
                          View More
                        </a>
                      </div>
                    </div>
                    <div className="product-info">
                      <h4 className="title">
                        <a href="shop-single-product.html">Fitness Slam Ball</a>
                      </h4>
                      <div className="prices">
                        <span className="price">$48.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="product-btn">
                    <a className="btn-border mt-10" href="shop.html">
                      VIEW ALL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExerciseCards;
