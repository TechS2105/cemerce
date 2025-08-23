import React from 'react';
import KidCollectionStyle from '../../public/styles/Kidcollections.module.css';
import KidsBannerImage from '../components/Productbannervideo';
import KidsHeading from '../components/Productheading';
import KidsProduct from '../components/Kidproducts';

let kidVideo = "../../public/video/kidsvideo.mp4"

function Kids() {
    
    return (

        <>

            <main>

                <div className={KidCollectionStyle.kidCollectionPageBanner}>
            
                    <KidsBannerImage
                    
                        video={kidVideo}
                        
                    />
                    
                </div>

                <KidsHeading
                
                    headingTitle="Kid's Collection"
                    
                />

                <KidsProduct />

            </main>

        </>



    );

}

export default Kids;