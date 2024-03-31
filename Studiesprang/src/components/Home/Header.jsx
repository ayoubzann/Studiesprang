import "./Header.css";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { VscSignIn } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Header = () => {
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("animation-started");
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   const fadeinElements = document.querySelectorAll(".fadein");
  //   fadeinElements.forEach((element) => observer.observe(element));

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  return (
    <div className="aisensorpage">
      <div className="header">
        <div className="top-bar">
         <Link to="/"> <img className="logo" src="./images/newlogo.svg" /></Link>
          <div className="userbtn">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div>
                <SignInButton mode="modal">
                  <button>
                    <VscSignIn size={35} />
                  </button>
                </SignInButton>{" "}
              </div>
            </SignedOut>
          </div>
        </div>
        <div className="text-content">
          <h1 className="title">Din digitale sensor.</h1>
          <p className="motto">
            Få tilbakemelding basert på dine vurderingskriterier. Skreddersydde tilbakemeldinger for å hjelpe deg mot dine akademiske mål.
          </p><Link to="/aisensor">
          <button className="aibutton hover:shadow-lg hover:bg-gray-700 shadow">
            <Link  to="/aisensor">Til AI-Sensoren</Link>
          </button></Link>
        <img className="blob" src="./images/new2.gif" />
        </div>
      </div>
    </div>
  );
};

export default Header;

