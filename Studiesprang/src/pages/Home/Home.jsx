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
      <section className="content flex flex-col items-center">
      <section className="informationsection fadein">
  <div className="isdata">
    <h2> Tilbakemelding på <strong>dine</strong> premisser</h2>
    <div>
      <img className="aihandshake" src="/images/aihandshake.jpg" alt="AI Handshake" />
      <div className="text-container">
        <p>
          A lot of data in here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolores unde vitae mollitia non earum optio similique blanditiis, temporibus, minima aspernatur laudantium quas. Maxime magnam libero voluptatibus animi quam aperiam itaque soluta. Doloribus eos atque ex quibusdam accusantium quaerat nesciunt fugit recusandae reprehenderit excepturi. Fugit similique earum placeat, eius iure vel ipsa perferendis. Dolor voluptatem, quo eaque dolorum deserunt nisi. Ipsum autem quis itaque voluptate deleniti nostrum natus, exercitationem illo reiciendis labore, quidem cumque vitae sunt reprehenderit delectus quod! Vel consequatur nam blanditiis commodi, quos minus corporis consectetur consequuntur veniam deserunt voluptatem sunt assumenda ut incidunt molestiae id magnam veritatis.
        </p>
      </div>
    </div>
  </div>
</section>

          <h2 className="aisensor123 fadein ">AI-Sensoren på 1-2-3!</h2>
        <div className="fadein contentcards ">
          <Card className="fp-ic shadow-xl"  variant="filled" backgroundColor>
            <CardHeader>
              <strong>
                <h2 className="text-xl">1. Legg inn dine vurderingskriterier</h2>
              </strong>
            </CardHeader>
            <CardBody>
              <p>Legg inn dine vurderingskriterier i tekstboksen. AI-Sensoren retter ikke format (linjeavstand, tekstørrelse, font o.l.), kun innholdsmessige kriterier. Dersom du ikke legger noen kriterier inn, legger vi inn generelle vurderingskriterier enhver god tekst bør følge. Slik får du alltid mest mulig info ut av AI-Sensoren! </p>
            </CardBody>
          </Card>
          <Card className="fp-ic" variant="filled" backgroundColor>
            <CardHeader>
              <strong>
                <h2 className="text-xl">2. Last opp filen <br/>og vent på svar</h2>
              </strong>
            </CardHeader>
            <CardBody>
              <p>Det neste steget blir dermed å laste opp din fil. Merk at vi støtter kun Word-dokumenter. Dersom du ikke har Office-pakken, kan du enkelt konvertere filer ved å benytte deg av diverse digitale tjenester. Teksten kan ikke overskride mer enn 3000 ord.</p>
            </CardBody>
          </Card>
          <Card className="fp-ic"  variant="filled" backgroundColor>
            <CardHeader>
              <strong>
                <h2 className="text-xl">3. Tid for <br/>tilbakemelding!</h2>
              </strong>
            </CardHeader>
            <CardBody>
              <p>Tilbakemeldingen er fordelt på tre sider. Den første siden er en generell vurdering som tar utgangspunkt i vurderingskriterer og generelle krav til en god tekst. Andre del er grammatikk, og tar for seg skrivefeil, ordbruk, og syntaks. Den siste delen tar for seg argumentativ teknikk og den røde tråden i teksten som en helhet. </p>
            </CardBody>
          </Card>
        </div>
        
      </section>
    </div>
  );
};

export default Home;
