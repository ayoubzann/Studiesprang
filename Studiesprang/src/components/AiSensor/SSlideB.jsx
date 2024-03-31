import React, { useState } from "react";
import "./styles/SensorcardB.css";

const SSlideB = ({ handleFileUpload, setCurrentPage,  uploadedFile }) => {
const [errorMessage, setErrorMessage] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(uploadedFile);
    setErrorMessage(false);
    setCurrentPage(3);
  };
  
  const handleUpload = (event) => {
    event.preventDefault();
    if (event.target.files[0] === null) {
      setErrorMessage(true);
      return;
    }
    setErrorMessage(false);
    console.log(event.target.files[0]);
    handleFileUpload(event.target.files[0]);
  };

  return (
    <div id="aisensor" className="aisensor">
      <form className="formupload" onSubmit={handleSubmit}>
        <label htmlFor="pdffil" className="formlabel"></label>
        <p className="formdesc">
          Last opp din <strong>PDF-fil</strong> eller{" "}
          <strong>Word-dokument</strong> her.
          <br />
          Merk at teksten ikke kan overskride 10.000 ord per sensorretting.
        </p>
        {errorMessage && (
          <p className="text-red-500 text-xl font-extrabold m-5">
            Vennligst last opp en fil.
          </p>
        )}
        <input
          id="pdffil"
          type="file"
          accept=".pdf, .docx"
          onChange={handleUpload}
        />
        <button type="submit">
          <p className="nextpage hover:shadow-lg hover:bg-gray-700 shadow">
            Send inn tekstfil
          </p>
        </button>
      </form>
    </div>
  );
};

export default SSlideB;
