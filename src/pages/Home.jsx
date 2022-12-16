import React from "react";
import Img from "../components/Img";
import LinkButton from "../components/LinkButton";

const Home = () => {
  return (
    <main className="main-content">
      {/* <!--== Start Hero Area Wrapper ==--> */}
      <section className="home-slider-area slider-default">
        <div className="home-slider-content">
          <div className="swiper-container home-slider-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                {/* <!-- Start Slide Item --> */}
                <div className="home-slider-item">
                  <div className="bg-thumb bg-img hero-bg"></div>
                  <div className="slider-content-area">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-sm-8 offset-sm-2 col-lg-5 offset-lg-0">
                          <div className="content">
                            <div className="inner-content">
                              <div className="icon">
                                <Img
                                  src="assets/img/icons/g1.png"
                                  alt="Image"
                                />
                              </div>
                              <h2>
                                Time <span>To</span> <span>Get</span> Fit
                              </h2>
                              <p>
                                Gym is very important to maintain our health
                                luptas sit fugit, sed quia cuuntur magni dolores
                                eos qui rat ione volupta
                              </p>
                              <LinkButton url="/contact" className="btn-theme">
                                Contact Now
                              </LinkButton>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <div className="slider-thumb">
                            <Img
                              src="assets/img/slider/hero-img.png"
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Slide Item --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--== End Hero Area Wrapper ==--> */}
    </main>
  );
};

export default Home;
