import React from "react";
import Hero from "../components/Hero";
import BestQualityGym from "../components/about/BestQualityGym";
import GymFeatures from "../components/about/GymFeatures";
import FeatureCards from "../components/about/FeatureCards";

const About = () => {
  return (
    <>
      <Hero
        heading="ABOUT US"
        text="Gym is very important to maintain our health luptas sit fugit, sed quia cuuntur magni dolores eos qui rat ione volupta"
      />
      <BestQualityGym />
      <GymFeatures />
      <FeatureCards />
    </>
  );
};

export default About;
