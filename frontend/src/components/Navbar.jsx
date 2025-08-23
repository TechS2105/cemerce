import React, {useState, useEffect} from 'react';
import NavbarStyle from '../../public/styles/Navbar.module.css';
import { FiMenu } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import NavMenu from '../components/Navmenu';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchCartProduct } from '../features/Shop/CartSlice';
import { fetchWishlistProduct } from '../features/Shop/WishListSlice';
import { useSelector, useDispatch } from 'react-redux';
import RegisterPage from '../components/Register';
import LoginPage from '../components/Login';

function Navbar() {

    const navigate = useNavigate();

    const { items: cartProductLength } = useSelector((state) => state.cart);
    const { items: wishlistProductLength } = useSelector((state) => state.wishlist);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchCartProduct());
        dispatch(fetchWishlistProduct());

    }, [dispatch]);

    const [navMenu, setNavMenu] = useState({

        transform: "translateX(-1000px)",
        opacity: "0",
        filter: "blur(50px)"

    });

    const [firstListAnime, setFirstListAnime] = useState({

        transform: 'translateX(-500px)',
        opacity: "0",
        filter: "blur(20px)",

    });

    const [secondListAnime, setSecondListAnime] = useState({

        transform: "translateX(-500px)",
        opacity: "0",
        filter: "blur(20px)",

    });

    const [thirdListAnime, setThirdListAnime] = useState({

        transform: "translateX(-500px)",
        opacity: "0",
        filter: "blur(20px)"

    });

    const [fourthListAnime, setFourthLastAnime] = useState({

        transform: "translateX(-500px)",
        opacity: "0",
        filter: "blur(20px)"

    });

    const [fifthListAnime, setFifthLastAnime] = useState({

        transform: "translateX(-500px)",
        opacity: "0",
        filter: "blur(20px)",

    });

    const [hideMenu, setHideMenu] = useState({

        transform: "scale(1)",

    });

    const [navCloseIconAnime, setNavCloseIconAnime] = useState({

        transform: "scale(0)",
        opacity: "0"

    });

    function handleNavmenu() {
        
        setNavMenu({

            transform: "translateX(0px)",
            transition: "all 0.8s ease",
            opacity: "1",
            filter: "blur(0px)"

        });

        setHideMenu({

            transform: "scale(0)",
            transition: "all 0.8s ease"

        });

        setNavCloseIconAnime({

            transform: "scale(1)",
            opacity: "1",
            transition: "all 0.8s ease"

        });

        setFirstListAnime({

            transform: "translateX(0px)",
            transition: "all 0.8s ease 0.5s",
            opacity: "1",
            filter: "blur(0px)"

        });

        setSecondListAnime({

            transform: "translateX(0px)",
            transition: "all 0.8s ease 0.7s",
            opacity: "1",
            filter: "blur(0px)"

        });

        setThirdListAnime({

            transform: 'translateX(0px)',
            transition: "all 0.8s ease 0.9s",
            opacity: "1",
            filter: "blur(0px)"

        });

        setFourthLastAnime({

            transform: 'translateX(0px)',
            transition: "all 0.8s ease 1.1s",
            opacity: "1",
            filter: "blur(0px)",

        });

        setFifthLastAnime({

            transform: "translateX(0px)",
            transition: "all 0.8s ease 1.3s",
            opacity: "1",
            filter: "blur(0px)",

        });

    }

    function hendelClose() {
        
        console.log("click");

        setNavMenu({

            transform: "translate(-1000px)",
            transition: 'all 0.8s ease 1.5s',
            opacity: "0",
            filter: "blur(50px)",

        });

        setHideMenu({

            transform: "scale(1)",
            transition: "all 0.8s ease 1.5s",

        });

        setNavCloseIconAnime({

            transform: 'scale(0)',
            opacity: "0",
            transition: "all 0.8s ease"

        })

        setFirstListAnime({

            transform: "translateX(-500px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "all 0.8s ease 1.3s"

        });

        setSecondListAnime({

            transform: "translateX(-500px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "all 0.8s ease 1.1s"

        });

        setThirdListAnime({

            transform: "translateX(-500px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "all 0.8s ease 0.9s"

        });

        setFourthLastAnime({

            transform: "translateX(-500px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "all 0.8s ease 0.7s"

        });

        setFifthLastAnime({

            transform: "translateX(-500px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "all 0.8s ease 0.5s"

        });

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
                    firstListAnime={firstListAnime}
                    secondListAnime={secondListAnime}
                    thirdListAnime={thirdListAnime}
                    fourthListAnime={fourthListAnime}
                    fifthListAnime={fifthListAnime}
                    navCloseIconAnime={navCloseIconAnime}
                    
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
                    <li><NavLink to="/wishlist"><GoHeart /><span>{wishlistProductLength.length}</span></NavLink></li>
                    <li><NavLink to="/cart"><HiOutlineShoppingCart /><span>({cartProductLength.length})</span></NavLink></li>

                </ul>        

            </div>

        </header>

    );

}

export default Navbar;