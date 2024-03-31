import PropTypes from "prop-types";
import "./Styles/f3.css";
import { Blockquote } from "flowbite-react";
import { Divider } from "@chakra-ui/react";

const Feedback3 = ({ apiRes3, setCurrentPage, handleRestart }) => {
  // Ensure apiRes3 is an object before trying to iterate over its properties
  if (typeof apiRes3 !== "object" || apiRes3 === null) {
    console.error("apiRes3 is not an object:", apiRes3);
    return null; // Return early or handle the error gracefully
  }

  return (
    <div className="feedbackthree shadow-lg">
      <br/>
      <h3 className="tittel">Argumentativ teknikk</h3>
      <br />
      {Object.keys(apiRes3).map((key) => {
        const obj = apiRes3[key]; // Get the object corresponding to the current key
        return (
          <div key={key} className="feedbackitem">
            <div className="sitatboks">
              <Blockquote className="text-2xl">"{obj.sitat}"</Blockquote>
            </div>
            <div className="eval">
            <p >{obj.evaluering}</p>
            </div>
            <br></br>
            <br></br>
            <Divider/>
          </div>
        );
      })}
      <button onClick={()=> setCurrentPage(2)}> Forrige side </button>
      <button onClick={handleRestart}>
        <div className="nextpage hover:shadow-lg hover:bg-gray-700 shadow">
          Ny sensorretting
        </div>
        </button>
    </div>
  );
};

Feedback3.propTypes = {
  apiRes3: PropTypes.array.isRequired,
};

export default Feedback3;
