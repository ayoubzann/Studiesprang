import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import AiSensor from "./pages/AiSensor";
import Studieteknikker from "./pages/Studieteknikker/Studieteknikker";
import FooterElement from "./components/Footer/FooterElement";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <div className="main-content flex justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studieteknikker" element={<Studieteknikker />} />
            <Route path="/aisensor" element={<AiSensor />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <FooterElement />
      </BrowserRouter>
    </div>
  );
}

export default App;
