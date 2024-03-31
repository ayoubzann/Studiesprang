import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import AiSensor from "./pages/AiSensor/AiSensor";
import Studieteknikker from "./pages/Studieteknikker/Studieteknikker";
import { SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import React from "react";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";
import SSlideD from "./components/AiSensor/SSlideD";
import Feedbacktesting from "./pages/Feedbacktesting";

function App() {
  return (
    <div className="content-container">
      <Routes>
        <Route
          path="/*"
          element={
            <React.Fragment>
              <SignedOut>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sslide4" element={<Feedbacktesting />} />
                </Routes>
              </SignedOut>
              <SignedIn>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/studieteknikker"
                    element={<Studieteknikker />}
                  />
                  <Route path="/sslide4" element={<Feedbacktesting />} />
                  <Route path="/aisensor" element={<AiSensor />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/personvern" element={<PrivacyPolicy />} />
                </Routes>
              </SignedIn>
            </React.Fragment>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
