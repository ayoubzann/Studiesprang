import TekstLogo from "../../assets/TekstLogo.png"
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar sticky">
      <img src={TekstLogo} alt="Studiesprang Logo" className='nav-logo'/>
      <div className="nav-links">
      <Link to="/">Studieteknikker</Link>
      <Link to="/login">AI-Sensor</Link>
      </div>
    </div>
  )
}

export default Navbar