import React from 'react';
import FooterStyle from '../../public/styles/Footer.module.css';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { useForm } from 'react-hook-form';

function Footer() {

    const {

        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }

    } = useForm();

    const onSubmit = async (data) => {
        
        const res = await fetch("http://localhost:3000/api/send/mail", {

            headers: {"Content-Type" : "application/json; charset=utf-8"},
            method: "POST",
            body: JSON.stringify(data)

        });
        let resData = await res.json(); 
        console.log(data, resData);
        reset();

    };

    let year = new Date().getFullYear(); 
    
    return (

        <>
        
            <footer>

                <div className={FooterStyle.footerOverlay}>

                    <div className={FooterStyle.footerLinkBoxes}>

                        {/** First Footer Link Box */}

                        <div className={FooterStyle.footerBox1}>

                            <div className={FooterStyle.aboutHeading}>

                                <h3> About </h3>

                            </div>

                            <div className={FooterStyle.aboutContent}>

                                <p>C-EMERCE delivers trendy, affordable fashion for all—women, men, and kids. Shop styles you love, with comfort and confidence!.</p>

                                <ul>

                                    <li>Toll Free: <span>081-882-88221</span></li>
                                    <li>Email: <span> cMerce.buisiness@gmailcom</span> </li>

                                </ul>

                            </div>

                        </div>

                        {/** Second Footer Link Box */}

                        <div className={FooterStyle.footerBox2}>

                            <div className={FooterStyle.quickLinksHeading}>

                                <h3> Quick Links </h3>

                            </div>

                            <div className={FooterStyle.quickLinksContent}>
                            
                                <ul>

                                    <li><NavLink to='/'>HOME</NavLink> </li>
                                    <li><NavLink to='/shop'>SHOP</NavLink> </li>
                                    <li><NavLink to='/men'>MEN'S</NavLink> </li>
                                    <li><NavLink to='/women'>WOMEN'S</NavLink> </li>
                                    <li><NavLink to='/kids'>KID'S</NavLink> </li>

                                </ul>
                                
                            </div>                            

                        </div>

                        {/** Third Footer Link Box */}

                        <div className={FooterStyle.footerBox3}>

                            <div className={FooterStyle.otherLinksHeading}>

                                <h3> Other Links </h3>

                            </div>
                            
                            <div className={FooterStyle.otherLinksContent}>

                                <ul>

                                    <li><NavLink to='#'>Track Order</NavLink></li>
                                    <li><NavLink to='#'>Privacy Policy</NavLink></li>
                                    <li><NavLink to='#'>Return & Refund Policy</NavLink></li>
                                    <li><NavLink to='#'>Terms & Conditions</NavLink></li>

                                </ul>

                            </div>
                            
                        </div>

                        {/** Fourth Footer Link Box */}
                        <div className={FooterStyle.footerBox4}>

                            <div className={FooterStyle.newsLetterHeading}>

                                <h3> Newsletter </h3>

                            </div>
                            
                            <div className={FooterStyle.newsLetterContent}>

                                <p>Sign up to our newsletter to receive exclusive offers.</p><br />

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <input type="email" placeholder='Email' {...register('email', { required: { value: true, message: 'This field is required' }, maxLength: { value: 50, message: "Max length is 50" } })} /><br />
                                    
                                    {errors.email && <div className={FooterStyle.errorMessage}>{ errors.email.message }</div>}

                                    <br />

                                    {isSubmitting && <div className={FooterStyle.successMail}> Mail has been submitting...</div>}
                                    <button type='submit'> Subscribe </button>

                                </form>

                            </div>
                            

                        </div>

                    </div>
                   
                    <div className={FooterStyle.footerCopyright}>

                        <div className={FooterStyle.copyrightContent}>

                            <p> Copyright &copy; {year} </p>

                        </div>
                        <div className={FooterStyle.copyrightLogo}>

                            <span className={FooterStyle.creatorName}> Developed BY <NavLink to='https://ssd-lsr3.onrender.com' target='_blank'> SSD </NavLink> </span>

                            <p> <span className={FooterStyle.footerLogo}>C</span>-EMERCE </p>


                        </div>
                        <div className={FooterStyle.copyrightSocial}>

                            <ul>

                                <li><FaFacebookF /></li>
                                <li><FaInstagram /></li>
                                <li><FaXTwitter /></li>
                                <li><FaPinterestP /></li>
                                <li><AiOutlineYoutube /></li>

                            </ul>

                        </div>

                    </div>

                </div>
                
            </footer>
            
        </>

    );

}

export default Footer;