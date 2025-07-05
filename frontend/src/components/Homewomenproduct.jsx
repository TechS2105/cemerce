import React from 'react';
import HomeWomenProductStyle from '../../public/styles/Homewomenproduct.module.css';
import HomeWomenProduct from './Homeproduct';


function Homewomenproduct() {
    
    return (
        
        <div className={HomeWomenProductStyle.homeWomenProductSection}>

            <div className={HomeWomenProductStyle.homeWomenProductHeading}>

                <h2> Women's Outfit</h2>

            </div>

            <HomeWomenProduct />
            
        </div>

    )

}

export default Homewomenproduct;