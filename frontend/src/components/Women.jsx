import React from 'react';
import ProductBannerVideo from '../components/Productbannervideo';
import WomenStyle from '../../public/styles/Women.module.css';
import Womencollection from '../components/Womencollection';
import WomenPageHeading from '../components/Reuseablepageheading';

let womenBannerImage = "../../public/images/Women's Banner Images/image4.jpg";

function Women() {
    
    return (

        <>
            
            <main>

                <div className={WomenStyle.womenBannerStyle}>

                    <ProductBannerVideo
                    
                       image={womenBannerImage}
                        
                    />

                </div>

                <WomenPageHeading
                
                    pageHeading="Women's Collections"
                    
                />

                <Womencollection />

            </main>

        </>
        
        

    );

}

export default Women;