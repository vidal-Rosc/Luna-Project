import React, {Component} from 'react'
import {connect} from "react-redux";
import FinishRegistrationButton from "../FinishRegistrationButton/FinishRegistrationButton";

import './VerificationForm.css'

class VerificationForm extends Component {
    state = {
        email: "",
        username: "",
        validation_code: "",
        location: "",
        password: "",
        password_repeat: "",
    }

    verificationFormHandler = event => {
        const value = event.currentTarget.value;
        const name = event.target.name;
        this.setState({
            [name]: value,
        })

    }

    render() {
        return (<div className="main-div-verification">
                <div className='verification-form-container'>
                    <input
                        name="email"
                        value={this.state.email}
                        onChange={this.verificationFormHandler}
                        placeholder='E-Mail address'/>
                    <input
                        name="username"
                        value={this.state.username}
                        onChange={this.verificationFormHandler}
                        placeholder='Username'/>
                    <input
                        name="validation_code"
                        value={this.state.validation_code}
                        onChange={this.verificationFormHandler}
                        placeholder='Validation code'/>
                    <input
                        name="location"
                        value={this.state.location}
                        onChange={this.verificationFormHandler}
                        placeholder='Location'/>
                    <input
                        name="password"
                        value={this.state.password}
                        onChange={this.verificationFormHandler}
                        placeholder='Password'/>
                    <input
                        name="password_repeat"
                        value={this.state.password_repeat}
                        onChange={this.verificationFormHandler}
                        placeholder='Password repeat'
                    />
                </div>
                <FinishRegistrationButton registrationValidationState={this.state}/>
            </div>

        )
    }
}

export default connect()(VerificationForm);