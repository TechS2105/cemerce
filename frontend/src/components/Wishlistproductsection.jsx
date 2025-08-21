import React, {useEffect} from 'react';
import WishlistProduct from '../components/Wishlistproduct';
import { fetchWishlistProduct } from '../features/Shop/WishListSlice';
import { useSelector, useDispatch } from 'react-redux';
import EmptyProductMessage from '../components/Emptyproductmessage';

let productLength = 0; 

function Wishlistproductsection({WishlistStyle, WishlistItems, DeleteWishlistProduct}) {

    const { items: wishlistProductLength } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchWishlistProduct());

    }, [dispatch]);
    
    return (

        <>
        
            <div className={WishlistStyle.wishlistProductSection}>

                <div className={WishlistStyle.wishlistProductHeading}>

                    <h2> Your Wishlist </h2>

                </div>

                {productLength !== wishlistProductLength.length ?

                    <WishlistProduct
                
                        WishlistStyle={WishlistStyle}
                        WishlistItems={WishlistItems}
                        DeleteWishlistProduct={DeleteWishlistProduct}
                    
                    />

                    : <EmptyProductMessage />
                    
                }

            </div>
            
        </>

    );

}

export default Wishlistproductsection;