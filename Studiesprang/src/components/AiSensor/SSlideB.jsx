import React, { useState } from "react";
import { SignIn, SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import { Document, Page, pdfjs } from "react-pdf"; // Correct import
import { Worker } from "@react-pdf-viewer/core"; // Import Worker from @react-pdf-viewer/core
import "./styles/SensorcardA.css";

const SSlideA = ({ criteria, handleFileUpload, setCurrentPage }) => {
  // const [criteria, setCriteria] = useState("");
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState();

  const onFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    pdfjs
      .getDocument(URL.createObjectURL(uploadedFile))
      .promise.then((pdfDocument) => {
        setNumPages(pdfDocument.numPages);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(3);
  };

  return (
    <div id="aisensor" className="aisensor">
      <form className="formupload" onSubmit={handleSubmit}>
        <label htmlFor="pdffil" className="formlabel">
          Last opp din fil
        </label>
        <p className="formdesc">
          Merk at teksten ikke kan overskride 10.000 ord per sensorretting.
        </p>
        <input id="pdffil" type="file" accept=".pdf" onChange={handleFileUpload} />
        <button  type="submit"><p className="nextpage hover:shadow-lg hover:bg-gray-700 shadow">Legg inn kriterier</p></button>
      </form>
    </div>
  );
};

export default SSlideA;
