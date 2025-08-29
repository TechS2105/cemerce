import React from 'react';
import SingleProductPageImage from '../components/Singlepageproductimage';
import SinglePageProductDetails from '../components/Singlepageproductdetails';

function SingleProductPageProductSection({ SingleProductPageStyle, product }) {
    
    return (

        <>
        
            <div className={SingleProductPageStyle.singleProductSection}>

                <div className={SingleProductPageStyle.singleProductImage}>

                    <SingleProductPageImage
                    
                        image={product.image}
                        title={product.title}
                        
                    />

                </div>

                <div className={SingleProductPageStyle.singleProductContent}>

                    {product.details && (

                        <SinglePageProductDetails
                            
                            SingleProductPageStyle={SingleProductPageStyle}
                            productDetails={product}
                                
                        />

                    )}
                   
                 
                </div>

            </div>
            
        </>

    );

}

export default SingleProductPageProductSection;