import React from 'react';
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";

function Productimage(props) {
    
    return (

        <>
        
            <GoHeart />
            <FaRegEye />
            <img src={props.productImage} alt={props.title} />
        
        </>

    );

}

export default Productimage;