import React, { Component } from "react";

import facebook from "../../Assets/facebook.svg";
import twitter from "../../Assets/twitter.svg";
import google from "../../Assets/googleplus.svg";
import instagram from "../../Assets/instagram.svg";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-main-container">
        <div className="footer-top-container">
          <div className="footer-top-left-box">
            <ul className="footer-list-box">
              <li>About Us</li>
              <li>Press</li>
              <li>Blog</li>
              <li>iOS</li>
              <li>Android</li>
            </ul>
          </div>
          <div className="footer-top-right-box">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={google} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>

        <div className="footer-bottom-container">
          <p>© Copyright Luna 2018</p>
        </div>
      </div>
    );
  }
}

export default Footer;
