import React, {useState} from 'react';
import NavbarStyle from '../../public/styles/Navbar.module.css';
import { FiMenu } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import NavMenu from '../components/Navmenu';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RegisterPage from '../components/Register';
import LoginPage from '../components/Login';

function Navbar() {

    const navigate = useNavigate();

    const productLength = useSelector((state) => state.cart.items);

    const [navMenu, setNavMenu] = useState({

        transform: "translateX(-1000px)"

    });

    const [hideMenu, setHideMenu] = useState({

        transform: "scale(1)",

    })

    function handleNavmenu() {
        
        setNavMenu({

            transform: "translateX(0px)",
            transition: "all 0.8s ease"

        });

        setHideMenu({

            transform: "scale(0)",
            transition: "all 0.8s ease"

        })

    }

    function hendelClose() {
        
        console.log("click");

        setNavMenu({

            transform: "translate(-1000px)",
            transition: 'all 0.8s ease',

        });

        setHideMenu({

            transform: "scale(1)",
            transition: "all 0.8s ease",

        })

    }

    const [navMouseHover, setNavMouseHover] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",

    });

    function handleMouseOver() {
        
        setNavMouseHover({

            transform: "scale(1)",
            filter: "blur(0px)",
            transition: "all 0.5s ease"

        })

    }

    /** Registration Form Open and Close Handler*/
    const [hideRegisterForm, setHideRegisterForm] = useState({

        transform: "scale(0)",
        opacity: "0",

    });

    const [handleRegisterForm, setHandleRegisterForm] = useState({

        transform: "translateY(-2000px)",
        opacity: "0"

    })

    function handelRegisterForm() {
        
        setHideRegisterForm({

            transform: "scale(1)",
            opacity: "1",
            transition: 'all 0.8s ease'

        });

        setNavMouseHover({

            transform: "scale(0)",
            filter: "blur(20px)",
            opacity: "0",
            transition: "all 0.5s ease"

        });

        setHandleRegisterForm({

            transform: "translateY(0px)",
            transition: "all 0.8s ease 0.5s",
            opacity: "1"

        })

    }

    function handleRegFormClose() {
        
        setHandleRegisterForm({

            transform: "translateY(-2000px)",
            transition: "all 0.8s ease",
            opacity: "0"

        });

        setHideRegisterForm({

            transform: "scale(0)",
            transition: "all 0.8s ease 0.3s",
            opacity: "0"

        })

    }

    /** Login Form Open and Close Handler */

    const [loginFormContainer, setLoginFormContainer] = useState({

        transform: "scale(0)",
        opacity: "0",

    });

    const [loginFromAnime, setLoginFromAnime] = useState({

        transform: "translateY(-2000px)",
        opacity: "0"

    });

    function handelLoginForm() {
        
        setLoginFormContainer({

            transform: "scale(1)",
            opacity: "1",
            transition: "all 0.5s ease",

        });

        setLoginFromAnime({

            transform: "translateY(0px)",
            transition: "all 0.8s ease 0.3s",
            opacity: "1"

        });

        setNavMouseHover({

            transform: "scale(0)",
            filter: "blur(20px)",
            opacity: "0",
            transition: "all 0.8s ease"

        });

    }

    function handleLogFormClose() {
        
        setLoginFromAnime({

            transform: "translateY(-2000px)",
            transition: "all 0.8s ease",
            opacity: "0"

        });

        setLoginFormContainer({

            transform: "scale(0)",
            opacity: "0",
            transition: "all 0.8s ease 0.3s"
            
        })

    }
    
    return (

        <header>

            <div className={NavbarStyle.menu}>

                <div className={NavbarStyle.menuIcon}>

                    <FiMenu onClick={handleNavmenu} style={ hideMenu} />

                </div>

                <NavMenu
                
                    state={navMenu}
                    onClick={hendelClose}
                    
                />

            </div>
            
            <div className={NavbarStyle.navLogo}>

                <h1 onClick={() => {navigate('/')}} style={{cursor: "pointer"}}> <span style={{color: "orange"}}>C</span>-EMERCE </h1>

            </div>

            <div className={NavbarStyle.navOtherIcons}>

                <ul>
                
                    <li><input type="search" placeholder='Search Your Product...'/></li>
                    <li><NavLink to="#"><AiOutlineUser onMouseOver={handleMouseOver} /></NavLink>
                    
                        <div className={NavbarStyle.dropDownUser} style={navMouseHover}>

                            <ul>

                                <li onClick={handelRegisterForm}> Register </li>
                                <li onClick={handelLoginForm}> Login </li>

                            </ul>

                        </div>

                        <RegisterPage
                        
                            formStyle={hideRegisterForm}
                            secondFormStyle={handleRegisterForm}
                            onButtonClick={handleRegFormClose}
                            
                        />

                        <LoginPage 
                        
                            formStyle={loginFormContainer}
                            loginFormShow={loginFromAnime}
                            onButtonClick={handleLogFormClose}
                            
                        />
                        
                    </li>
                    <li><NavLink to="/wishlist"><GoHeart /></NavLink></li>
                    <li><NavLink to="/cart"><HiOutlineShoppingCart /><span>{productLength.length}</span></NavLink></li>

                </ul>        

            </div>

        </header>

    );

}

export default Navbar;