import React from 'react';
import RegisterFormStyle from '../../public/styles/Registerform.module.css';
import { useForm } from 'react-hook-form';

function Registerform() {

    const {
        
        register,
        handleSubmit,
        formState: { errors },
        // reset,

    } = useForm();

    const onSubmit = (data) => console.log(data);
    
    return (

        <div className={RegisterFormStyle.registerFormBox}>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label> Full Name </label><br />
                <input type="text" placeholder='Full Name' {...register('fullname', { required: { value: true, message: "This field is required" } })} /><br />
                
                {errors.fullname && <div className={RegisterFormStyle.register}>{ errors.fullname.message }</div>}

                <br />
                
                <label> Email </label><br />
                <input type="email" placeholder='Email' {...register('email', {required: {value: true, message: "This field is required"}, maxLength: {value: 50, message: "This field is required"}})}/><br />
                
                {errors.email && <div className={RegisterFormStyle.register}>{ errors.email.message }</div>}

                <br />

                <label> Mobile </label><br />
                <input type="tel" placeholder='Mobile No.' {...register('mobile', {required: {value: true, message: "This field is required"}, maxLength: {value: 10, message: "Max length is 10"}})} maxLength={10}/><br />
                
                {errors.mobile && <div className={RegisterFormStyle.register}>{ errors.mobile.message }</div>}

                <br />
                
                <label> Password </label><br />
                <input type="password" placeholder='Password' {...register('password', {required: {value: true, message: "This field is required"}, maxLength: {value: 8, message: "Password length is 8"}})} /><br />
                
                {errors.password && <div className={RegisterFormStyle.register}>{ errors.password.message }</div>}

                <br />

                <button type='submit'> Register </button>

            </form>

        </div>

    );

}

export default Registerform;