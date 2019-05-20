import React, { Component } from "react";

import "./LoginForm.css";
import LoginPageButton from "../LoginPageButton/LoginPageButton";

class LoginForm extends Component {
  state = {
    username: "Ruben",
    password: "rubenruben"
  };

  userNameHandler = event => {
    this.setState({
      username: event.currentTarget.value
    });
  };

  passwordHandler = event => {
    this.setState({
      password: event.currentTarget.value
    });
  };

  render() {
    return (
      <div className="login-form-container">
        <input
          placeholder="Username"
          type="text"
          value={this.state.username}
          onChange={this.userNameHandler}
        />
        <input
          placeholder="Password"
          type="password"
          value={this.state.password}
          onChange={this.passwordHandler}
        />
        <LoginPageButton form={this.state} />
      </div>
    );
  }
}
export default LoginForm;
