import React, { Component } from 'react'

import './NavigationSignUpButton.css'
import {NavLink} from "react-router-dom";

class NavigationSignUpButton extends Component {
  render() {
    return (
      <div>
        <button className='signup-button'>
            <NavLink className='font-signup-button' to="/signup">SIGNUP</NavLink>
        </button>
      </div>
    )
  }
}

export default NavigationSignUpButton;