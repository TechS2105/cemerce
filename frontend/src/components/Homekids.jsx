import React, {useState, useEffect} from 'react';
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
import QuickViewBox from '../components/Quickviewbox';
import { NavLink } from 'react-router-dom';

function Homekids({kidsProductSectionScrollAnime, kidsProductSectionHeadingAnime, kidsProductAnime, kidsProductNavigationArrow, kidsProductSectionViewMoreButton}) {

    const [activeIdx, setActiveIdx] = useState(false);

    const [kidQuickBoxSectionStyle, setKidQuickBoxSectionStyle] = useState({

        transform: "translateX(1500px)",
        opacity: "0",
        filter: "blur(20px)",

    });

    const [kidQuickViewBoxAnime, setKidQuickViewBoxAnime] = useState({

        transform: "translateY(-1000px)",
        opacity: "0",
        filter: "blur(20px)"

    });

    const [kidCloseIconAnime, setKidCloseIconAnime] = useState({

        transform: "scale(0)",
        opacity: "0",
        filter: "blur(20px)",

    });

    function handleKidsQuickViewIcon(idx) {
        
        setActiveIdx(idx);

        setKidQuickBoxSectionStyle({

            transform: "translateX(1500px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "none"

        });

        setKidQuickViewBoxAnime({

            transform: "translateY(-1000px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "none"

        });

        setKidCloseIconAnime({

            transform: "scale(0)",
            filter: "blur(20px)",
            opacity: "0",
            transition: "none"

        });

        /** request an animation when targeted */
        requestAnimationFrame(() => {

            setKidQuickBoxSectionStyle({

                transform: "translateX(0px)",
                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease"

            });

            setKidQuickViewBoxAnime({

                transform: "translateY(0px)",
                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.5s"

            });

            setKidCloseIconAnime({

                transform: "scale(1)",
                transition: "all 0.8s ease 0.7s",
                filter: "blur(0px)",
                opacity: "1"

            });

        });

    }

    function handleKidsQuickViewCloseIcon() {

        setKidQuickBoxSectionStyle({

            transform: "translateX(1500px)",
            filter: "blur(20px)",
            opacity: "0",
            transition: "all 0.8s ease 0.7s"

        });

        setKidQuickViewBoxAnime({

            transform: "translateY(-1000px)",
            filter: "blur(20px)",
            opacity: "0",
            transition: "all 0.8s ease 0.5s"

        });

        setKidCloseIconAnime({

            transform: "scale(0)",
            filter: "blur(20px)",
            opacity: "0",
            transition: "all 0.8s ease"

        });

    }

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

                    onSwiper={(swiper) => {

                        swiper.el.addEventListener("mouseover", () => {

                            swiper.autoplay.stop();

                        });

                        swiper.el.addEventListener("mouseout", () => {

                            swiper.autoplay.start();

                        });

                    }}
                    
                >

                    {kidsProduct.map((kidsItem, idx) => {

                        return (

                            <SwiperSlide className={HomeKidStyle.homeKidsProductBox} key={idx}>

                                <div className={HomeKidStyle.homeKidsProductImage}>

                                    <FaRegEye onClick={ () => handleKidsQuickViewIcon(idx) } />
                                    <GoHeart onClick={ () => {dispatch(addToWishlist(kidsItem));}} />

                                    <NavLink to={`/${kidsItem.category}/${kidsItem.title}`}>

                                        <img src={kidsItem.image} alt={kidsItem.title} />

                                    </NavLink>

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

                {kidsProduct.map((kidsProducts, idx) => {

                    return (

                        <>
                        
                            <div key={idx}>

                                {/** active idx and idx when match */}
                                {activeIdx === idx && (

                                    <QuickViewBox
                                    
                                        product={kidsProducts}
                                        quickBoxSectionStyle={kidQuickBoxSectionStyle}
                                        onClick={handleKidsQuickViewCloseIcon}
                                        quickViewBoxAnime={kidQuickViewBoxAnime}
                                        closeIconAnime={kidCloseIconAnime}
                                        
                                    />

                                )}

                            </div>
                            
                        </>


                    );        

                })}

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