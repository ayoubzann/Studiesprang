import { SignIn, SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import "./Sensorcard.css";

const Sensorcard = () => {


  return (
    <div id="aisensor" className="aisensor">
      <SignedOut>
        <div className="sensorcard">
        <h1 className="sensorcard-title">Registrer deg eller logg på for å prøve AI-Sensoren gratis👇</h1>
        <SignIn/>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="aisensor">

        <Card className="sensorcard">
          <CardHeader>Lorem ipsum dolor sit amet.</CardHeader>
          <CardBody>Dette er testinnhold.</CardBody>
          <CardFooter>Lorem 20

          </CardFooter>
        </Card>
        </div>
      </SignedIn>
    </div>
  );
};

export default Sensorcard;
