import Feedback1 from "../components/AiSensor/AI-Feedback/Feedback1";
import Feedback2 from "../components/AiSensor/AI-Feedback/Feedback2";
import Feedback3 from "../components/AiSensor/AI-Feedback/Feedback3";

const Feedbacktesting = () => {
  return (
    <div>
      <Feedback1
        apiRes1={[
          {
            mellomoverskrift: "Mangel på vitenskapelig grunnlag",
            respons:
              "Teksten presenterer konseptet om solar plexus-chakraet og dets påvirkning på personlig makt, selvfølelse, og emosjonell integritet uten å nevne eller diskutere det vitenskapelige grunnlaget eller mangel på sådan. Dette kan lede leserne til å anta at påstandene er allment aksepterte eller vitenskapelig bevist, noe som ikke nødvendigvis er tilfellet. En diskusjon om vitenskapelig konsensus, eller mangel på sådan, rundt chakraer og energisystemer ville gitt teksten større dybde og nøyaktighet.",
          },
          {
            mellomoverskrift: "Generaliseringer og antagelser",
            respons:
              "Teksten gjør flere generaliseringer om effekten av balansering av solar plexus-chakraet på individets følelser og atferd, uten å anerkjenne individuelle forskjeller eller mulige unntak. Påstander som at balansering av chakraet vil føre til økt selvtillit, personlig makt, og mental klarhet, kan ikke nødvendigvis generaliseres til alle individer. En mer nyansert tilnærming som anerkjenner individuelle variasjoner og mulige andre faktorer som påvirker disse aspektene av menneskelig erfaring, ville styrket teksten.",
          },
          {
            mellomoverskrift: "Mangel på kritisk vurdering",
            respons:
              "Teksten presenterer teknikker for å balansere solar plexus-chakraet, som meditasjon, yoga, pusteteknikker, og affirmasjoner, uten å kritisk vurdere effektiviteten eller vitenskapelig støtte for disse metodene. En mer balansert fremstilling som inkluderer kritisk vurdering eller referanser til studier som støtter eller utfordrer effektiviteten av disse teknikkene, ville gitt leserne et mer komplett bilde og tillatt dem å gjøre mer informerte valg.",
          },
          {
            mellomoverskrift: "Mangel på kildehenvisninger",
            respons:
              "Teksten mangler kildehenvisninger og referanser til primærlitteratur eller forskning som støtter påstandene som gjøres. Dette svekker tekstens troverdighet og etterlater leseren uten mulighet til å utforske emnet dypere eller verifisere informasjonen som presenteres. Inkludering av kildehenvisninger ville ikke bare styrket tekstens troverdighet, men også oppmuntret til videre læring og utforskning av emnet.",
          },
        ]}
      />
      <Feedback2
        apiRes2={[
          {
            sitat: "The early bird catches the worm.",
            rettelse: "The early bird catches the worm.",
          },
          {
            sitat: "To boldly go where no one has gone before.",
            rettelse: "To boldly go where no one has gone before.",
          },
          {
            sitat: "Houston, we have a problem.",
            rettelse: "Houston, we have a problem.",
          },
        ]}
      />
      <Feedback3
        apiRes3={[
          {
            sitat: "To be, or not to be, that is the question.",
            evaluering: "Hamlet contemplating the nature of existence.",
          },
          {
            sitat:
              "All the world's a stage, and all the men and women merely players.",
            evaluering:
              "Shakespeare describing the stages of life in 'As You Like It'.",
          },
          {
            sitat:
              "It is not in the stars to hold our destiny but in ourselves.",
            evaluering: "Julius Caesar speaking about personal responsibility.",
          },
        ]}
      />
    </div>
  );
};

export default Feedbacktesting;
