import React from "react";
import "./GetStarted.css";

function GetStarted() {
  return (
    <div className="get-started-container">
      <div className="get-started__left-field">
        <p className="get-started__left-field-text">
          Request Early Access to Get Started
        </p>
        <h1 className="get-started__left-field-header">
          Register today & start exploring the endless possiblities.
        </h1>
      </div>
      <button className="get-started__button">Get Started</button>
    </div>
  );
}

export default GetStarted;
