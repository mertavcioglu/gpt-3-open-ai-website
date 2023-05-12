import React from "react";
import "./Feature01Card.css";

function Feature01Card(props) {
  return (
    <div className="feature01__right-field-card">
      <div className="feature01__right-field-card-left-field">
        <div className="rectangle-color" />
        <h1 className="feature01__right-field-header">{props.header}</h1>
      </div>
      <p className="feature01__right-field-text">{props.text}</p>
    </div>
  );
}

export default Feature01Card;
