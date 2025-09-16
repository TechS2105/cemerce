import React from 'react';
import SingleProductPageImage from '../components/Singlepageproductimage';
import SinglePageProductDetails from '../components/Singlepageproductdetails';

function SingleProductPageProductSection({ SingleProductPageStyle, product, productImageAnime, productDetailsHeadingAnime, productDetailsPriceAnime, productDetailsCounter, productDetailsFirstButton, productDetailsSecondButton, productDetailsWishlistButton, productDetailsCompareButton, productDetailsTableFirstRow, productDetailsTableSecondRow, productDetailsTableThirdBox, productDetailsShippingInfoBox, productDetailsShippingCareGuide, productDetailsSecurePayments, productDetailsFreeDelivery, productDetailsSocialIconRef }) {
    
    return (

        <>
        
            <div className={SingleProductPageStyle.singleProductSection}>

                <div className={SingleProductPageStyle.singleProductImage} style={productImageAnime}>

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
                            productDetailsHeadingAnime={productDetailsHeadingAnime}
                            productDetailsPriceAnime={productDetailsPriceAnime}
                            productDetailsCounter={productDetailsCounter}
                            productDetailsFirstButton={productDetailsFirstButton}
                            productDetailsSecondButton={productDetailsSecondButton}
                            productDetailsWishlistButton={productDetailsWishlistButton}
                            productDetailsCompareButton={productDetailsCompareButton}
                            productDetailsTableFirstRow={productDetailsTableFirstRow}
                            productDetailsTableSecondRow={productDetailsTableSecondRow}
                            productDetailsTableThirdBox={productDetailsTableThirdBox}
                            productDetailsShippingInfoBox={productDetailsShippingInfoBox}
                            productDetailsShippingCareGuide={productDetailsShippingCareGuide}
                            productDetailsSecurePayments={productDetailsSecurePayments}
                            productDetailsFreeDelivery={productDetailsFreeDelivery}
                            productDetailsSocialIconRef={productDetailsSocialIconRef}
                                
                        />

                    )}
                   
                 
                </div>

            </div>
            
        </>

    );

}

export default SingleProductPageProductSection;