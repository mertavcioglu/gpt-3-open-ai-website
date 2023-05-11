import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar__group-01">
        <li className="navbar__group-01-item">GPT-3</li>
      </div>
      <div className="blur-01"></div>
      <div className="navbar__group-02">
        <li className="navbar__group-02-item">Home</li>
        <li className="navbar__group-02-item">What is GPT?</li>
        <li className="navbar__group-02-item">Open AI</li>
        <li className="navbar__group-02-item">Case Studies</li>
        <li className="navbar__group-02-item">Library</li>
      </div>
      <div className="navbar__group-03">
        <li className="navbar__group-03-item">Sign in</li>
        <li className="navbar__group-03-item navbar__sign-up-button">
          Sign up
        </li>
      </div>
    </div>
  );
}

export default Navbar;
