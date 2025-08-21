import React from 'react';
import WishlistProductImage from '../components/Wishlistproductimage';
import WishlistProductDetails from '../components/Wishlistproductdetails';
import { useDispatch } from 'react-redux';

function Wishlistproduct({WishlistStyle, WishlistItems, DeleteWishlistProduct}) {
    
    const dispatch = useDispatch();

    function handleWishlistProductDeletion(id) {
        
        dispatch(DeleteWishlistProduct(id));

    }

    return (

        <>
        
            <div className={WishlistStyle.wishlistProduct}>

                {WishlistItems.map((item, idx) => {

                    return (

                        <div className={WishlistStyle.box} key={idx}>

                            <div className={WishlistStyle.wishlistProductImage}>

                                <WishlistProductImage
                                                
                                    image={item.image}
                                    title={item.title}
                                                
                                />

                            </div>
                            <div className={WishlistStyle.wishlistProductDetails}>

                                <WishlistProductDetails
                                                
                                    title={item.title}
                                    price={item.price}
                                    DeleteWishlistProduct={() => handleWishlistProductDeletion(item.id)}
                                                    
                                />

                            </div>

                        </div>

                    );

                })}
    
           </div>
            
        </>

    );

}

export default Wishlistproduct;