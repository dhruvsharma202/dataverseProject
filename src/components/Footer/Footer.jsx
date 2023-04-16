import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIN from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-conatiner">
      <hr />
      <div className="blur blur-f-1"></div>
     <div className="blur blur-f-2"></div>
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={LinkedIN} alt="" />
          <img src={Instagram} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
    
      </div>
     
    </div>
  );
};

export default Footer;
