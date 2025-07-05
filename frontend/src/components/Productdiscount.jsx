import React from 'react';
import ProductDiscountStyle from '../../public/styles/Productdiscount.module.css';

function Productdiscount({discountImage, discountHeading, onButtonClick}) {
    
    return (

        <>
        
            <div className={ProductDiscountStyle.productDiscountSection}>

                <div className={ProductDiscountStyle.productDiscountImageContainer}>

                    <img src={discountImage} alt={discountImage} />

                </div>

                <div className={ProductDiscountStyle.productDiscountContent}>

                    <h2>{discountHeading}</h2>
                    <p><span>50%</span>OFF</p>
                    <p>Limited<span> Time </span>Offer</p>
                    <button onClick={onButtonClick}>Shop Now</button>

                </div>

            </div>

        </>

    );

}

export default Productdiscount;