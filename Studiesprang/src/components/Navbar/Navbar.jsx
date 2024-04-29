import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { VscSignIn } from 'react-icons/vsc';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Check if the user has scrolled past the top of the page
      setIsScrolled(scrollTop > 0);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`top-bar ${isScrolled ? 'transparent' : ''}`}>
      <Link to="/">
        <img className={`logo ${isScrolled ? 'scrolled' : ''}`} src="./images/newlogo.svg" alt="Logo" />
      </Link>
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
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
