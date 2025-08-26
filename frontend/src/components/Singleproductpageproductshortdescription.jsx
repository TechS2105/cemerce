import React from 'react';
import SinglePageShortDescriptionText from '../components/Singlepageshortdescriptiontext';

function Singleproductpageproductshortdescription({SingleProductPageStyle}) {
    
    return (

        <>
        
            <div className={SingleProductPageStyle.productShorDescriptionSection}>

                <div className={SingleProductPageStyle.productShortDescriptionBox}>

                    <SinglePageShortDescriptionText
                    
                        SinglePageSpanText="Defined Style, Every Day"
                        SinglePageHeadingText="Premium Shirts and Tees for Modern Living"
                        SinglePageParaText="Command attention with a collection built for confidence and comfort. Our shirts and t-shirts are crafted to deliver sharp fits, lasting quality, and effortless versatility. Whether at work or off duty, redefine your style with pieces designed to stand out."
                    
                    />

                </div>

            </div>
            
        </>

    );

}

export default Singleproductpageproductshortdescription;