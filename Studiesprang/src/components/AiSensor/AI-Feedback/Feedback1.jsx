import { Divider } from "@chakra-ui/react";
import "./Styles/f1.css";

/* eslint-disable react/prop-types */
const Feedback1 = ({ apiRes1, setCurrentPage }) => {
  // Ensure apiRes1 is an object before trying to iterate over its properties
  if (typeof apiRes1 !== "object" || apiRes1 === null) {
    console.error("apiRes1 is not an object:", apiRes1);
    return null; // Return early or handle the error gracefully
  }


  return (
    <div className="feedbackone shadow-lg">
      <br/>
      <h3 className="tittel"> Vurdering mot kriterier</h3>
      {Object.keys(apiRes1).map((key) => {
        const obj = apiRes1[key]; // Get the object corresponding to the current key
        return (
          <div key={key} className="boxholder ">
            <div className="boxholder-contents">
              <h4 className="mellomoverskrift">{obj.mellomoverskrift}</h4>
              <br />
              <div className="resp">
                <p>{obj.respons}</p>
              </div>
            </div>
            <Divider />
          </div>
        );
      })}
      <button onClick={()=> setCurrentPage(2)}> Neste side </button>
    </div>
  );
};

export default Feedback1;
