import { Heading, Card, CardHeader, CardBody, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="p-10">
      <Heading>Hva trenger du hjelp til?</Heading>
      <div className="flex gap-15">
      <Card>
        <CardHeader><h2 className="text-xl font-extrabold">AI-Sensor</h2></CardHeader>
        <CardBody>
          <Text><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, placeat!</p></Text>
        </CardBody>
      </Card>
      <Card>
        <CardHeader><h2 className="text-xl font-extrabold">Studieteknikk</h2></CardHeader>
        <CardBody>
          <Text><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, est?</p></Text>
        </CardBody>
      </Card>
      </div>
     
    </div>
  );
};

export default Home;
