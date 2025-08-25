import React from 'react';
import ReuseableSingleProductPageNavigation from './Reuseablesecondproductnav';
import SingleProductPageProductSection from '../components/Singleproductpageproductsection';
import SingleProductPageStyle from '../../public/styles/Singleproductpage.module.css'

function Productfulldetails() {
    
    return (
        
        <>

            <main>

                <div className={SingleProductPageStyle.singleProducPagetStyle}>

                    <ReuseableSingleProductPageNavigation
                
                        navLink="HOME"
                        currentPageName="Product Name"
                    
                    />

                    <SingleProductPageProductSection
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                </div>
                 
                
                
            </main>
           
            
        </>

    )

}

export default Productfulldetails;