import React, {useEffect} from 'react';
import ReuseableProductSecondNavbar from '../components/Reuseablesecondproductnav';
import WishlistProductSection from '../components/Wishlistproductsection';
import WishlistStyle from '../../public/styles/Wishlist.module.css';
import { fetchWishlistProduct } from '../features/Shop/WishListSlice';
import { useSelector, useDispatch } from 'react-redux';
import { removeWishlistProduct } from '../features/Shop/WishListSlice';

function Wishlist() {

    const { items: wishlistProduct, status } = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

    useEffect(() => {

        if (status === 'idle') {
            
            dispatch(fetchWishlistProduct());

        }

    }, [status, dispatch])
    
    return (

        <>
        
            <main>

                <ReuseableProductSecondNavbar
            
                    navLink="HOME"
                    currentPageName="Wishlist"
                
                />

                <WishlistProductSection
                
                    WishlistStyle={WishlistStyle}
                    WishlistItems={wishlistProduct}
                    DeleteWishlistProduct={removeWishlistProduct}
                
                />

            </main>

        </>

    );

}

export default Wishlist;