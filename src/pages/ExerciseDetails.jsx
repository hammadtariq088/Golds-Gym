import { React, useState, useEffect } from "react";
import SingleExerciseDetail from "../components/exercisedetails/SingleExerciseDetail";
import ExerciseVideos from "../components/exercisedetails/ExerciseVideos";
// import SimilarExercises from "../components/exercisedetails/SimilarExercises";
import Hero from "../components/Hero";
import { exerciseOptions, fetchExerciseData, youtubeOptions } from "../utils";
import { useParams } from "react-router-dom";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  // const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  // const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchExerciseData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchExerciseData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      // const targetMuscleExercisesData = await fetchExerciseData(
      //   `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
      //   exerciseOptions
      // );
      // setTargetMuscleExercises(targetMuscleExercisesData);

      // const equimentExercisesData = await fetchExerciseData(
      //   `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
      //   exerciseOptions
      // );
      // setEquipmentExercises(equimentExercisesData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <>
      <Hero heading="EXERCISE DETAILS" />
      <section className="product-area shop-single-product">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SingleExerciseDetail exerciseDetail={exerciseDetail} />
              <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
              />
              {/* <SimilarExercises
                targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises}
              /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExerciseDetails;
