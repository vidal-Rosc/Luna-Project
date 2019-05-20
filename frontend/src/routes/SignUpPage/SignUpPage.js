import React, { Component } from "react";

import "./SignUpPage.css";

import RegistrationTitle from "../../components/RegistrationTitle/RegistrationTitle";
import RegistrationInput from "../../components/RegistrationInput/RegistrationInput";

class SignUpPage extends Component {
  render() {
    return (
      <div className="signup-page-main-container">
        <RegistrationTitle />
        <RegistrationInput />
      </div>
    );
  }
}

export default SignUpPage;
