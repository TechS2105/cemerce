import React, {useState} from 'react';
import NavbarStyle from '../../public/styles/Navbar.module.css';
import { FiMenu } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import NavMenu from '../components/Navmenu';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
                    <li><NavLink to="#"><AiOutlineUser /></NavLink></li>
                    <li><NavLink to="/wishlist"><GoHeart /></NavLink></li>
                    <li><NavLink to="/cart"><HiOutlineShoppingCart /><span>{productLength.length}</span></NavLink></li>

                </ul>        

            </div>

        </header>

    );

}

export default Navbar;