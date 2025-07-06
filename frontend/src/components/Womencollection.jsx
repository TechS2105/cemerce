import React from 'react';
import WomenCollectionStyle from '../../public/styles/Womencollection.module.css';
import WomenProduct from '../components/Womenproduct';

function Womencollection() {
    
    return (

        <div className={WomenCollectionStyle.womenCollectionSection}>

            <WomenProduct />

        </div>

    );

}

export default Womencollection;