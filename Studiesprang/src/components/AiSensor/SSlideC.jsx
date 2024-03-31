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
      <img className="loading" src="./images/processing.gif" />
      <h2 className="animate-pulse text-3xl font-extrabold">AI jobber med saken...</h2>
      <br/>
      <br/>
      <button onClick={handleNextPage}>Neste side</button>
    </div>
  );
};

export default SSlideC;
