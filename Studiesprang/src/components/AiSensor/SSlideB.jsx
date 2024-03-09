import "./styles/SensorcardA.css";

const SSlideA = ({  handleFileUpload, setCurrentPage }) => {

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
