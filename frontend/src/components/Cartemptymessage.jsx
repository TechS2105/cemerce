import React from 'react';
import CartEmptyMessageStyle from '../../public/styles/Cartemptymessage.module.css';
import { useNavigate } from 'react-router-dom';

function Cartemptymessage() {

    const navigate = useNavigate();
    
    return (

        <>
        
            <div className={CartEmptyMessageStyle.cartEmptyMessageSection}>

                <div className={CartEmptyMessageStyle.cartEmptyMessageBox}>

                    <p> No products in the cart :( </p>
                    <button onClick={() => navigate('/shop')}> Continue Shopping </button>

                </div>

            </div>
            
        </>

    );

}

export default Cartemptymessage;