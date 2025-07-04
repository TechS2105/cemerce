import React from 'react';
import MenCollectionStyle from '../../public/styles/Mencollection.module.css';
import Products from '../components/Products';

function Mencollection() {
    
    return (

        <>
        
            <div className={MenCollectionStyle.menCollection}>

                <Products />

            </div>
            
        </>

    );

}

export default Mencollection;