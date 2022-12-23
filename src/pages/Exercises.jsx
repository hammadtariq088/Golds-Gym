import { React, useState } from "react";
import Hero from "../components/Hero";
import AllExercises from "../components/exercises/AllExercises";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <>
      <Hero
        heading="EXERCISES"
        text="Gym is very important to maintain our health luptas sit fugit, sed quia cuuntur magni dolores eos qui rat ione volupta"
      />
      <AllExercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        exercisesPerPage={4}
      />
    </>
  );
};

export default Exercises;
