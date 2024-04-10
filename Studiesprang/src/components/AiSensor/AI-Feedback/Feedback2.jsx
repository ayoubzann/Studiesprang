import PropTypes from "prop-types";
import "./Styles/f2.css";
import { Accordion, AccordionItem } from "@nextui-org/react";
/* eslint-disable react/prop-types */

const Feedback2 = ({ apiRes2, setCurrentPage }) => {
  // Ensure apiRes2 is an object before trying to iterate over its properties
  if (typeof apiRes2 !== "object" || apiRes2 === null) {
    console.error("apiRes2 is not an object:", apiRes2);
    return null; // Return early or handle the error gracefully
  }

  const itemClasses = {
    base: "py-0 w-auto bg-success-100",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-3 data-[hover=true]:bg-success-200 bg-success-100 rounded-full h-auto flex items-center",
    indicator: "text-2xl",
    content: "text-small px-2",
  };

  return (
    <div className="feedbacktwo shadow-lg">
      <h1 className="tittel">Grammatikk</h1>
      <br />
      <p className="text-2xl m-4">
        AI-sensoren fant følgende grammatiske feil i din tekst:
      </p>
        {Object.keys(apiRes2).map((key) => {
          const obj = apiRes2[key];
          return (
            <Accordion key={key} itemClasses={itemClasses} className="accordion">
              <AccordionItem className="accs flex flex-col text-center"
              variant="splitted"
              title={
                <div>
                <p className="text-center">SITAT</p>
                <p className="text-2xl text-center"> "{obj.sitat}"</p>
                </div>
              }
              >
                <p className="text-xl mb-2">Foreslått rettelse:</p>
                <p className="text-2xl">"{obj.rettelse}"</p>
              </AccordionItem>
            </Accordion>
          );
        })}
      <div className=" flex space-between justify-center w-full gap-2">
        <button onClick={() => setCurrentPage(1)} className="nextpage">
          Forrige side
        </button>
        <button onClick={() => setCurrentPage(3)} className="nextpage">
          Neste side
        </button>
      </div>
    </div>
  );
};

Feedback2.propTypes = {
  apiRes2: PropTypes.array.isRequired,
};

export default Feedback2;
