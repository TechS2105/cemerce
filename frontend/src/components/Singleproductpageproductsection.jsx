import React from 'react';
import SingleProductPageImage from '../components/Singlepageproductimage';
import SinglePageProductDetails from '../components/Singlepageproductdetails';

let image= "https://ethnicboutique.in/cdn/shop/files/IMG_8336_a1bf1b3d-1b1a-4505-a730-3ee488b5390f.jpg?v=1753520921&width=960"

function SingleProductPageProductSection({SingleProductPageStyle}) {
    
    return (

        <>
        
            <div className={SingleProductPageStyle.singleProductSection}>

                <div className={SingleProductPageStyle.singleProductImage}>

                    <SingleProductPageImage
                    
                        image={image}
                        title="Sharee Image"
                        
                    />

                </div>

                <div className={SingleProductPageStyle.singleProductContent}>

                    <SinglePageProductDetails
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                </div>

            </div>
            
        </>

    );

}

export default SingleProductPageProductSection;