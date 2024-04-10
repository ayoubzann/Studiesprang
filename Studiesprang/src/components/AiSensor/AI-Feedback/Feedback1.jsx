import "./Styles/f1.css";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Feedback1 = ({ apiRes1, setCurrentPage }) => {
  // Ensure apiRes1 is an object before trying to iterate over its properties
  if (typeof apiRes1 !== "object" || apiRes1 === null) {
    console.error("apiRes1 is not an object:", apiRes1);
    return null; // Return early or handle the error gracefully
  }

  const itemClasses = {
    base: "py-0 w-auto bg-warning-100",
    title: "font-normal text-medium",
    trigger:
      "px-2 py-3 data-[hover=true]:bg-warning-200 bg-warning-100 rounded-full h-auto flex items-center",
    indicator: "text-2xl",
    content: "text-small px-2",
  };

  return (
    <div className="feedbackone shadow-lg">
      <br />

      <h3 className="tittel"> Generell vurdering</h3>
      <p className="text-2xl italic w-4/6 mt-2">
        {" "}
        Denne vurderingen tar hovedsakelig utgangspunkt i vurderingskriteriene
        du sendte inn, samt generelle krav til en god tekst.
      </p>
      {Object.keys(apiRes1).map((key) => {
        const obj = apiRes1[key]; // Get the object corresponding to the current key
        return (
          <Accordion key={key} className="accg mb-2" itemClasses={itemClasses}>
            <AccordionItem
              className="accs flex flex-col text-center"
              variant="splitted"
              title={
                <p className="text-3xl text-center font-semibold">
                  {obj.mellomoverskrift}
                </p>
              }
            >
              <p className="text-justify text-2xl p-8">{obj.respons}</p>
            </AccordionItem>
          </Accordion>
        );
      })}

      <button className="nextpage m-2" onClick={() => setCurrentPage(2)}>
        Neste side
      </button>
    </div>
  );
};

export default Feedback1;
