import React from 'react';
import WishlistProduct from '../components/Wishlistproduct';

function Wishlistproductsection({WishlistStyle}) {
    
    return (

        <>
        
            <div className={WishlistStyle.wishlistProductSection}>

                <div className={WishlistStyle.wishlistProductHeading}>

                    <h2> Your Wishlist </h2>

                </div>

                <WishlistProduct
                
                    WishlistStyle={WishlistStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Wishlistproductsection;