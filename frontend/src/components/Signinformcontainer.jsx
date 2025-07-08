import React from 'react';
import SignInFormContainer from '../../public/styles/Signinformcontainer.module.css';
import SignInForm from '../components/Signinform';

function Signinformcontainer({state}) {
    
    return (

        <div className={SignInFormContainer.signInStyle} style={state}>

            <SignInForm />

        </div>

    );

}

export default Signinformcontainer;