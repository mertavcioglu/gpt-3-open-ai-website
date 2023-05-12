import React from "react";
import "./Feature02.css";
import feature02image from "../images/possibility.png";

function Feature02() {
  return (
    <div className="feature02-container" id="feature02">
      <img
        src={feature02image}
        alt="feature02-img"
        className="feature02__image"
      />
      <div className="feature02__right-field">
        <p className="feature02__right-field-upper-text">
          Request Early Access to Get Started
        </p>
        <h1 className="feature02__right-field-header">
          The possibilities are beyond your imagination
        </h1>
        <p className="feature02__right-field-text">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="feature02__right-field-lower-text">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
}

export default Feature02;
