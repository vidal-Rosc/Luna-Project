import React, { Component } from 'react';
//importing React-Routing:
import {NavLink} from "react-router-dom";
// importing CSS file
import './NavigationLoginButton.css'


class LoginButton extends Component {
  render() {
    return (
      <div>
        <button className='navigation-login-button'>
            <NavLink className='font-login-button' to="/login">LOGIN</NavLink>
        </button>
      </div>
    )
  }
}

export default LoginButton;