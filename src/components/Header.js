import React from "react";
import "./Header.css";
import headerImage from "../images/ai.png";
import headerPeople from "../images/people.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header__content">
        <h1 className="header__content-header">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="header_content-text">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header__content-input-field">
          <input
            type="text"
            placeholder="Your Email Address"
            className="header__content-input"
          />
          <button type="submit" className="header__content-button">
            Get Started
          </button>
        </div>
        <div className="header__content-people-field">
          <img
            src={headerPeople}
            alt="people-img"
            className="header__content-people-image"
          />
          <p className="header__content-people-text">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <img
        src={headerImage}
        alt="header-img"
        className="header__content-header-image"
      />
    </div>
  );
}

export default Header;
