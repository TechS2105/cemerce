import React, {useState, useEffect} from 'react';
import HomeProductVideoStyle from '../../public/styles/Homeproductvideo.module.css';
import ProductVideo from '../components/Productvideo';
import HomeVideoProductDetails from '../components/Homeproductvideodetails';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

function Homeproductvideo() {
    
    const [getVideoProduct, setGetVideoProduct] = useState([]);

    useEffect(() => {

        const fetchProduct = async () => {

            try {
                
                const response = await fetch('http://localhost:3000/api/video/product');

                if (!response) {
                    
                    throw new Error(`!HTTP Status is ${response.status}`);

                }

                let data = await response.json();
                setGetVideoProduct(data);

            } catch (error) {
                
                console.error(error);

            }

        }

        fetchProduct();

    }, []);

    return (

        <>
        
           <div className={HomeProductVideoStyle.videoProductSection}>
                
                <div className={HomeProductVideoStyle.videoProductHeading}>

                    <h2> Watch & Buy </h2>

                </div>

                <Swiper className={HomeProductVideoStyle.videoProductSectionCarousel}
                
                    slidesPerView={5}
                    loop={true}
                    spaceBetween={20}
                    speed={1000}
                    autoplay={{

                        delay: 2000

                    }}

                    modules={[Autoplay]}    
                    
                >

                    {getVideoProduct.map((videoproduct) => {

                        return (

                            <SwiperSlide className={HomeProductVideoStyle.videoProductBox} key={videoproduct.id}>

                                <div className={HomeProductVideoStyle.videoProduct}>

                                    <ProductVideo
                                    
                                        productVideo={videoproduct.videoURL}
                                        
                                    />

                                </div>

                                <div className={HomeProductVideoStyle.videoProductDetails}>

                                    <HomeVideoProductDetails
                                    
                                        videoProductHeading={videoproduct.title}
                                        price={videoproduct.price}
                                        
                                    />

                                </div>

                            </SwiperSlide>

                        );

                    })}    
                    
                </Swiper>

           </div>
            
        </>

    );

}

export default Homeproductvideo;