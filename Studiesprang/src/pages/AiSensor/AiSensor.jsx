import "./AiSensor.css";
import { useState, useEffect } from "react";
import SSlideA from "../../components/AiSensor/SSlideA";
import SSlideB from "../../components/AiSensor/SSlideB";
import SSlideC from "../../components/AiSensor/SSlideC";
import SSlideD from "../../components/AiSensor/SSlideD";
import { preprocessAndParseJSON } from "../../utils.jsx";

const AiSensor = () => {
  const [criteria, setCriteria] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [apiRes1, setApiRes1] = useState(null);
  const [apiRes2, setApiRes2] = useState(null);
  const [apiRes3, setApiRes3] = useState(null);
  const [apiCalled, setApiCalled] = useState(false); // State to track if API call has been made

  const baseUrl = "https://studiesprangapi.azurewebsites.net/";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animation-started");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const fadeinElements = document.querySelectorAll(".fadein");
    fadeinElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);


  const getFeedback = async () => {
    const url = baseUrl + "/Prompt/trigger";
  
    try {
      const formData = new FormData();
      formData.append("file", uploadedFile);
  
      if (criteria.trim() !== "") {
        formData.append("requirements", criteria);
      }
  
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const responseData = await response.json(); // Parse response as JSON
  
      // Ensure responseData is an array and has at least 3 elements
      if (Array.isArray(responseData) && responseData.length >= 3) {
        // Preprocess and parse each item in responseData array
        let parsedData1 = await preprocessAndParseJSON(responseData[0]);
        let parsedData2 = await preprocessAndParseJSON(responseData[1]);
        let parsedData3 = await preprocessAndParseJSON(responseData[2]);
  
        // Check if all API responses are valid before updating state and setting page
        if (parsedData1 !== null && parsedData2 !== null && parsedData3 !== null) {
          setApiRes1(parsedData1);
          setApiRes2(parsedData2);
          setApiRes3(parsedData3);
  
          console.log(apiRes1);
          console.log(apiRes2);
          console.log(apiRes3);
  
          setCurrentPage(4);
          setApiCalled(true); // Set API call state to true
        } else {
          console.error("Invalid response data format:", responseData);
        }
      } else {
        console.error("Invalid response data format:", responseData);
      }
    } catch (error) {
      console.error("Failed to submit request:", error);
    }
  };
  
  
  
  const handleCriteriaChange = (event) => {
    event.preventDefault();
    setCriteria(event.target.value);
  };

  const handleFileUpload = async (fileToUpload) => {
    setUploadedFile(fileToUpload);
  };

  const handleRestart = () => {
    setCriteria("");
    setUploadedFile(null);
    setCurrentPage(1);
    setApiCalled(false); // Reset API call state
  };

  useEffect(() => {
    if (uploadedFile && !apiCalled) {
      // Check if file is uploaded and API call hasn't been made
      getFeedback();
    }
  }, [uploadedFile, apiCalled]);

  const handleLogInfo = async (event) => {
    event.preventDefault();
    console.log(await apiRes1);
    console.log(await apiRes2);
    console.log(await apiRes3);
  }

  return (
    <div className="completecontainer">
      <button onClick={handleLogInfo}>LOG INFO</button>
      <header className="head fadein"></header>
      <section className="aisensor-container fadein flex flex-col">
        <h1 className="text-5xl font-extrabold text-slate-300">AI Sensor</h1>
        {currentPage === 1 && (
          <SSlideA
            criteria={criteria}
            handleCriteriaChange={handleCriteriaChange}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 2 && (
          <SSlideB
            uploadedFile={uploadedFile}
            handleFileUpload={handleFileUpload}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 3 && <SSlideC setCurrentPage={setCurrentPage} />}
        {currentPage === 4 && apiRes1 && apiRes2 && apiRes3 && (
  <SSlideD
    apiRes1={apiRes1}
    apiRes2={apiRes2}
    apiRes3={apiRes3}
    setCurrentPage={setCurrentPage}
    handleRestart={handleRestart}
  />
)}
      </section>
    </div>
  );
};

export default AiSensor;
