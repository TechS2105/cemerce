import React from 'react';
import MenPageStyle from '../../public/styles/Menpage.module.css';
import ProductBannerVideo from '../components/Productbannervideo';
import ProductHeading from '../components/Productheading';
import MenCollection from '../components/Mencollection';

let bannerVideo = '../../public/video/menpagevideo.mp4';

function Men() {
    
    return (

        <>
        
            <div className={MenPageStyle.menProductStyle}>

                <ProductBannerVideo
                
                    video = {bannerVideo}
                    
                />

            </div>

            <ProductHeading
            
                headingTitle = "Men's Collections"
                
            />

            <MenCollection />
            
        </>

    );

}

export default Men;