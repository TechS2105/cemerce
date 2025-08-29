import React, {useState, useEffect} from 'react';
import ReuseableSingleProductPageNavigation from './Reuseablesecondproductnav';
import SingleProductPageProductSection from '../components/Singleproductpageproductsection';
import SingleProductPageStyle from '../../public/styles/Singleproductpage.module.css'
import SingleProductPageLikeProduct from '../components/Singleproductpagelikeproduct';
import SingleProductPageProductShortDescriptionSection from '../components/Singleproductpageproductshortdescription';
import SingleProductPageDiscoverSection from '../components/Singleproductpagediscoversection';
import SingleProductDelivarySection from '../components/Singleproductdelivarysection';
import SingleProductPageFaqSecton from '../components/Singleproductpagefaqsection';
import { useParams } from 'react-router-dom';

function Productfulldetails() {

    const { title } = useParams();
    const [getProduct, setGetProduct] = useState([]);

    useEffect(() => {

        const fetchProductData = async () => {
           
            try {
                
                const response = await fetch(`http://localhost:3000/api/product/collection/${title}`);

                if (!response) {
                    
                    throw new Error(`${response.status}`);

                }

                let data = await response.json();
                setGetProduct(data);

            } catch (error) {
                
                console.log(error);

            }

        }
        
        if (title) {
            
            fetchProductData();

        }

    }, [title]);

    return (
        
        <>

            <main>
                
                <div className={SingleProductPageStyle.singleProducPage}>

                    <ReuseableSingleProductPageNavigation
                
                        navLink="HOME"
                        title={getProduct.title}
                    
                    />

                    <SingleProductPageProductSection
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        product={getProduct}
                        
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

                    <SingleProductPageFaqSecton
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                </div>
                
            </main>
           
            
        </>

    )

}

export default Productfulldetails;