import { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Home/Header";
import Sensorcard from "../../components/AiSensor/Sensorcard";

const Home = () => {
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

  return (
    <div>
      <div className="head fadein">
        <Header />
      </div>
        <section className="content">
          <div className="fadein">
            <Sensorcard />
          </div>
        </section>
    </div>
  );
};

export default Home;
