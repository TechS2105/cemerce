import React from 'react';
import ShopStyle from '../../public/styles/Shop.module.css'
import ShopBannerImage from '../components/Shopbanner';
import ShopProducts from '../components/Shopproducts';
import Footer from '../components/Footer'

let shopBannerImage = "../../public/images/shopbanner.jpeg"

function Shop() {
    
    return (

        <>
            
            <div className={ShopStyle.shopBanner}>

                <ShopBannerImage
                
                    image= {shopBannerImage}
                    
                />

            </div>

            <div className={ShopStyle.shopProducts}>

                <div className={ShopStyle.shopProductHeading}>

                    <h2> Collections For You </h2>

                </div>
                
                <ShopProducts />

            </div>

            <Footer />

        </>

    );

}

export default Shop;