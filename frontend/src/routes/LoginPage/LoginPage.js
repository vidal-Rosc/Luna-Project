import React, { Component } from "react";
// importing CSS file:
import "./LoginPage.css";
//importing the components:
import LoginTitle from "../../components/LoginTitle/LoginTitle";
import LoginForm from "../../components/LoginForm/LoginForm";

class LoginPage extends Component {
  render() {
    return (
      <form className="login-page-body">
        <LoginTitle />
        <LoginForm />
      </form>
    );
  }
}

export default LoginPage;
