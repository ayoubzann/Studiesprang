import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import AiSensor from "./pages/AiSensor/AiSensor";
import Studieteknikker from "./pages/Studieteknikker/Studieteknikker";
import { SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import React from "react";

function App() {
  return (
    <Routes className="app-container">
      <Route
        className="main-content flex justify-center"
        path="/*"
        element={
          <React.Fragment>
            <SignedOut>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </SignedOut>
            <SignedIn>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/studieteknikker" element={<Studieteknikker />} />
                <Route path="/aisensor" element={<AiSensor />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </SignedIn>
          </React.Fragment>
        }
      />
    </Routes>
  );
}

export default App;
