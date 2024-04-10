import { helix } from 'ldrs';
import "./styles/SensorcardC.css";

const SSlideC = () => {
  helix.register()

  return (
    <div className="loadingscreen flex flex-col items-center">
      <l-helix
  size="250"
  speed="20" 
  color="#271180" 
></l-helix>
      <h2 className="loadingtext animate-pulse">AI jobber på <span className='italic'>sprang</span> for deg, <br/> vennligst vent...</h2>
      <br/>
      <br/>
    </div>
  );
};

export default SSlideC;
