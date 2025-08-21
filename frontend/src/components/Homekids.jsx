import React, {useEffect} from 'react';
import HomeKidStyle from '../../public/styles/Homekids.module.css';
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { fetchKidsHomeProduct } from '../features/Shop/HomeKidsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishlist } from "../features/Shop/WishListSlice"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import ReuseableNavigationArrow from '../components/Reuseablenavigationarrow';
import ReuseableHomeProductButton from '../components/Reuseablehomeproductbutton';

function Homekids({kidsProductSectionScrollAnime, kidsProductSectionHeadingAnime, kidsProductAnime, kidsProductNavigationArrow, kidsProductSectionViewMoreButton}) {

    const { items: kidsProduct, status } = useSelector((state) => state.homeKidsProduct);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        if(status === 'idle'){

            dispatch(fetchKidsHomeProduct());

        }

    }, [status, dispatch]);

    if(status === 'loading') return <p> Product is loading... </p>
    if(status === 'failed') return <p> product not found... </p>

    return (

        <div className={HomeKidStyle.homeKidsContainer} onScroll={kidsProductSectionScrollAnime}>

            <div className={HomeKidStyle.homeKidsHeading}>

                <h2 style={kidsProductSectionHeadingAnime}> Kid's Outfit </h2>

            </div>

            <div className={HomeKidStyle.homeKidsProduct}>

                <Swiper className={HomeKidStyle.homeKidsPorductContainer}
                
                    slidesPerView={4}
                    spaceBetween={20}
                    loop={true}
                    speed={1000}
                    autoplay={{

                        delay: 2000

                    }}
                    navigation={{

                        nextEl: '#next',
                        prevEl: "#previous"

                    }}

                    modules={[Autoplay, Navigation]}
                    style={kidsProductAnime}
                    
                >

                    {kidsProduct.map((kidsItem) => {

                        return (

                            <SwiperSlide className={HomeKidStyle.homeKidsProductBox} key={kidsItem.id}>

                                <div className={HomeKidStyle.homeKidsProductImage}>

                                    <FaRegEye />
                                    <GoHeart onClick={ () => {dispatch(addToWishlist(kidsItem));}} />
                                    <img src={kidsItem.image} alt={kidsItem.title} />

                                </div>

                                <div className={HomeKidStyle.homeKidsProductContent}>

                                    <h3 style={{paddingLeft: "20px"}}> {kidsItem.title} </h3>
                                    <p style={{ paddingLeft: "20px" }}> Category: { kidsItem.category}</p>
                                    <p style={{paddingLeft: "20px"}}> Price: {kidsItem.price} /- </p>
                                    <button style={{marginLeft: "20px"}} onClick={() => {dispatch(addToCart(kidsItem))}}> Add To Cart </button>

                                </div>

                            </SwiperSlide>

                        );

                    })}

                </Swiper>

                <ReuseableNavigationArrow
                
                    next="next"
                    previous="previous"
                    homeProductNavButton={kidsProductNavigationArrow}
                    
                />

                <ReuseableHomeProductButton
                
                    pageLink={() => navigate('/kids')}
                    homeViewMoreButton={kidsProductSectionViewMoreButton}
                
                />

            </div>

        </div>

    );

}

export default Homekids;