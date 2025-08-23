import React from 'react';
import ProductBannerVideo from '../components/Productbannervideo';
import WomenStyle from '../../public/styles/Women.module.css';
import ProductHeading from '../components/Productheading';
import Womencollection from '../components/Womencollection';

let video = '../../public/video/womenpagevideo.mp4';

function Women() {
    
    return (

        <>
            
            <main>

                <div className={WomenStyle.womenBannerStyle}>

                    <ProductBannerVideo
                    
                        video={video}
                        
                    />

                </div>

                <ProductHeading
                
                    headingTitle = "Women's Collections"
                    
                />

                <Womencollection />

            </main>

        </>
        
        

    );

}

export default Women;