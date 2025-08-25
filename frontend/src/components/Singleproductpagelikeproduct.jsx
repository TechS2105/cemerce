import React from 'react';
import { GoHeart } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import SingleProductPageLikeProducImage from '../components/Singleproductpagelikeproductimage';

let image = 'https://i.pinimg.com/1200x/dd/e7/2b/dde72b7e4e54ce7bd7bdc89d387a5c86.jpg';

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