import React from 'react';
import ShopStyle from '../../public/styles/Shop.module.css'
import ShopBannerImage from '../components/Shopbanner';
import ShopProducts from '../components/Shopproducts';
import ShopPageHeading from '../components/Reuseablepageheading';

let shopBannerImage = "../../public/images/Shop Banner Images/shop.webp";

function Shop() {
    
    return (

        <>
            <main>

                <div className={ShopStyle.shopBanner}>

                    <ShopBannerImage
                    
                        image= {shopBannerImage}
                        
                    />

                </div>

                <div className={ShopStyle.shopProducts}>

                    <ShopPageHeading 
                    
                        pageHeading="Collections For You"
                        
                    />
                    
                    <ShopProducts />

                </div>
                
            </main>

        </>

    );

}

export default Shop;