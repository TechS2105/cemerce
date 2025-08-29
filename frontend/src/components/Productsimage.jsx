import React from 'react';
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Productimage(props) {
    
    return (

        <>
        
            <GoHeart onClick={props.onButtonClick} />
            <FaRegEye onClick={props.handleQuickViewBox} />
            
            <NavLink to={`/${props.productCategory}/${props.title}`}>

                <img src={props.productImage} alt={props.title} />

            </NavLink>
        
        </>

    );

}

export default Productimage;