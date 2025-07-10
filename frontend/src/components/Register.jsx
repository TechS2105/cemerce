import React from 'react';
import RegisterStyle from '../../public/styles/Register.module.css';
import RegisterForm from '../components/Registerform';
import { AiOutlineClose } from "react-icons/ai";

function Register({formStyle, secondFormStyle, onButtonClick}) {
    
    return (

        <div className={RegisterStyle.registerDiv} style={formStyle}>

            <div className={RegisterStyle.register} style={secondFormStyle}>
                
                <div className={RegisterStyle.registerHeading}>

                    <AiOutlineClose onClick={onButtonClick} />
                    <h2> Register With <span>C</span>-EMERCE </h2>

                </div>

                <div className={RegisterStyle.registerForm}>

                    <RegisterForm />

                </div>

            </div>

        </div>

    );

}

export default Register;