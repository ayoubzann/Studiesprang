import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import "./Studieteknikker.css";
import { Carousel } from "flowbite-react";
import Studieteknikkside from "./Studieteknikkside";
import { useState } from "react";
import { FcLeft } from "react-icons/fc";


const Studieteknikker = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="studieteknikk flex flex-col ">
      {!showMore ? (
        <Carousel className="carousel">
          <Card>
            <div className="bg-slate-200">
              <CardHeader>
                <h2 className="text-xl font-extrabold">Studieteknikk</h2>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                voluptatum eos id esse nesciunt suscipit sed aperiam adipisci ea
                tempora?
                <br />
                <br />
                <button
                  onClick={handleLearnMore}
                  className="p-2 bg-green-400 rounded-xl text-white"
                >
                  Lær mer
                </button>
              </CardBody>
            </div>
          </Card>
          <Card>
            <div className="bg-slate-200">
              <CardHeader>
                <h2 className="text-xl font-extrabold">Studieteknikk</h2>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                voluptatum eos id esse nesciunt suscipit sed aperiam adipisci ea
                tempora?
                <br />
                <br />
                <button
                  onClick={handleLearnMore}
                  className="p-2 bg-green-400 rounded-xl text-white"
                >
                  Lær mer
                </button>
              </CardBody>
            </div>
          </Card>
          <Card>
            <div className="bg-slate-200">
              <CardHeader>
                <h2 className="text-xl font-extrabold">Studieteknikk</h2>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                voluptatum eos id esse nesciunt suscipit sed aperiam adipisci ea
                tempora?
                <br />
                <br />
                <button
                  onClick={handleLearnMore}
                  className="p-2 bg-green-400 rounded-xl text-white"
                >
                  Lær mer
                </button>
              </CardBody>
            </div>
          </Card>
          <Card>
            <div className="bg-slate-200">
              <CardHeader>
                <h2 className="text-xl font-extrabold">Studieteknikk</h2>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                voluptatum eos id esse nesciunt suscipit sed aperiam adipisci ea
                tempora?
                <br />
                <br />
                <button
                  onClick={handleLearnMore}
                  className="p-2 bg-green-400 rounded-xl text-white"
                >
                  Lær mer
                </button>
              </CardBody>
            </div>
          </Card>
          <Card>
            <div className="bg-slate-200">
              <CardHeader>
                <h2 className="text-xl font-extrabold">Studieteknikk</h2>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                voluptatum eos id esse nesciunt suscipit sed aperiam adipisci ea
                tempora?
                <br />
                <br />
                <button
                  onClick={handleLearnMore}
                  className="p-2 bg-green-400 rounded-xl text-white"
                >
                  Lær mer
                </button>
              </CardBody>
            </div>
          </Card>
        </Carousel>
      ) : (
        <div className="flex flex-col items-center">
<button onClick={handleLearnMore} className="text-xl font-bold">🔙 Tilbake</button>
        <Studieteknikkside  />
        </div>
      )}
    </div>
  );
};

export default Studieteknikker;
