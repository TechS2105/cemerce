import React from 'react';
import ReuseableSingleProductPageNavigation from './Reuseablesecondproductnav';
import SingleProductPageProductSection from '../components/Singleproductpageproductsection';
import SingleProductPageStyle from '../../public/styles/Singleproductpage.module.css'
import SingleProductPageLikeProduct from '../components/Singleproductpagelikeproduct';
import SingleProductPageProductShortDescriptionSection from '../components/Singleproductpageproductshortdescription';
import SingleProductPageDiscoverSection from '../components/Singleproductpagediscoversection';
import SingleProductDelivarySection from '../components/Singleproductdelivarysection';
import SingleProductPageFaqSection from '../components/Singleproductpagefaqsection';

function Productfulldetails() {
    
    return (
        
        <>

            <main>

                <div className={SingleProductPageStyle.singleProducPage}>

                    <ReuseableSingleProductPageNavigation
                
                        navLink="HOME"
                        currentPageName="Product Name"
                    
                    />

                    <SingleProductPageProductSection
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                    <SingleProductPageLikeProduct
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                    <SingleProductPageProductShortDescriptionSection
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                    <SingleProductPageDiscoverSection 
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                    <SingleProductDelivarySection
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                    <SingleProductPageFaqSection
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                </div>
                
            </main>
           
            
        </>

    )

}

export default Productfulldetails;