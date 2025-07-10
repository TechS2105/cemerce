import React from 'react';
import LoginStyle from '../../public/styles/Login.module.css';
import LoginForm from '../components/Loginform';
import { AiOutlineClose } from "react-icons/ai";

function Login({formStyle, loginFormShow, onButtonClick}) {
    
    return (

        <div className={LoginStyle.loginContainer}  style={formStyle}>

            <div className={LoginStyle.loginFormSection} style={loginFormShow}>

                <div className={LoginStyle.loginFormHeading}>

                    <AiOutlineClose onClick={onButtonClick}/>
                    <h2> Login With <span>C</span>-EMERCE </h2>

                </div>

                <div className={LoginStyle.loginForm}>

                    <LoginForm />

                </div>

            </div>

        </div>

    );

}

export default Login;