import React from 'react';
import SignUpFormContainerStyle from '../../public/styles/Signupformcontainer.module.css';
import { useForm } from 'react-hook-form';

function Signupform() {

    const {
        
        register,
        handleSubmit,
        // reset,
        formState: { errors }

    } = useForm();

    const delay = (d) => {

        setTimeout(() => {

            return new Promise((resolve, reject) => {

                resolve();

            })

        }, d * 1000)
    
    }
    
    const onSubmit = async (data) => {
        
        await delay(2);
        console.log(data);

    };

    return (

        <>
        
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <label>Full Name</label><br />
                <input type="text" placeholder='Full Name' {...register('fullname', { required: { value: true, message: "This field is required" } })} /><br />
                
                {errors.fullname && <div className={SignUpFormContainerStyle.errorMessage}>{ errors.fullname.message }</div>}

                <br />
                                    
                <label>Email</label><br />
                <input type="email" placeholder='Email' {...register('email', { required: { value: true, message: "This field is required" }, maxLength: {maxLength: 50, message: "Max length is 50"} })} /><br />
                
                {errors.email && <div className={SignUpFormContainerStyle.errorMessage}> { errors.email.message } </div>}

                <br />
                                    
                <label>Mobile</label><br />
                <input type="tel" placeholder='Mobile' {...register('mobile', { required: { value: true, message: "This field is required" }, maxLength: { value: 10, message: "Max length is 10"} })} /><br />
                
                {errors.mobile && <div className={SignUpFormContainerStyle.errorMessage}> { errors.mobile.message }</div>}
                
                <br />
            
                <label>Password</label><br />
                <input type="password" placeholder='Password' {...register('password', { required: { value: true, message: "This field is required" }, maxLangth: { value: 12, messsage: "Max length is 12" } })} /><br />
                
                {errors.password && <div className={SignUpFormContainerStyle.errorMessage}>{errors.password.message}</div>}

                <br />
            
                <div className={SignUpFormContainerStyle.signupLinks}>
            
                    <button type='submit'> Sign Up </button>
            
                </div>
            
            </form>
            
        </>

    );

}

export default Signupform;