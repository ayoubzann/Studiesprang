import { Card, CardHeader, CardBody} from "@chakra-ui/react";
import "./Studieteknikker.css";
import { Carousel } from "flowbite-react";

const Studieteknikker = () => {
  return (
    <div className="studieteknikk flex flex-wrap">
      <Carousel className="carousel">
          <Card>
        <div className="bg-slate-200">
            <CardHeader>
              <h2 className="text-xl font-extrabold">Studieteknikk</h2>
            </CardHeader>
            <CardBody>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptatum eos id esse nesciunt suscipit sed aperiam adipisci ea tempora?
            </CardBody>
          </div>
          </Card>
          <Card>
        <div className="bg-slate-200">
            <CardHeader>
              <h2 className="text-xl font-extrabold">Studieteknikk</h2>
            </CardHeader>
            <CardBody>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptatum eos id esse nesciunt suscipit sed aperiam adipisci ea tempora?
            </CardBody>
          </div>
          </Card>
          <Card className="">
        <div className="bg-slate-200">
            <CardHeader>
              <h2 className="text-xl font-extrabold">Studieteknikk</h2>
            </CardHeader>
            <CardBody>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptatum eos id esse nesciunt suscipit sed aperiam adipisci ea tempora?
            </CardBody>
          </div>
          </Card>
          <Card >
        <div className="bg-slate-200">
            <CardHeader>
              <h2 className="text-xl font-extrabold">Studieteknikk</h2>
            </CardHeader>
            <CardBody>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptatum eos id esse nesciunt suscipit sed aperiam adipisci ea tempora?
            </CardBody>
          </div>
          </Card>
          <Card>
        <div className="bg-slate-200">
            <CardHeader>
              <h2 className="text-xl font-extrabold">Studieteknikk</h2>
            </CardHeader>
            <CardBody>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptatum eos id esse nesciunt suscipit sed aperiam adipisci ea tempora?
            </CardBody>
          </div>
          </Card>
          
      </Carousel>
    </div>
  )
}

export default Studieteknikker