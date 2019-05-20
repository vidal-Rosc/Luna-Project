import React, { Component } from "react";
import NavigationSignUpButton from "../../components/NavigationSignUpButton/NavigationSignUpButton";
import NavigationLoginButton from "../../components/NavigationLoginButton/NavigationLoginButton";
import pinguinLogo from "../../Assets/PinguinLogo.jpg";
import { withRouter } from "react-router";

import "./NavigationBar.css";
import { NavLink } from "react-router-dom";

class NavigationBar extends Component {
  logoHandler = () => {
    this.props.history.push("/newrestaurant");
  };

  render() {
    return (
      <div className="navigationbar-main-container">
        <div className="navigation-left-container" onClick={this.logoHandler}>
          <img src={pinguinLogo} className="pinguin-logo" alt="pinguin-logo" />
          <p className="navigation-bar-logo-title">Hula-Luna Pinguin</p>
        </div>
        <div className="navigation-right-container">
          <ul className="navigation-tab-list">
            <li>
              <NavLink className="navlinks" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navlinks" to="/search">
                Search
              </NavLink>
            </li>
            <li>
              <NavLink className="navlinks" to="/userprofile">
                Profile
              </NavLink>
            </li>
          </ul>
          <div className="navigation-button-container">
            <NavigationSignUpButton />
            <NavigationLoginButton />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationBar);
