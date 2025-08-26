import React from 'react';
import ReuseableSingleProductPageShippingDetails from '../components/Reuseablesingleproductpageshippingdetails';
import { LiaShippingFastSolid } from "react-icons/lia";
import { LiaHatCowboySideSolid } from "react-icons/lia";
import { TiTick } from "react-icons/ti";

function Singleproductdeliverysection({SingleProductPageStyle}) {
    
    return (

        <>
        
            <div className={SingleProductPageStyle.delivaryDetailSection}>

                <div className={SingleProductPageStyle.freeShipping}>

                    <ReuseableSingleProductPageShippingDetails
                    
                        svgIcon={<LiaShippingFastSolid />}
                        heading="Free Shipping"
                        para="From all orders over ₹1000"
                        
                    />

                </div>

                <div className={SingleProductPageStyle.qualitySupport}>

                    <ReuseableSingleProductPageShippingDetails
                    
                        svgIcon={<LiaHatCowboySideSolid />}
                        heading="Quality Support"
                        para="Premium Customer Support"
                        
                    />

                </div>

                <div className={SingleProductPageStyle.qualityCheck}>

                    <ReuseableSingleProductPageShippingDetails
                    
                        svgIcon={<TiTick />}
                        heading="Quality Check"
                        para="Quality is best in class"
                    
                    />

                </div>

            </div>
            
        </>

    );

}

export default Singleproductdeliverysection;