import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from 'react-redux';

// CSS:
import "./LoginPageButton.css";

// importing Actions:
import userLoginAction  from "../../store/actions/userLoginAction";

class LoginPageButton extends Component {
  
  submitHandler = event => {
    event.preventDefault();
    this.props.dispatch(userLoginAction(this.props.form))
        .then(data => {
      if (data) {
        this.props.history.push("/userprofile");
      }

    });
  };

  render() {
    return (
      <div>
        <button className="login-button" onClick={this.submitHandler}>
          Login
        </button>
      </div>
    );
  }
}

export default connect()(withRouter(LoginPageButton))
