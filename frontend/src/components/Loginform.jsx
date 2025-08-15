import React from 'react';
import LoginFormStyle from '../../public/styles/Loginform.module.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Loginform() {

    const navigate = useNavigate();

    const {

        handleSubmit,
        register,
        reset,
        formState: { errors }

    } = useForm();

    const onSubmit = async (data) => {
        
        try{

            const response = await fetch("http://localhost:3000/login", {
            
                headers: { "Content-Type": "application/json; charset=utf-8" },
                method: "POST",
                body: JSON.stringify(data)
                
            });

            if (!response.ok) {
                
                throw new Error(`HTTP! Status ${response.status}`);

            }

            let getData = await response.json();
            console.log(data, getData);
            
            if (getData.success) {
                
                reset();
                navigate('/cart');

            } else {
                
                alert(getData.message || "Username or Password has been incorrect");
                navigate('/');

            }

        }catch(error){

            console.log(error);

        }
    
    };
    
    return (

        <div className={LoginFormStyle.loginFormStyle}>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label> Username / Email </label><br />
                <input type="email" placeholder='Username / Email' {...register('email', { required: { value: true, message: "Email is required" }, maxLength: { value: 50, message: "Email max length is 50" } })} /><br />
                
                {errors.email && <div className={LoginFormStyle.loginFormErrors}>{ errors.email.message }</div>}

                <br />

                <label> Password </label><br />
                <input type="password" placeholder='Password' {...register('password', { required: { value: true, message: "Password is required" }, maxLength: { value: 8, message: "Password length is 8" } })} /><br />
                
                {errors.password && <div className={LoginFormStyle.loginFormErrors}>{ errors.password.message }</div>}

                <br />

                <button type='submit'> Login </button>

            </form>
            
        </div>

    );

}

export default Loginform;