import React from "react";
import MainHero from "../components/home/MainHero";

const Home = () => {
  return (
    <main className="main-content">
      <section className="home-slider-area slider-default">
        <div className="home-slider-content">
          <div className="swiper-container home-slider-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="home-slider-item">
                  <MainHero />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
