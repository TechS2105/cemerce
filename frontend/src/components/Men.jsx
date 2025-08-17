import React from 'react';
import MenPageStyle from '../../public/styles/Menpage.module.css';
import ProductBannerVideo from '../components/Productbannervideo';
import ProductHeading from '../components/Productheading';
import MenCollection from '../components/Mencollection';
import Loader from '../components/Loader';
import Footer from '../components/Footer';

let bannerVideo = '../../public/video/menpagevideo.mp4';

function Men() {
    
    return (

        <>
            
            <main>

                <div className={MenPageStyle.menProductStyle}>

                    <ProductBannerVideo
                    
                        video = {bannerVideo}
                        
                    />

                </div>

                <ProductHeading
                
                    headingTitle = "Men's Collections"
                    
                />

                <MenCollection />

            </main>

            <Footer />
            
        </>

    );

}

export default Men;