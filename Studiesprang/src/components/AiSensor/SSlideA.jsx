import React, { useState } from "react";
import { SignIn, SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import { Document, Page, pdfjs } from "react-pdf"; // Correct import
import { Worker } from "@react-pdf-viewer/core"; // Import Worker from @react-pdf-viewer/core
import "./styles/SensorcardA.css";

const SSlideA = ( {criteria, handleCriteriaChange, setCurrentPage}) => {
  // const [criteria, setCriteria] = useState("");
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState();

  const onFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    pdfjs.getDocument(URL.createObjectURL(uploadedFile)).promise.then(
      (pdfDocument) => {
        setNumPages(pdfDocument.numPages);
      }
    );
  };


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
            {/* <label htmlFor="pdffil" className="formlabel">
              Last opp din fil
            </label>
            <p className="formdesc">
              Merk at teksten ikke kan overskride 10.000 ord per sensorretting.
            </p>
            <input
              id="pdffil"
              type="file"
              accept=".pdf"
              onChange={onFileChange}
            /> */}
            <button type="submit">Neste side</button>
          </form>
          {/* {file && (
        <>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
            <Document file={file}>
              <Page
                pageNumber={pageNumber}
                height={800}
                width={window.innerWidth} // Set the width of the page
              />
            </Document>
          </Worker>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <div>
            <button onClick={onPrevPage} disabled={pageNumber === 1}>
              Previous Page
            </button>
            <button onClick={onNextPage} disabled={pageNumber === numPages}>
              Next Page
            </button>
          </div>
        </>
      )} */}
        </div>
      </SignedIn>
    </div>
  );
};

export default SSlideA;
