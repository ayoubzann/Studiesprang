import { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Home/Header";

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
      {/* <img src="./images/wavedividersensor.svg"/> */}
        <section className="content">
          <div className="fadein">
          </div>
        </section>
    </div>
  );
};

export default Home;
