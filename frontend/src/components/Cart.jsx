import React, {useEffect} from 'react';
import CartStyle from '../../public/styles/Cart.module.css';
import ReuseableSecondProductNav from '../components/Reuseablesecondproductnav';
import CartProductSection from '../components/Cartproductsection';
import { fetchCartProduct } from '../features/Shop/CartSlice';
import { removeCartProduct } from '../features/Shop/CartSlice';
import { useSelector, useDispatch } from 'react-redux';

function Cart() {
    
    const { items: cartProduct, status } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {

        if (status === 'idle') {
            
            dispatch(fetchCartProduct());

        }

    }, [status, dispatch]);

    return (

        <>
        
            <main>
            
                <ReuseableSecondProductNav
                
                    navLink="HOME"
                    currentPageName="CART"
                    
                />

                <CartProductSection
                
                    CartStyle={CartStyle}
                    cartProduct={cartProduct}
                    removeProduct={removeCartProduct}
                    
                />
                
            </main>
            
        </>

    );

}

export default Cart