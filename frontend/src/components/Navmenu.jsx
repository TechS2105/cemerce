import React from 'react';
import NavmenuStyle from '../../public/styles/Navmenu.module.css';
import { AiOutlineClose } from "react-icons/ai";
import {NavLink} from 'react-router-dom';

function Navmenu({state, onClick}) {
    
    return (

        <>
            
            <div className={NavmenuStyle.navMenu} style={state}>

                <AiOutlineClose onClick={onClick}/>
                
                <div className={NavmenuStyle.navMenuNameBox}>

                    <ul>

                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/shop">SHOP</NavLink></li>
                        <li><NavLink to="/men">MEN'S</NavLink></li>
                        <li><NavLink to="/women">WOMEN'S</NavLink></li>
                        <li><NavLink to="/kids">KID'S</NavLink></li>

                    </ul>

                </div>

            </div>
            
        </>

    );

}

export default Navmenu;