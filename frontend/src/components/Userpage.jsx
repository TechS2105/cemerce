import React, {useState} from 'react';
import UserPageStyle from '../../public/styles/User.module.css';
import Footer from '../components/Footer';
import SignUpFormContainer from '../components/Signupformcontainer';
import SignInFormContainer from '../components/Signinformcontainer';

function Userpage() {
    
    const [formFunction, setFormFunction] = useState(

        {

            transform: "scale(1)",
            opacity: "1",
            filter: "blur(0px)",

        }
        
    );

    const [formShow, setFromShow] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",
        opacity: "0",

    });

    const [signInFormHeading, setSignInFormHeading] = useState({

        transform: "scale(1)",
        filter: "blur(0px)",
        opacity: "1",

    });

    const [signInFormShow, setSignInFormShow] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",
        opacity: "0"

    })

    function handleSignUpClick() {
        
        setFormFunction({

            transform: "scale(0)",
            opacity: 0,
            filter: "blur(20px)",
            transition: "all 0.8s ease",

        });

        setFromShow({

            transform: "scale(1)",
            transition: "all 0.8s ease 0.3s",
            opacity: "1",
            filter: "blur(0px)",
            cursor: "default"

        });

        setSignInFormShow({

            transform: "scale(0)",
            transition: "all 0.5s ease",
            opacity: "1",
            filter: "blur(0px)"


        });

        setSignInFormHeading({

            transform: "scale(1)",
            filter: "blur(0px)",
            opacity: "1",
            transition: 'all 0.5s ease 0.5s'

        })

    }

    function handleSignInClick() {
        
        setSignInFormHeading({

            transform: "scale(0)",
            filter: "blur(20px)",
            transition: "all 0.5s ease",
            opacity: "0"

        });

        setFromShow({

            transform: "scale(0)",
            filter: "blur(20px)",
            opacity: "0",
            transition: "all 0.5s ease"

        });

        setFormFunction({

            transform: "scale(1)",
            transition: "all 0.5s ease 0.5s",
            filter: "blur(0px)",
            opacity: "1"

        });

        setSignInFormShow({

            transform: "scale(1)",
            transition: "all 0.5s ease 0.5s",
            opacity: "1",
            filter: "blur(0px)"


        });

    }

    return (

        <>
            
            <div className={UserPageStyle.userContainer}>

                <div className={UserPageStyle.signUpBox} onClick={handleSignUpClick}> 

                    <h2 style={formFunction}> SignUp </h2>

                    <SignUpFormContainer
                    
                        state={formShow}                      
                        
                    />

                </div>

                <div className={UserPageStyle.signInBox} onClick={handleSignInClick}>

                    <h2 style={signInFormHeading}> SignIn </h2>

                    <SignInFormContainer
                    
                        state={signInFormShow}
                        
                    />

                </div>

            </div>

            <Footer />
        </>

    );

}

export default Userpage;