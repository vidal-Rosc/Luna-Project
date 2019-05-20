import React, {Component} from "react";
import {withRouter} from "react-router";
import {registrationAction} from "../../store/actions/registrationAction";
import {connect} from 'react-redux';

import "./RegisterButton.css";

class RegisterButton extends Component {
    registerButtonHandler = event => {
        if (this.props.registrationState.email !== '') {
            event.preventDefault();
            this.props.dispatch(registrationAction(this.props.registrationState)).then(data => {
                if (data) {
                    this.props.history.push("/validation");
                }
            })
        }
    };


    render() {
        return (
            <div>
                <button
                    onClick={this.registerButtonHandler}
                    className="register-button"
                >
                    Register
                </button>
            </div>
        );
    }
}

export default connect()(withRouter(RegisterButton));
