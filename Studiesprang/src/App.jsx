import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from './components/Navbar/Navbar';
import Login from "./pages/Login";
import AiSensor from "./pages/AiSensor";

function App() {
  return (
    <div className="flex flex-col ">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aisensor" element={<AiSensor />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
