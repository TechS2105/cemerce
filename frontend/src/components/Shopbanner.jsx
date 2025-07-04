import React from 'react';
import ShopBannerImageStyle from '../../public/styles/Shopbannerimage.module.css';

function Shopbanner({image}) {
    
    return (

        <>

            <img src={image} alt={image} className={ShopBannerImageStyle.shopBannerImage} />
            
        </>

    );
    
}

export default Shopbanner