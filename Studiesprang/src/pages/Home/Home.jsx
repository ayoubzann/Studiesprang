import { Heading, Card, CardHeader, CardBody } from "@chakra-ui/react";
import AiSensorImg from "../../assets/ai.png";
import StudieteknikkImg from "../../assets/study.png";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="p-10">
      <Heading className="p-5">Hva trenger du hjelp til?</Heading>
      <div className="flex flex-wrap gap-10 justify-center">
        <Link className="shadow-xl" to="/aisensor">
          <Card className="p-2">
            <CardBody>
              <img
                className="linkimg"
                src={AiSensorImg}
                alt="technology icons"
              />
            </CardBody>
            <CardHeader>
              <h2 className="text-xl font-extrabold">AI-Sensor</h2>
            </CardHeader>
          </Card>
        </Link>
        <Link className="shadow-xl" to="/studieteknikker">
          <Card className="p-2">
            <CardBody>
              <img className="linkimg" src={StudieteknikkImg} alt="AI-Sensor" />
            </CardBody>
            <CardHeader>
              <h2 className="text-xl font-extrabold">Studieteknikk</h2>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Home;
