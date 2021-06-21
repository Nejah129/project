import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div>
          <header>
            <div id="menu" className="main-navbar" />

            <Link to="/" className="logo">
              LOGO
            </Link>
            <nav className="navbar">
              <ul>
                <ul>
                  <Link to="/" className="nave-link">Home</Link>
                </ul>
                <ul>
                  <Link to="/" className="nave-link">Privacy Policy</Link>
                </ul>
                <ul>
                  <Link to="/" className="nave-link">Contact us</Link>
                </ul>
                <ul>
                  <Link to="/login" className="nave-link">Terms of use</Link>
                </ul>
                <Link
              to="/singUp"
              id="signUp"
              className="SignUp"
            >Sign Up </Link>
              </ul>
              
            </nav>

            
          </header>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
