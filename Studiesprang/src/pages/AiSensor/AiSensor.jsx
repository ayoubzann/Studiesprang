import { Tooltip, CircularProgress } from "@chakra-ui/react";
import "./AiSensor.css";
import { useState, useEffect } from "react";
import FeedbackCard from "../../components/Feedback/FeedbackCard";
const AiSensor = () => {
  const [upload, setUpload] = useState(false);
  const [btnColor, setbtnColor] = useState(
    "p-2 rounded-md bg-blue-400 hover:bg-blue-500 text-white shadow-md"
  );
  const [loading, isLoading] = useState(false);
  const [feedback, setFeedback] = useState(false);

  const handleClick = () => {
    setUpload(true);
    setbtnColor(
      `p-2 rounded-md disabled bg-gray-300 text-white cursor-not-allowed shadow-md`
    );
    isLoading(true);
  };

  useEffect(() => {
    if (loading) {
      const timeoutId = setTimeout(() => {
        isLoading(false);
        setFeedback(true);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [loading]);

  return (
    <div>
      <header className="m-5">
        <h1 className="text-5xl font-extrabold text-slate-300">AI Sensor</h1>
      </header>
      <section>
        <div className="aisensor-header flex items-center justify-center">
          <h2 className="text-3xl">👇 Last opp PDF-filen din her</h2>
        </div>
        <div className="flex justify-center gap-5 items-center m-5">
          <Tooltip label="Under utvikling.">
            <button onClick={handleClick} className={btnColor}>
              Last opp fil
            </button>
          </Tooltip>
          <p>{upload ? "Fil lastet opp" : "Ingen fil valgt"}</p>
        </div>
      </section>
      {loading ? (
        <div>
          <CircularProgress
            className="m-20"
            isIndeterminate
            size="10vw"
            thickness="8px"
          />
          <p className="text-3xl font-bold">Feedback på vei!</p>
        </div>
      ) : (
        <></>
      )}
      {feedback ? <FeedbackCard /> : null}
    </div>
  );
};

export default AiSensor;
