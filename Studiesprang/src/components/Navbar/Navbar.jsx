import TekstLogo from "../../assets/LogoBilde.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar sticky">
      <Link to="/">
        <img src={TekstLogo} alt="Studiesprang Logo" className="nav-logo" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/studieteknikker">
          <p className="text-xl">Studieteknikker</p>
        </Link>
        <Link className="nav-link" to="/aisensor">
          <p className="text-xl">AI-Sensor</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
