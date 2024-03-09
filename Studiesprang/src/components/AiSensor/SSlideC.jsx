import React from "react";
import { CircularProgress } from "@chakra-ui/react";
import "./styles/SensorcardC.css"

const SSlideC = ({setCurrentPage}) => {
  const handleNextPage = (event) => {
    event.preventDefault();
    setCurrentPage(4);
  }
  return (
    <div className="loadingscreen flex flex-col items-center">
      <CircularProgress
        thickness="6px"
        size="200px"
        isIndeterminate
        color="blue.300"
      />
      <h2 className="animate-pulse text-xl">AI jobber med saken...</h2>
      <button onClick={handleNextPage}>Neste side</button>
    </div>
  );
};

export default SSlideC;
