import React from 'react';

function Wishlistproductdetails(props) {
    
    return (

        <>
        
            <h4>{props.title}</h4>
            <p>Rs. {props.price}</p>
            <span onClick={props.DeleteWishlistProduct}>Remove</span>

        </>

    );

}

export default Wishlistproductdetails;