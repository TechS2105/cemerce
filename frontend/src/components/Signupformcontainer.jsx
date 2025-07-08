import React from 'react';
import SignUpFormContainerStyle from '../../public/styles/Signupformcontainer.module.css';
import SignUpForm from '../components/Signupform';

function Signupformcontainer({state}) {
    
    return (

        <div className={SignUpFormContainerStyle.signUpFormContainer} style={state}>

            <div className={SignUpFormContainerStyle.signUpFormSection}>

                <div className={SignUpFormContainerStyle.signUpHeading}>

                    <h2> Sign Up </h2>

                </div>

                <div className={SignUpFormContainerStyle.formContainer}>

                    <SignUpForm />

                </div>

            </div>
            
        </div>

    );

}

export default Signupformcontainer;