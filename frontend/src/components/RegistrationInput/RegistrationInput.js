import React, {Component} from "react";
import RegisterButton from "../RegisterButton/RegisterButton";

import "./RegistrationInput.css";

class RegistrationInput extends Component {
    state = {
        email: ""
    };

    registrationInputHandler = event => {
        const email = event.currentTarget.value;
        this.setState({
            email
        });
    };


    render() {
        return (
            <div className="registration-input-main-container">
                <input
                    className="registration-input"
                    placeholder="E-Mail address"
                    value={this.state.email}
                    onChange={this.registrationInputHandler}
                />
                <RegisterButton registrationState={this.state}/>
            </div>
        );
    }
}

export default RegistrationInput
