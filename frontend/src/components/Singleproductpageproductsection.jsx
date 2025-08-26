import React from 'react';
import SingleProductPageImage from '../components/Singlepageproductimage';
import SinglePageProductDetails from '../components/Singlepageproductdetails';

let image= "https://images.unsplash.com/photo-1627138511484-516f99a79f66?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

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