import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar__group-01">
        <li className="navbar__group-01-item">GPT-3</li>
      </div>
      <div className="blur-01" />
      <div className="navbar__group-02">
        <Link className="navbar__group-02-item" smooth spy to="home">
          Home
        </Link>
        <Link className="navbar__group-02-item" smooth spy to="gpt3">
          What is GPT?
        </Link>
        <Link className="navbar__group-02-item" smooth spy to="feature01">
          Open AI
        </Link>
        <Link className="navbar__group-02-item" smooth spy to="feature02">
          Case Studies
        </Link>
        <Link className="navbar__group-02-item" smooth spy to="blog">
          Library
        </Link>
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
