import React from 'react';
import ProductStyle from '../../public/styles/Products.module.css';
import ProductImage from '../components/Productsimage';
import ProductContent from '../components/Productcontent';

function Product() {
    
    return (

        <>
        
            <div className={ProductStyle.productBox}>

                <div className={ProductStyle.productImage}>

                    <ProductImage 
                    
                        productImage = "https://images.unsplash.com/photo-1597354984706-fac992d9306f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3QlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
                        
                    />

                </div>

                <div className={ProductStyle.productContent}>

                    <ProductContent
                    
                        productHeading="Men's Shirt"
                        productCategory="Men's"
                        productPrice='5000'
                        cartButton="Add To Cart"
                        
                    />

                </div>

            </div>
            
        </>

    );

}

export default Product;