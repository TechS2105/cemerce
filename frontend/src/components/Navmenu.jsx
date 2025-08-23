import React from 'react';
import NavmenuStyle from '../../public/styles/Navmenu.module.css';
import { AiOutlineClose } from "react-icons/ai";
import {NavLink} from 'react-router-dom';

function Navmenu({state, onClick, firstListAnime, secondListAnime, thirdListAnime, fourthListAnime,
fifthListAnime, navCloseIconAnime}) {
    
    return (

        <>
            
            <div className={NavmenuStyle.navMenu} style={state}>

                <AiOutlineClose onClick={onClick} style={navCloseIconAnime} />
                
                <div className={NavmenuStyle.navMenuNameBox}>

                    <ul>

                        <li style={firstListAnime}><NavLink to="/">HOME</NavLink></li>
                        <li style={secondListAnime}><NavLink to="/shop">SHOP</NavLink></li>
                        <li style={thirdListAnime}><NavLink to="/men">MEN'S</NavLink></li>
                        <li style={fourthListAnime}><NavLink to="/women">WOMEN'S</NavLink></li>
                        <li style={fifthListAnime}><NavLink to="/kids">KID'S</NavLink></li>

                    </ul>

                </div>

            </div>
            
        </>

    );

}

export default Navmenu;