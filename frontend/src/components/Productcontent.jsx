import React from 'react';
import ProductContentStyle from '../../public/styles/Productcontent.module.css';

function Productcontent({productHeading, productCategory, productPrice, cartButton, onButtonClick}) {
    
    return (

        <div>
        
            <h3 className={ProductContentStyle.productSubHeading}>{productHeading}</h3>
            <p className={ProductContentStyle.productSubPara}>Category: {productCategory}</p>
            <p className={ProductContentStyle.productSubPara}>Price: {productPrice}</p>
            <button className={ProductContentStyle.productCartButton} onClick={onButtonClick}>{ cartButton }</button>
            
        </div>

    );

}

export default Productcontent;