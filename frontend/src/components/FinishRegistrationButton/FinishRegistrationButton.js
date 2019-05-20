import React, {Component} from 'react';
import {withRouter} from "react-router";
import {connect} from 'react-redux'
import {ValidationAction} from "../../store/actions/registrationValidationAction";

import './FinishRegistrationButton.css'

class FinishRegistrationButton extends Component {
    validationButtonHandler = event => {
        if (this.props.registrationValidationState.email !== '' &&
            this.props.registrationValidationState.username !== '' &&
            this.props.registrationValidationState.validation_code !== '' &&
            this.props.registrationValidationState.password !== '' &&
            this.props.registrationValidationState.password_repeat !== '') {
            event.preventDefault();
            this.props.dispatch(ValidationAction(this.props.registrationValidationState)).then(data => {
                if (data) {
                    this.props.history.push("/login");
                }
            })
        }
    };

    render() {
        return (
            <div>
                <button
                    className='finish-registration-button'
                    onClick={this.validationButtonHandler}
                >
                    Finish Registration
                </button>
            </div>
        )
    }
}

export default connect()(withRouter(FinishRegistrationButton));
