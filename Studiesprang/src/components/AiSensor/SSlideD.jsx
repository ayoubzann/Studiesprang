import { useState } from "react";
import Feedback1 from "./AI-Feedback/Feedback1";
import Feedback2 from "./AI-Feedback/Feedback2";
import Feedback3 from "./AI-Feedback/Feedback3";
import "./styles/SensorcardD.css";

const SSlideD = ({ handleRestart, apiRes1, apiRes2, apiRes3 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="aisensor-feedback">
      <div className="flex flex-col items-center">
        {currentPage === 1 && <Feedback1
            apiRes1={apiRes1}
            setCurrentPage={setCurrentPage}
          />}
          {
            currentPage === 2 && 
            <Feedback2
            apiRes2={apiRes2}
            setCurrentPage={setCurrentPage}
          />
          }
          {currentPage === 3 && 
          <Feedback3
          apiRes3={apiRes3}
          setCurrentPage={setCurrentPage}
          handleRestart={handleRestart}
          />
        }
      </div>
    </div>
  );
};

export default SSlideD;
