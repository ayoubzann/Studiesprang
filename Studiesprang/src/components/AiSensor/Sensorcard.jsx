import { SignUp, SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import "./Sensorcard.css";

const Sensorcard = () => {


  return (
    <div id="aisensor">
      <SignedOut>
        <div className="sensorcard">
        <h1 className="sensorcard-title">Registrer for å prøve AI-Sensoren gratis!</h1>
        <SignUp/>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="aisensor">

        <Card className="sensorcard">
          <CardHeader>Header</CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
        </div>
      </SignedIn>
    </div>
  );
};

export default Sensorcard;
