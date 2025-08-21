import React from 'react';
import QuickViewBoxStyle from '../../public/styles/Quickviewbox.module.css';
import { BsBoxSeam } from "react-icons/bs";

function Quickviewbox() {
    
    return (

        <>
        
            <div className={QuickViewBoxStyle.quickViewBoxSection}>

                <div className={QuickViewBoxStyle.closeIcon}>

                    <span></span>
                    <span></span>

                </div>
                
                <div className={QuickViewBoxStyle.quickViewBox}>

                    <div className={QuickViewBoxStyle.quickViewBoxImage}>

                        <img src="https://cdn.shopify.com/s/files/1/0915/4147/1510/files/M56_1729cd4a-5e9b-4b90-bee3-6dbb87261e0f_600x.jpg?v=1742554510" alt="" />

                    </div>

                    <div className={QuickViewBoxStyle.quickViewBoxDetails}>

                        <div className={QuickViewBoxStyle.firstQuickViewBoxDetails}>

                            <h2> Tassur Silk Saree </h2>
                            <p> Rs. 50,000 </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, labore! Impedit quam incidunt deserunt.</p>
                            <button> ADD TO CART </button>

                        </div>

                        <div className={QuickViewBoxStyle.secondQuickViewBoxDetails}>

                            
                            <p> <BsBoxSeam /> Spend Rs. 500.00 for Free Shipping</p>

                            <ul>

                                <li>SKU: BJ-0043RA</li>
                                <li>TYPE: TUSSUR </li>
                                <li>VENDOR: C-EMERCE</li>

                            </ul>

                            <span> View details </span>

                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Quickviewbox;