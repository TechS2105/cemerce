import React, {useEffect} from 'react';
import HomeMenOutfitStyle from '../../public/styles/Homemenoutfit.module.css';
import { GoHeart } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { fetchHomeMenProduct } from '../features/Shop/HomeMenSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishlist } from '../features/Shop/WishListSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import Reuseablenavigationarrow from '../components/Reuseablenavigationarrow';

function Homemenoutfit({menProductCarousel, menProductButton}) {

    const { items: menProduct, status } = useSelector((state) => state.homeMenProduct);

    const dispatch = useDispatch();

    useEffect(() => {

        if(status === 'idle'){

            dispatch(fetchHomeMenProduct());

        }

    }, [status, dispatch]);
    
    if(status === 'loading') return <p style={{fontSize: "1.5rem"}}> Product is loading... </p>
    if(status === 'failed') return <p style={{fontSize: "1.5rem"}}> Product  not found... </p>
    
    return (

        <>
        
            <Swiper className={HomeMenOutfitStyle.menHomeOutfit}
            
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                speed={1000}
                autoplay={{

                    delay: 2000

                }}

                navigation={{

                    nextEl: '#next',
                    prevEl: '#previous'

                }}

                modules={[Autoplay, Navigation]}
                style={menProductCarousel}
                
            >

                {menProduct.map((menItem, idx) => {

                    return (

                        <SwiperSlide className={HomeMenOutfitStyle.menProduct} key={idx}>

                            <div className={HomeMenOutfitStyle.menProductImage}>

                                <GoHeart onClick={() => { dispatch(addToWishlist(menItem)) }} />
                                <FaEye />
                                <img src={menItem.image} alt={menItem.title} />

                            </div>

                            <div className={HomeMenOutfitStyle.menProductContent}>

                                <h3 style={{ paddingLeft: "20px" }}> {menItem.title.length > 40 ? menItem.title.slice(0, 40) : menItem.title} </h3>
                                <p style={{paddingLeft: "20px"}}> Category: {menItem.category} </p>
                                <p style={{paddingLeft: "20px"}}> Price: {menItem.price} /- </p>
                                <button style={{ marginLeft: "20px" }} onClick={() => { dispatch(addToCart(menItem)) }}> Add To Cart </button>

                            </div>

                        </SwiperSlide> 

                    );

                })}
                
            </Swiper>
            
            <Reuseablenavigationarrow
            
                next="next"
                previous="previous"
                homeProductNavButton={menProductButton}
                
            />

        </>

    );

}

export default Homemenoutfit;