import React from 'react';
import HomeBannerCarouselStyle from '../../public/styles/Homebannercarousel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import HomeBannerImages from '../../Homebannerimage.js';
import HomeBannerImage from '../components/Homebannerimages';

function Homebannercarousel() {
    
    return (

        <>
        
            <div className={HomeBannerCarouselStyle.homeBanner}>

                <Swiper className={HomeBannerCarouselStyle.backCarousel}
                
                    slidesPerView={1}
                    loop={true}
                    speed={2000}
                    effect={'fade'}
                    autoplay={{

                        delay: 2000

                    }}
                    navigation={{

                        nextEl: '#next',
                        prevEl: '#previous'

                    }}

                    modules= {[Autoplay, EffectFade, Navigation]} 
                    
                >
                    
                    {HomeBannerImages.map((item, idx) => {

                        return (
                          
                            <SwiperSlide key={idx}>

                                <HomeBannerImage
                                
                                    image={item.image}
                                    title={item.title}
                                    HomeBannerCarouselStyle={HomeBannerCarouselStyle}
                                    
                                />

                            </SwiperSlide>

                        );

                    })}

                </Swiper>
                
                <div className={HomeBannerCarouselStyle.navigation}>
                    
                    <ul>

                        <li><span id="previous">PREVIOUS</span></li>
                        <li><span id="next">NEXT</span></li>

                    </ul>

                </div>

            </div>
            
        </>

    );

}

export default Homebannercarousel;