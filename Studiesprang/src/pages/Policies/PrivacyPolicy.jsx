import React from "react";
import "./PP.css"
import { Link } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import { SignedIn } from '@clerk/clerk-react';
import { SignedOut } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/clerk-react';
import { VscSignIn } from 'react-icons/vsc';

const PrivacyPolicy = () => {
  return (
    
    <div className="privacy-policy pb-32">
        <div className="top-bar">
         <Link to="/"> <img className="logo" src="./images/newlogo.svg" /></Link>
          <div className="userbtn">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div>
                <SignInButton mode="modal">
                  <button>
                    <VscSignIn size={35} />
                  </button>
                </SignInButton>{" "}
              </div>
            </SignedOut>
          </div>
        </div>
        <h1 className="text-4xl mt-32"><strong>Personvernserklæring</strong></h1>
        <br/>
        <br/>
      <p>
        StudieSprang er behandlingsansvarlig for behandlingen av
        personopplysninger som beskrevet i denne personvernerklæringen. I denne
        personvernerklæringen forklarer vi hva slags personopplysninger vi
        lagrer og hvordan vi behandler de. Denne personvernerklæringen gjelder
        for: studiesprang.no og studiesprang.vercel.app.
      </p><br/><br/><br/>
      <h2><strong>Personopplysninger vi samler inn og behandler</strong></h2><br/><br/>
      Vi behandler følgende kategorier av personopplysninger:
      <ul>
        <li><br/>
          <strong>Grunnleggende informasjon</strong>
          <ul>
            <li>Navn</li>
            <li>Fødselsdato</li>
          </ul>
        </li>
        <li><br/>
          <strong>Kontaktinformasjon</strong>
          <ul>
            <li>Navn og e-postadresse</li>
            <li>Telefonnummer</li>
            <li>Adresse</li>
          </ul>
        </li>
        <li><br/>
          <strong>Konto og profilinformasjon</strong>
          <ul>
            <li>Innstillinger og preferanser</li>
            <li>Transaksjonsmiddel og betalingsmiddel</li>
          </ul>
        </li>
        <li><br/>
          <strong>Kundehistorikk og kundeengasjement</strong>
          <li>Bestillings- og leveringsopplysninger</li>
          <li>Handlekurvbevegelser</li>
          <li>Rabattkoder</li>
          <li>Lojalitetsprograminformasjon</li>
          <li>Aktive produkter og avtaler</li>
        </li>
        <li><br/>
          <strong>Kundeaktivitet</strong>
          <ul>
            <li>
              Lese- og handlingshistorikk fra app, nettsider eller elektronisk
              kommunikasjon vi sender ut
            </li>
            <li>Teknisk informasjon om enhetene du bruker</li>
          </ul>
        </li>
      </ul>
      <p>
        Personopplysningene samles inn direkte fra deg gjennom informasjon du
        oppgir til oss.
      </p>
      <h2><br/><br/>
        <strong>Hvordan vi bruker personopplysningene</strong><br/>
      </h2>
      <p>
        <strong>Levering av tjeneste/avtaleinngåelse</strong><br/>
        Vi bruker dine personopplysninger til å oppfylle våre avtaler med deg,
        det vil si når du har bestilt et produkt eller en tjeneste fra oss. Det
        rettslige grunnlaget for å behandle personopplysninger til dette
        formålet er at behandlingen er nødvendig for å oppfylle en avtale med
        deg.
      </p><br/><br/>
      <p>
        <strong>Administrasjon av kundeforhold</strong><br/>
        Vi bruker dine personopplysninger til å administrere vårt kundeforhold
        med deg. Det kan for eksempel være kundeservice, klagebehandling og
        feilretting vedrørende ditt kundeforhold. Det rettslige grunnlaget for å
        behandle personopplysninger til dette formålet er at behandlingen er
        nødvendig for å oppfylle en avtale med deg.
      </p><br/><br/>
      <p>
        <strong>
          Analyse, forretningsutvikling og forbedring av tjenester
        </strong><br/>
        Vi arbeider kontinuerlig med å utvikle og forbedre våre tjenester og
        produkter. Mye av dette arbeidet innebærer å analysere ulike former for
        personopplysninger, som for eksempel kundeaktivitet, kundehistorikk og
        konto og profilinformasjon. Det rettslige grunnlaget for å behandle
        personopplysninger til dette formålet er vår berettigede interesse.
      </p><br/><br/>
      <p>
        <strong>Tilpasset brukeropplevelse</strong><br/>
        Vi tilpasser brukeropplevelsen og kommunikasjonen til ditt kundeforhold
        og dette bruker vi personopplysninger til. Det rettslige grunnlaget for
        å behandle personopplysninger til dette formålet er vår berettigede
        interesse.
      </p><br/><br/>
      <p>
        <strong>Salg og markedsføring</strong><br/>
        Vi bruker personopplysninger i forbindelse med salg og markedsføring av
        våre produkter og tjenester, for eksempel ved at du mottar epost fra
        oss. Det rettslige grunnlaget for å behandle personopplysninger til
        dette formålet er vår berettigede interesse. Du har mulighet å reservere
        deg fra deler av denne behandlingen ved å, for eksempel, reservere deg
        fra å motta epost fra oss. I tillegg til dette kan vi også be deg om
        samtykke til å bruke dine personopplysninger til såkalt profilering,
        hvor vi utleder interesser og behov på bakgrunn av dine
        personopplysninger. Hensikten med profilering vil være at
        markedsføringen vår skal bli mer relevant.
      </p><br/><br/>
      
      <p>
        <strong>Systemovervåking, feilretting mm.</strong><br/>
        Vi overvåker våre systemer etter feil og problemer. En del av disse
        prosessene innebærer lagring og behandling av personopplysninger. Det
        rettslige grunnlaget for å behandle personopplysninger til dette
        formålet er vår berettigede interesse.
      </p><br/><br/>
      <p>
        <strong>
          Sikkerhet, avdekking av svindel og kriminelle handlinger
        </strong><br/>
        Vi behandler personopplysninger i vårt arbeid med å beskytte våre
        brukere og oss selv mot svindelaktivitet, misbruk og kriminelle
        handlinger. Det rettslige grunnlaget for å behandle personopplysninger
        til dette formålet er vår berettigede interesse.
      </p><br/><br/>
      <p>
        <strong>Overholde rettslige forpliktelser</strong><br/>I enkelte tilfeller er
        vi pålagt å behandle personopplysninger av hensyn til andre rettslige
        forpliktelser. Et eksempel på dette er informasjon knyttet til salg, som
        vi er pliktig til å regnskapsføre og oppbevare i henhold til
        bokføringsloven. Det rettslige grunnlaget for å behandle
        personopplysninger til dette formålet er at behandlingen er nødvendig
        for å oppfylle en rettslig forpliktelse som påhviler oss.
      </p><br/><br/>
      <p>
        <strong>Dine rettigheter</strong><br/>
        Dersom du ønsker å utøve noen av dine rettigheter, ta kontakt med oss på
        studiespranghjelp@gmail.com.
      </p><br/><br/>
      <p>
        <strong>Rett til innsyn i egne opplysninger</strong><br/>
        Du kan be om en kopi av alle opplysninger vi behandler om deg. Ta
        kontakt på epostadressen ovenfor for å bruke innsynsretten din.
      </p><br/><br/>
      <p>
        <strong>Rett til korrigering av personopplysninger</strong><br/>
        Du har rett til å be oss rette eller supplere opplysninger som er
        feilaktige eller misvisende.
      </p><br/><br/>
      <p>
        <strong>Retten til sletting av personopplysninger</strong><br/>
        Du har rett til å få dine personopplysninger slettet uten ugrunnet
        opphold. Du kan derfor når som helst be oss slette opplysninger om deg
        selv. Men merk at informasjon som vi er pålagt beholde av hensyn til
        andre rettslige forpliktelser (som for eksempel bokføringsloven) ikke
        vil bli slettet.
      </p><br/><br/>
      <p>
        <strong>Begrensning av behandling av personopplysninger</strong><br/>I noen
        situasjoner kan du også be oss begrense behandlingen av opplysninger om
        deg. Dette gjør du ved å administrere samtykker eller reservasjoner i
        våre løsninger.
      </p><br/><br/>
      <p>
        <strong>Protestere mot en behandling av personopplysninger</strong><br/>
        Dersom vi behandler opplysninger om deg med grunnlag i våre oppgaver
        eller på bakgrunn av en interesseavveining, har du rett til å protestere
        på vår behandling av opplysninger om deg. Dette gjør du ved å
        administrere samtykker eller reservasjoner i våre løsninger.
      </p><br/><br/>
      <p>
        <strong>Dataportabilitet</strong><br/>
        Du har rett til å få utlevert dine personopplysninger i et strukturert,
        alminnelig anvendt og maskinlesbart format. Ta kontakt på epostadressen
        ovenfor for å få utlevert dine personopplysninger.
      </p><br/><br/>
      <p>
        <strong>Du kan klage på vår behandling av personopplysninger</strong><br/>
        Vi håper du vil si ifra dersom du mener vi ikke overholder reglene i
        personopplysningsloven. Si da gjerne først i fra gjennom den kontakten
        eller kanalen du allerede har etablert med oss. Du kan også klage over
        vår behandling av personopplysninger. Dette gjør du til Datatilsynet.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
