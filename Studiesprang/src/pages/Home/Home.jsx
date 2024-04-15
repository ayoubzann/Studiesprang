import { useEffect } from "react";
import "./Home.css";
import Header from "../../components/Home/Header";
import { Card } from "@chakra-ui/react";
import { CardBody } from "@chakra-ui/react";
import { CardHeader } from "@chakra-ui/react";

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
      <section className="content flex justify-center">
        <div className="fadein contentcards ">
          <Card className="fp-ic"  variant="filled" backgroundColor>
            <CardHeader>
              <strong>
                <h2 className="text-xl">Læringsvennlig AI</h2>
              </strong>
            </CardHeader>
            <CardBody>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam iusto eius odio aliquam corporis tempora dolorem fugiat ratione suscipit, vel obcaecati consectetur veritatis ab esse! Perspiciatis dolore saepe nobis laboriosam ut. Quisquam odit libero iusto atque. Illum quod impedit maxime nemo similique mollitia, incidunt unde animi, quisquam, cupiditate nam!</p>
            </CardBody>
          </Card>
          <Card className="fp-ic" variant="filled" backgroundColor>
            <CardHeader>
              <strong>
                <h2 className="text-xl">Læringsvennlig AI</h2>
              </strong>
            </CardHeader>
            <CardBody>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam iusto eius odio aliquam corporis tempora dolorem fugiat ratione suscipit, vel obcaecati consectetur veritatis ab esse! Perspiciatis dolore saepe nobis laboriosam ut. Quisquam odit libero iusto atque. Illum quod impedit maxime nemo similique mollitia, incidunt unde animi, quisquam, cupiditate nam!</p>
            </CardBody>
          </Card>
          <Card className="fp-ic"  variant="filled" backgroundColor>
            <CardHeader>
              <strong>
                <h2 className="text-xl">Læringsvennlig AI</h2>
              </strong>
            </CardHeader>
            <CardBody>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam iusto eius odio aliquam corporis tempora dolorem fugiat ratione suscipit, vel obcaecati consectetur veritatis ab esse! Perspiciatis dolore saepe nobis laboriosam ut. Quisquam odit libero iusto atque. Illum quod impedit maxime nemo similique mollitia, incidunt unde animi, quisquam, cupiditate nam!</p>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
