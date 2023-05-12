import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <h1 className="footer__header">
        Do you want to step in to the future before others
      </h1>
      <button className="footer__button">Request Early Access</button>
      <div className="footer__links">
        <div className="footer__links-left-field">
          <h1 className="footer__links-left-field-header">GPT-3</h1>
          <p className="footer__links-left-field-text">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="footer__links-right-field">
          <div className="footer__links-right-field-part">
            <p className="footer__links-right-field-part-header">Links</p>
            <li className="footer__links-right-field-part-item">Overons</li>
            <li className="footer__links-right-field-part-item">
              Social Media
            </li>
            <li className="footer__links-right-field-part-item">Counters</li>
            <li className="footer__links-right-field-part-item">Contact</li>
          </div>
          <div className="footer__links-right-field-part">
            <p className="footer__links-right-field-part-header">Company</p>
            <li className="footer__links-right-field-part-item">
              Terms & Conditions
            </li>
            <li className="footer__links-right-field-part-item">
              Privacy Policy
            </li>
            <li className="footer__links-right-field-part-item">Contact</li>
          </div>
          <div className="footer__links-right-field-part">
            <p className="footer__links-right-field-part-header">
              Get in touch
            </p>
            <li className="footer__links-right-field-part-item">
              Crechterwoord K12 182 DK Alknjkcb
            </li>
            <li className="footer__links-right-field-part-item">085-132567</li>
            <li className="footer__links-right-field-part-item">
              info@payme.net
            </li>
          </div>
        </div>
      </div>
      <p className="footer__rights">© 2021 GPT-3. All rights reserved.</p>
    </div>
  );
}

export default Footer;
