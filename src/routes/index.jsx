import React from "react";
import Layout from "../layout";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import About from "../pages/About";
import Contact from "../pages/Contact";
import GymPlans from "../pages/GymPlans";
import Exercises from "../pages/Exercises";
import Trainers from "../pages/Trainers";
import ExerciseDetails from "../pages/ExerciseDetails";
import TrainerDetails from "../pages/TrainerDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { Route, Routes } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercisedetails" element={<ExerciseDetails />} />
        <Route path="/plans" element={<GymPlans />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/trainerdetails" element={<TrainerDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};

export default Index;
