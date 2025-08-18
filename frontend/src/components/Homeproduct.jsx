import React, {useEffect} from 'react';
import HomeProductStyle from '../../public/styles/Homeproduct.module.css';
import { fetchHomeWomenProduct } from '../features/Shop/HomeWomenSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishList } from '../features/Shop/WishListSlice';
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import ReuseableNavigationArrow from '../components/Reuseablenavigationarrow';
import ReuseableHomeProductButton from '../components/Reuseablehomeproductbutton';
import { useNavigate } from 'react-router-dom';

function Homeproduct({homeWomenProductAnime, homeWemenProductNavigationArrow, homeWomenProductViewMoreButton}) {

    const { items: homeWomenProducts, status } = useSelector((state) => state.homeWomenProduct);
    useSelector((state) => console.log(state.cart));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        if (status === 'idle') {
            
            dispatch(fetchHomeWomenProduct());

        }

    }, [status, dispatch]);

    if(status === 'loading') return <p> Product is loading... </p>
    if(status === 'failed') return <p> Product not found.... </p>
    
    return (

        <>
            
            <Swiper className={HomeProductStyle.homeProductContainer}
            
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                speed={1000}
                autoplay={{

                    delay: 2000,
                    reverseDirection: true

                }}

                navigation={{

                    nextEl: "#next",
                    prevEl: "#previous"

                }}

                modules={[Autoplay, Navigation]}
                style={homeWomenProductAnime}
            
            >

                {homeWomenProducts.map((womenProduct) => {

                    return (

                        <SwiperSlide className={HomeProductStyle.homeProductBox} key={womenProduct.id}>

                            <div className={HomeProductStyle.homeProductImage}>

                                <FaRegEye />
                                <GoHeart onClick={ () => {dispatch(addToWishList(womenProduct))}} />
                                <img src={womenProduct.image} alt={womenProduct.title} />

                            </div>

                            <div className={HomeProductStyle.homeProductContent}>

                                <h3 style={{paddingLeft: "20px"}}> {womenProduct.title} </h3>
                                <p style={{paddingLeft: "20px"}}> Category: {womenProduct.category} </p>
                                <p style={{paddingLeft: "20px"}}> Price: {womenProduct.price} /- </p>
                                <button style={{marginLeft: "20px"}} onClick={() => {dispatch(addToCart(womenProduct))}}> Add To Cart </button>

                            </div>

                        </SwiperSlide>

                    );

                })}

            </Swiper>

            <ReuseableNavigationArrow
            
                next="next"
                previous="previous"
                homeProductNavButton={homeWemenProductNavigationArrow}
                
            />

            <ReuseableHomeProductButton
            
                pageLink={() => navigate('/women')}
                homeViewMoreButton={homeWomenProductViewMoreButton}
                
            />
            
        </>

    );

}

export default Homeproduct;