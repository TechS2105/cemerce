import React from 'react';
import SignInFormStyle from '../../public/styles/Signinform.module.css';
import { useForm } from 'react-hook-form';;

function Signinform() {

    const {

        register,
        handleSubmit,
        // reset,
        formState: { errors },

    } = useForm();

    const delay = (d) => {

        setTimeout(() => {

            return new Promise((resolve, reject) => {

                try { 


                    resolve();

                } catch (error) {
                    
                    reject(error);

                }

            })

        }, d * 1000)

    }

    const onSubmit = async (data) => {
        
        await delay(3);
        console.log(data)

    };

    return (

        <>
        
            <div className={SignInFormStyle.signInContainer}>

                <div className={SignInFormStyle.signInFormHeading}>

                    <h2> Sign In </h2>

                </div>

                <div className={SignInFormStyle.signInFormSection}>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label> Email </label><br />
                        <input type="email" placeholder='Email' {...register('email', { required: { value: true, message: "This field is required" }, maxLength: { value: 50, message: "Max length is 50" } })} /><br />
                        
                        {errors.email && <div className={SignInFormStyle.errorStyle}>{ errors.email.message }</div>}
                        
                        <br />
                        
                        <label> Password </label><br />
                        <input type="password" placeholder='Password' {...register('password', { required: { value: true, message: "This field is required" }, maxLength: { value: 12, message: "Max length is 12" } })} /><br />
                        
                        {errors.password && <div className={SignInFormStyle.errorStyle}>{ errors.password.message }</div>}

                        <br />

                        <button type='submit'> Sign In </button>


                    </form>

                </div>

            </div>
            
        </>

    );

}

export default Signinform;