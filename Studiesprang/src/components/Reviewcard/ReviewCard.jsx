import { Card, CardBody, Heading } from "@chakra-ui/react";
import RevPhoto from "../../assets/Rev1.png"
import "./ReviewCard.css"
import { Rating } from "flowbite-react";

const ReviewCard = () => {
  
  return (
    <div className="review-card">
      <Card>
        <div className=" p-10 bg-slate-200">
        <Heading><h2 className="mt-3">Lorem Ipsum</h2></Heading>
        <div className="review-photo flex items-center">
        <img src={RevPhoto} alt="Brukerbilde" className="userpic ml-4"/>
        <CardBody><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sequi.</p></CardBody>
        </div>
        <Rating size="lg" className="flex justify-center">
          <Rating.Star/>
          <Rating.Star/>
          <Rating.Star/>
          <Rating.Star/>
          <Rating.Star/>
        </Rating>
      
        </div>
      </Card>
    </div>
  );
};

export default ReviewCard;
