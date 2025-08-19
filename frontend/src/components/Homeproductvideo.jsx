import React from 'react';
import HomeProductVideoStyle from '../../public/styles/Homeproductvideo.module.css';
import ProductVideo from '../components/Productvideo';
import HomeVideoProductDetails from '../components/Homeproductvideodetails';

function Homeproductvideo(){

    return (

        <>
        
           <div className={HomeProductVideoStyle.videoProductSection}>
                
                <div className={HomeProductVideoStyle.videoProductHeading}>

                    <h2> Watch & Buy </h2>

                </div>

                <div className={HomeProductVideoStyle.videoProductSectionCarousel}>

                    <div className={HomeProductVideoStyle.videoProductBox}>

                        <div className={HomeProductVideoStyle.videoProduct}>

                            <ProductVideo
                            
                                video="../../public/video/Product Video Folder/Boys Formal/video2.mp4"
                                
                            />

                        </div>

                        <div className={HomeProductVideoStyle.videoProductDetails}>

                            <HomeVideoProductDetails
                            
                                videoProductHeading="Black Shirt With Formal Gray Pant"
                                price="2000"
                                
                            />

                        </div>

                    </div>

                </div>

           </div>
            
        </>

    );

}

export default Homeproductvideo;