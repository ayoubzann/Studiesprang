import PropTypes from "prop-types";
import "./Styles/f2.css";
import { Blockquote, Carousel } from "flowbite-react";
/* eslint-disable react/prop-types */

const Feedback2 = ({ apiRes2 }) => {
  // Ensure apiRes2 is an object before trying to iterate over its properties
  if (typeof apiRes2 !== "object" || apiRes2 === null) {
    console.error("apiRes2 is not an object:", apiRes2);
    return null; // Return early or handle the error gracefully
  }

  return (
    <div className="feedbacktwo shadow-lg">
      <h1 className="tittel">Grammatikk</h1>
      <br/>
      <p className="text-2xl m-4">AI-sensoren fant følgende grammatiske feil i din tekst:</p>
      <div className="carousel shadow-lg">
        <Carousel slideInterval={8000} pauseOnHover >
          {Object.keys(apiRes2).map((key) => {
            const obj = apiRes2[key]; // Get the object corresponding to the current key
            return (
              <div key={key} className="p-3">
                <Blockquote className="text-2xl text-white">
                  <h3>❌ {obj.sitat} </h3>
                </Blockquote>
                <br />
                <p>Rettelse: {obj.rettelse} <span className="text-2xl">👌</span></p>
              </div>
            );
          })}
        </Carousel>
      </div>
      <button onClick={()=> setCurrentPage(1)}>Forrige side</button>
      <button onClick={()=> setCurrentPage(3)}>Neste side</button>
    </div>
  );
};

Feedback2.propTypes = {
  apiRes2: PropTypes.array.isRequired,
};

export default Feedback2;
