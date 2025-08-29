import React from 'react';
import QuickViewBoxStyle from '../../public/styles/Quickviewbox.module.css';
import { BsBoxSeam } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

function Quickviewbox({product, quickBoxSectionStyle, onClick, quickViewBoxAnime, closeIconAnime}) {

    return (

        <>
        
            <div className={QuickViewBoxStyle.quickViewBoxSection} style={quickBoxSectionStyle}>

                <div className={QuickViewBoxStyle.closeIcon} onClick={onClick} style={closeIconAnime}>

                    <span></span>
                    <span></span>

                </div>
                
                <div className={QuickViewBoxStyle.quickViewBox} style={quickViewBoxAnime}>

                    <div className={QuickViewBoxStyle.quickViewBoxImage}>

                        <img src={product.image} alt={product.title} />

                    </div>

                    <div className={QuickViewBoxStyle.quickViewBoxDetails}>

                        <div className={QuickViewBoxStyle.firstQuickViewBoxDetails}>

                            <h2> {product.title} </h2>
                            <p> Rs. {product.price} </p>
                            <p>{product.details.description}</p>
                            <button> ADD TO CART </button>

                        </div>

                        <div className={QuickViewBoxStyle.secondQuickViewBoxDetails}>

                            
                            <p> <BsBoxSeam /> Spend Rs. 500.00 for Free Shipping</p>

                            <ul>

                                <li>SKU: {product.details.sku}</li>
                                <li>TYPE: {product.details.types} </li>
                                <li>VENDOR: {product.details.vendor}</li>

                            </ul>

                            <NavLink to={`/${product.category}/${product.title}`}>

                                <span> View details </span>

                            </NavLink>

                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Quickviewbox;