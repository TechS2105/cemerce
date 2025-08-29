import React from 'react';
import { NavLink } from 'react-router-dom';

function Wishlistproductdetails(props) {
    
    return (

        <>
        
            <NavLink to={`/${props.category}/${props.title}`}>

                <h4>{props.title}</h4>

            </NavLink>
            <p>Rs. {props.price}</p>
            <span onClick={props.DeleteWishlistProduct}>Remove</span>

        </>

    );

}

export default Wishlistproductdetails;