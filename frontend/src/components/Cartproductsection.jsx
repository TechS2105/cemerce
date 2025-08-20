import React from 'react';
import CartProductTable from '../components/Cartproducttable';

function Cartproductsection({CartStyle, cartProduct, removeProduct}) {
    
    return (

        <>
        
            <div className={CartStyle.cartProductSection}>

                <div className={CartStyle.cartProductHeading}>

                    <h2> Your Cart </h2>

                </div>

                <CartProductTable
                
                    CartStyle={CartStyle}
                    cartProduct={cartProduct}
                    removeProduct={removeProduct}
                
                />

            </div>
            
        </>

    );

}

export default Cartproductsection;