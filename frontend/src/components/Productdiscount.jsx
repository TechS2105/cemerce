import React from 'react';
import ProductDiscountStyle from '../../public/styles/Productdiscount.module.css';

function Productdiscount({discountImage, discountHeading, onButtonClick, handleWomenProductDiscountScroll, womenDiscountImageAnime, womenDiscountHeadingAnime, womenDiscountFirstParaAnime, womenDiscountSecondParaAnime, womenDiscountShopNowButton}) {
    
    return (

        <>
        
            <div className={ProductDiscountStyle.productDiscountSection} onScroll={handleWomenProductDiscountScroll}>

                <div className={ProductDiscountStyle.productDiscountImageContainer}>

                    <img src={discountImage} alt={discountImage} style={womenDiscountImageAnime} />

                </div>

                <div className={ProductDiscountStyle.productDiscountContent}>

                    <h2 style={womenDiscountHeadingAnime}>{discountHeading}</h2>
                    <p style={womenDiscountFirstParaAnime}><span>50%</span>OFF</p>
                    <p style={womenDiscountSecondParaAnime}>Limited<span> Time </span>Offer</p>
                    <button onClick={onButtonClick} style={womenDiscountShopNowButton}>Shop Now</button>

                </div>

            </div>

        </>

    );

}

export default Productdiscount;