import { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Home/Header";
import SSlideB from "../../components/AiSensor/SSlideB";
import SSlideA from "../../components/AiSensor/SSlideA";
import SSlideC from "../../components/AiSensor/SSlideC";
import SSlideD from "../../components/AiSensor/SSlideD";

const Home = () => {
  const [criteria, setCriteria] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [uploadedFile, setUploadedFile] = useState(null);


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

  const handleCriteriaChange = (event) => {
    event.preventDefault();
    setCriteria(event.target.value);
  };

  const handleFileUpload = (event) => {
    event.preventDefault();
    setUploadedFile(event.target.files[0])
  }

  const handleRestart = () => {
    setCriteria("");
    setUploadedFile(null);
    setCurrentPage(1);
  }


  return (
    <div>
      <div className="head fadein">
        <Header />
      </div>
      {/* <img src="./images/wavedividersensor.svg"/> */}
        <section className="content">
          <div className="aisensor-container fadein">
            {/* Ha 5 forskjellige sensorkort som lagrer staten her og gjør api kall? */}
            {currentPage === 1 && <SSlideA criteria={criteria} handleCriteriaChange={handleCriteriaChange} setCurrentPage={setCurrentPage}/>}
            {currentPage === 2 && <SSlideB uploadedFile={uploadedFile} handleFileUpload={handleFileUpload} setCurrentPage={setCurrentPage} />}
            {currentPage === 3 && <SSlideC setCurrentPage={setCurrentPage} />}
            {currentPage === 4 && <SSlideD handleRestart={handleRestart} />}

          </div>
        </section>
    </div>
  );
};

export default Home;
