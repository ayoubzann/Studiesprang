import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Feedback1 from "./AI-Feedback/Feedback1";
import Feedback2 from "./AI-Feedback/Feedback2";
import Feedback3 from "./AI-Feedback/Feedback3";
import "./SensorcardD.css"; // Import CSS file

const SSlideD = ({ handleRestart, apiRes1, apiRes2, apiRes3 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="aisensor-feedback">
      <div className="flex flex-col items-center">
        <CSSTransition
          in={currentPage === 1}
          timeout={500}
          classNames="slide"
          unmountOnExit
        >
          <Feedback1
            apiRes1={apiRes1}
            setCurrentPage={setCurrentPage}
          />
        </CSSTransition>
        <CSSTransition
          in={currentPage === 2}
          timeout={500}
          classNames="slide"
          unmountOnExit
        >
          <Feedback2
            apiRes2={apiRes2}
            setCurrentPage={setCurrentPage}
          />
        </CSSTransition>
        <CSSTransition
          in={currentPage === 3}
          timeout={500}
          classNames="slide"
          unmountOnExit
        >
          <Feedback3
            apiRes3={apiRes3}
            setCurrentPage={setCurrentPage}
            handleRestart={handleRestart}
          />
        </CSSTransition>
      </div>
    </div>
  );
};

export default SSlideD;
