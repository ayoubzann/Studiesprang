import React, { useState, useEffect } from "react";
import { SignIn, SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import "./styles/SensorcardA.css";

const SSlideA = ({ criteria, handleCriteriaChange, setCurrentPage }) => {
  useEffect(() => {
    document.body.classList.add("slideIn"); // Add slide-in animation when component mounts
    return () => {
      document.body.classList.remove("slideIn");
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(2);
  };

  return (
    <div id="aisensor" className="aisensor">
      <SignedOut>
        <div className="sensorcard">
          <h1 className="sensorcard-title">
            Registrer deg eller logg på for å prøve AI-Sensoren gratis👇
          </h1>
          <SignIn />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="aisensor">
          <form className="aiinput" onSubmit={handleSubmit}>
            <label htmlFor="criteria" className="formlabel">
              Vurderingskriterier
            </label>
            <p className="m-12 text-xl">
              Legg inn dine vurderingskriterier her.<br/> Dersom du ikke har noen kriterier, kan du gå videre.<br />
              <strong>OBS! </strong> AI-Sensoren vurderer kun innhold, ikke
              formkrav.
            </p>
            <textarea
              id="criteria"
              value={criteria}
              onChange={handleCriteriaChange}
            />
            <br />
            <br />
            <button className="nextpage" type="submit">
              <p className="nextpage hover:shadow-lg hover:bg-gray-700 shadow">
                Neste side
              </p>
            </button>
          </form>
        </div>
      </SignedIn>
    </div>
  );
};

export default SSlideA;
