import React from 'react';
import EmptyProductMessageStyle from '../../public/styles/Emptyproductmessage.module.css';

function Emptyproductmessage() {
    
    return (

        <>
        
            <div className={EmptyProductMessageStyle.messageSection}>

                <div className={EmptyProductMessageStyle.messageBox}>

                    <p> There are no products in your wishlist :( </p>

                </div>

            </div>
            
        </>

    );

}

export default Emptyproductmessage;