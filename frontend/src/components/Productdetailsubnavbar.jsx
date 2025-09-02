import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import ProductDetailSubNavBarStyle from '../../public/styles/Productdetailsubnavbar.module.css';
import { NavLink } from 'react-router-dom';

function Productdetailsubnavbar({navLink, productCategory, productTitle, productDetailSubNavBarStyle}) {
    
    return (

        <>
        
            <div className={ProductDetailSubNavBarStyle.productDetailsNavBar} style={productDetailSubNavBarStyle}>

                <NavLink to={'/'}>

                    <span> {navLink} </span>

                </NavLink>

                <MdKeyboardArrowRight />

                <span> {productCategory} </span>

                <MdKeyboardArrowRight />

                <div className={ProductDetailSubNavBarStyle.scrollableText}>

                    <div className={ProductDetailSubNavBarStyle.productTitle}>

                        <span> {productTitle} </span>

                    </div>
                    <div className={ProductDetailSubNavBarStyle.productTitle}>

                        <span> {productTitle} </span>

                    </div>
                    <div className={ProductDetailSubNavBarStyle.productTitle}>

                        <span> {productTitle} </span>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Productdetailsubnavbar;