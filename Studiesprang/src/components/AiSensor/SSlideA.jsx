import React, { useState } from "react";
import { SignIn, SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import "./styles/SensorcardA.css";

const SSlideA = ( {criteria, handleCriteriaChange, setCurrentPage}) => {

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
            <p className="formdesc">
              Her legger du inn dine vurderingskriterier til oppgavens innhold.
              Merk at AI-sensoren ikke tester tekstformat - altså linjeavstand,
              font, skriftstørrelse o.l.
            </p>
            <textarea id="criteria" value={criteria} onChange={handleCriteriaChange} />
            <br />
            <br />
            <button type="submit">Neste side</button>
          </form>
        </div>
      </SignedIn>
    </div>
  );
};

export default SSlideA;
