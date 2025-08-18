import React from 'react';
import ProductDiscountStyle from '../../public/styles/Productdiscount.module.css';

function Productdiscount({discountImage, discountHeading, onButtonClick, handleProductDiscountScroll, discountImageAnime, discountHeadingAnime, discountFirstParaAnime, discountSecondParaAnime, discountShopNowButton}) {
    
    return (

        <>
        
            <div className={ProductDiscountStyle.productDiscountSection} onScroll={handleProductDiscountScroll}>

                <div className={ProductDiscountStyle.productDiscountImageContainer}>

                    <img src={discountImage} alt={discountImage} style={discountImageAnime} />

                </div>

                <div className={ProductDiscountStyle.productDiscountContent}>

                    <h2 style={discountHeadingAnime}>{discountHeading}</h2>
                    <p style={discountFirstParaAnime}><span>50%</span>OFF</p>
                    <p style={discountSecondParaAnime}>Limited<span> Time </span>Offer</p>
                    <button onClick={onButtonClick} style={discountShopNowButton}>Shop Now</button>

                </div>

            </div>

        </>

    );

}

export default Productdiscount;