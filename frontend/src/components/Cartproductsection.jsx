import React, {useEffect} from 'react';
import CartProductTable from '../components/Cartproducttable';
import CartEmptyMessage from '../components/Cartemptymessage';
import { fetchCartProduct } from '../features/Shop/CartSlice';
import { useSelector, useDispatch } from 'react-redux';

let cartProductLength = 0;

function Cartproductsection({CartStyle, cartProduct, removeProduct}) {

    const { items: cartProductsLength } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchCartProduct());

    }, [dispatch]);
    
    return (

        <>
        
            <div className={CartStyle.cartProductSection}>

                <div className={CartStyle.cartProductHeading}>

                    <h2> Your Cart </h2>

                </div>

                {cartProductLength !== cartProductsLength.length ? 
                
                    <CartProductTable
                    
                        CartStyle={CartStyle}
                        cartProduct={cartProduct}
                        removeProduct={removeProduct}
                    
                    />

                    : <CartEmptyMessage />
                    
                }
                

            </div>
            
        </>

    );

}

export default Cartproductsection;