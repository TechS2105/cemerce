import React from 'react';
import ReuseableProductSecondNavbar from '../components/Reuseablesecondproductnav';
import WishlistProductSection from '../components/Wishlistproductsection';
import WishlistStyle from '../../public/styles/Wishlist.module.css';
import Footer from '../components/Footer';

function Wishlist() {
    
    return (

        <>
        
            <main>

                <ReuseableProductSecondNavbar
            
                    navLink="HOME"
                    currentPageName="Wishlist"
                
                />

                <WishlistProductSection
                
                    WishlistStyle={WishlistStyle}
                
                />

            </main>
            
            <Footer />

        </>

    );

}

export default Wishlist;