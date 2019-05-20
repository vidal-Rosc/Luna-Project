import React, {Component} from 'react';
import VerificationTitle from "../../components/VerificationTitle/VerificationTitle";
import VerificationForm from "../../components/VerificationForm/VerificationForm";

import './ValidationPage.css'

class ValidationPage extends Component {
    render() {
        return (
            <div className='verification-main-container'>
                <VerificationTitle/>
                <VerificationForm/>
            </div>
        );
    }
}

export default ValidationPage;