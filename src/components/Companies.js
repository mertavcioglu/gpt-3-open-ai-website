import React from "react";
import "./Companies.css";
import company01 from "../images/google.png";
import company02 from "../images/slack.png";
import company03 from "../images/atlassian.png";
import company04 from "../images/dropbox.png";
import company05 from "../images/shopify.png";

function Companies() {
  return (
    <div className="companies-container">
      <img src={company01} alt="company01" className="company-image" />
      <img src={company02} alt="company02" className="company-image" />
      <img src={company03} alt="company03" className="company-image" />
      <img src={company04} alt="company04" className="company-image" />
      <img src={company05} alt="company05" className="company-image" />
    </div>
  );
}

export default Companies;
