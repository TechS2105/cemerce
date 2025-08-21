import React from 'react';
import WishlistProductImage from '../components/Wishlistproductimage';
import WishlistProductDetails from '../components/Wishlistproductdetails';

let image = "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg";

function Wishlistproduct({WishlistStyle}) {
    
    return (

        <>
        
            <div className={WishlistStyle.wishlistProduct}>

                <div className={WishlistStyle.box}>

                    <div className={WishlistStyle.wishlistProductImage}>

                        <WishlistProductImage
                        
                            image={image}
                            
                        />

                    </div>
                    <div className={WishlistStyle.wishlistProductDetails}>

                        <WishlistProductDetails
                        
                            title="Product Title"
                            price="2,000"
                            
                        />

                    </div>

                </div>
    
           </div>
            
        </>

    );

}

export default Wishlistproduct;