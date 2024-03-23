import { useState } from "react";
import "./MaillistForm.css";

const MaillistForm = () => {
  const [epst, setEpst] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [alder, setAlder] = useState("");
  const [edulev, setEdulev] = useState("vgs");

  const postUrl =
    "https://studiesprang-api-7030c0efb2fd.herokuapp.com/api/Maillist/add";

  const handleEpstChange = (e) => {
    setEpst(e.target.value);
  };

  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };

  const handleLnameChange = (e) => {
    setLname(e.target.value);
  };

  const handleAlderChange = (e) => {
    setAlder(e.target.value);
  };

  const handleEdulevChange = (e) => {
    setEdulev(e.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const url = `${postUrl}?mail=${epst}&fname=${fname}&lname=${lname}&elevel=${edulev}&age=${alder}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // const data = await response.json();
      // console.log(data);
      alert(
        "Takk for din interesse! Vi lover å kun sende deg viktige oppdateringer."
      );

      setEpst("");
      setFname("");
      setLname("");
      setAlder("");
      setEdulev("");
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

  return (
    <div id="maillist" className="flex justify-center">
      <form className="flex flex-col mailform" onSubmit={handleSubmitForm}>
        <h1>Hold deg oppdatert👇</h1>
        <label htmlFor="epst">E-post</label>
        <input
          id="epst"
          value={epst}
          type="email"
          onChange={handleEpstChange}
        />

        <label htmlFor="fname">Fornavn</label>
        <input
          id="fname"
          value={fname}
          type="text"
          onChange={handleFnameChange}
        />

        <label htmlFor="lname">Etternavn</label>
        <input
          id="lname"
          value={lname}
          type="text"
          onChange={handleLnameChange}
        />

        <label htmlFor="alder">Alder</label>
        <input
          id="alder"
          value={alder}
          type="number"
          onChange={handleAlderChange}
        />

        <label htmlFor="edulev">Du går på...</label>
        <select id="edulev" value={edulev} onChange={handleEdulevChange}>
          <option selected disabled>Velg et alternativ</option>
          <option value="vgs">Videregående</option>
          <option value="uni">Universitet</option>
          <option value="hoyskole">Høyskole</option>
          <option value="annet">Annet</option>
        </select>
        <button type="submit">Hold meg oppdatert!</button>
      </form>
    </div>
  );
};

export default MaillistForm;
