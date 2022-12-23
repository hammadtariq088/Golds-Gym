import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchExerciseData } from "../../utils";
import ExerciseCards from "./ExerciseCards";
import ReactPaginate from "react-paginate";

const AllExercises = ({
  exercises,
  setExercises,
  bodyPart,
  exercisesPerPage,
}) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [exercisesPerPage] = useState(6);
  useEffect(() => {
    const fetchExercisesData = async () => {
      console.log(exercises);
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchExerciseData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchExerciseData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
        console.log(exercisesData)
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, exercises, setExercises]);

  // Pagination

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [exercisesOffset, setExercisesOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = exercisesOffset + exercisesPerPage;
  console.log(`Loading excercises from ${exercisesOffset} to ${endOffset}`);
  const currentExercises = exercises.slice(exercisesOffset, endOffset);
  const pageCount = Math.ceil(exercises.length / exercisesPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * exercisesPerPage) % exercises.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setExercisesOffset(newOffset);
  };

  return (
    <>
      <ExerciseCards currentExercises={currentExercises} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default AllExercises;
