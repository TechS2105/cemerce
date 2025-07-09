import React from 'react';
import KidCollectionStyle from '../../public/styles/Kidcollections.module.css';
import KidsBannerImage from '../components/Productbannervideo';
import KidsHeading from '../components/Productheading';
import KidsProduct from '../components/Kidproducts';
import Footer from '../components/Footer';

let kidVideo = "../../public/video/kidsvideo.mp4"

function Kids() {
    
    return (

        <>

            <div className={KidCollectionStyle.kidCollectionPageBanner}>
        
                <KidsBannerImage
                
                    video={kidVideo}
                    
                />
                
            </div>

            <KidsHeading
            
                headingTitle="Kid's Collection"
                
            />

            <KidsProduct />

            <Footer />

        </>



    );

}

export default Kids;