import React from "react";
import Hero from "../components/Hero";
import AllExercises from "../components/exercises/AllExercises";

const Exercises = () => {
  return (
    <>
      <Hero
        heading="EXERCISES"
        text="Gym is very important to maintain our health luptas sit fugit, sed quia cuuntur magni dolores eos qui rat ione volupta"
      />
      <AllExercises exercisesPerPage={12} />
    </>
  );
};

export default Exercises;
