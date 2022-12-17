import React, { useState } from "react";
import { trainerData } from "../utils";
import Hero from "../components/Hero";
import TrainerCards from "../components/trainers/TrainerCards";

const Trainers = () => {
  const [trainers, setTrainers] = useState(trainerData);
  return (
    <main class="main-content">
      <Hero heading="OUR TRAINERS" />
      <TrainerCards trainers={trainers} />
    </main>
  );
};

export default Trainers;
