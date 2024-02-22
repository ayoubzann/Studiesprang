import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import RevPhoto from "../../../assets/Rev1.png"
import StarRating from "../../../assets/favourite.png"
import "./ReviewCard.css"

const ReviewCard = () => {
  return (
    <div className="review-card">
      <Card>
        <div className=" bg-slate-200">
        <Heading><h2 className="mt-3">Lorem Ipsum</h2></Heading>
        <div className="review-photo flex items-center">
        <img src={RevPhoto} alt="Brukerbilde" className="userpic ml-4"/>
        <CardBody><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sequi.</p></CardBody>
        </div>
        <div className="flex justify-center gap-4 mb-10 ml-24 ">
        <img className="starrating" src={StarRating} alt="5-stjernerating"/>
        <img className="starrating" src={StarRating} alt="5-stjernerating"/>
        <img className="starrating" src={StarRating} alt="5-stjernerating"/>
        <img className="starrating" src={StarRating} alt="5-stjernerating"/>
        <img className="starrating" src={StarRating} alt="5-stjernerating"/>
        </div>
        </div>
      </Card>
    </div>
  );
};

export default ReviewCard;
