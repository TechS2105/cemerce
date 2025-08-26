import React from 'react';
import { GoHeart } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import SingleProductPageLikeProducImage from '../components/Singleproductpagelikeproductimage';

let image = 'https://images.unsplash.com/photo-1665873880222-c20b98ae1bf8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8';

function Singleproductpagelikeproduct({SingleProductPageStyle}) {
    
    return (

        <>
        
            <div className={SingleProductPageStyle.singleProductPageLikeProductSection}>

                <div className={SingleProductPageStyle.singleProductPageLikeProductSectionHeading}>

                    <h2> You may also like </h2>

                </div>

                <div className={SingleProductPageStyle.singleProductPageLikeProductSectionProducts}>

                    <div className={SingleProductPageStyle.productBox}>

                        <GoHeart />

                        <SingleProductPageLikeProducImage
                        
                            image={image}
                            imageTitle="product Image"
                            
                        />

                        <button> <GoPlus /> <p> Quick Shop </p> </button>

                    </div>
                    
                </div>
                
            </div>
            
        </>

    );

}

export default Singleproductpagelikeproduct;