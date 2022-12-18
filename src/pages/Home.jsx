import React from "react";
import MainHero from "../components/home/MainHero";
import BestQualityGym from "../components/about/BestQualityGym";
import GymFeatures from "../components/about/GymFeatures";
import FeatureCards from "../components/about/FeatureCards";
import FitnessGallery from "../components/home/FitnessGallery";
import GymClasses from "../components/home/GymClasses";

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
      <FeatureCards />
      <BestQualityGym />
      <GymFeatures />
      <FitnessGallery />
      <GymClasses />
    </main>
  );
};

export default Home;
