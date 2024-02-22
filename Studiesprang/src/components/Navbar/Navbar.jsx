import TekstLogo from "../../assets/LogoBilde.png"
import { Link } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar sticky">
      <img src={TekstLogo} alt="Studiesprang Logo" className='nav-logo'/>
      <div className="nav-links">
      <Link to="/"><p className="text-xl">Studieteknikker</p></Link>
      <Link to="/login"><p className="text-xl">AI-Sensor</p></Link>
      </div>
    </div>
  )
}

export default Navbar