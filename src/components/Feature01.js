import React from "react";
import "./Feature01.css";
import Feature01Card from "./Feature01Card";

function Feature01() {
  return (
    <div className="feature01-container">
      <div className="blur-02" />
      <div className="feature01__left-field">
        <h1 className="feature01__left-field-header">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <h1 className="feature01__left-field-text">
          Request Early Access to Get Started
        </h1>
      </div>
      <div className="feature01__right-field">
        <Feature01Card
          header="Improving end distrusts instantly"
          text="From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded."
        />
        <Feature01Card
          header="Become the tended active"
          text="Considered sympathize ten uncommonly occasional assistance
            sufficient not. Letter of on become he tended active enable to."
        />
        <Feature01Card
          header="Message or am nothing"
          text="Led ask possible mistress relation elegance eat likewise debating.
            By message or am nothing amongst chiefly address."
        />
        <Feature01Card
          header="Really boy law county"
          text="Really boy law county she unable her sister. Feet you off its like
            like six. Among sex are leave law built now. In built table in an
            rapid blush."
        />
      </div>
    </div>
  );
}

export default Feature01;
