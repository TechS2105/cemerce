import React from 'react';
import DiscoverSectionImage from '../components/Discoversectionimage';
import DiscoverSectionContent from '../components/Discoversectioncontent';
import { useNavigate } from 'react-router-dom';

let image1 = "https://plus.unsplash.com/premium_photo-1658526994743-349e63461f05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8"
let image2="https://images.unsplash.com/photo-1556822003-bcdd4887bd12?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

function Singleproductpagediscoversection({SingleProductPageStyle}) {

    const navigate = useNavigate();
    
    return (

        <>
        
            <div className={SingleProductPageStyle.discoverSection}>
            
                <div className={SingleProductPageStyle.discoverImage}>

                    <DiscoverSectionImage
                    
                        image={image1}
                        
                    />

                    <DiscoverSectionImage
                    
                        image={image2}
                        
                    />
                    
                </div>

                <div className={SingleProductPageStyle.discoverSectionContent}>
                    
                    <DiscoverSectionContent
                    
                        spanText="Redefining Modern Elegance"
                        headingText="Classic Designs with Confident Style"
                        paraText="Explore a curated range of shirts and t-shirts that combine timeless appeal with modern precision. Each piece is crafted to elevate your wardrobe and project effortless confidence. Shop now and secure exclusive offers."
                        navigateDiscover={navigate}
                        
                    />

                </div>    
                
            </div>    
            
        </>

    );

}

export default Singleproductpagediscoversection;