import React, {useState, useEffect} from 'react';
import HomeProductStyle from '../../public/styles/Homeproduct.module.css';
import { fetchHomeWomenProduct } from '../features/Shop/HomeWomenSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishlist } from '../features/Shop/WishListSlice';
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import ReuseableNavigationArrow from '../components/Reuseablenavigationarrow';
import ReuseableHomeProductButton from '../components/Reuseablehomeproductbutton';
import { useNavigate } from 'react-router-dom';
import QuickViewBox from '../components/Quickviewbox';
import { NavLink } from 'react-router-dom';

function Homeproduct({homeWomenProductAnime, homeWemenProductNavigationArrow, homeWomenProductViewMoreButton}) {

    const [activeIdx, setActiveIdx] = useState(false);
    const [womenQuickBoxSectionStyle, setWomenQuickBoxSectionStyle] = useState({

        transform: "translateX(-1500px)",
        opacity: "0",
        filter: "blur(20px)"

    });

    const [womenQuickViewBoxAnime, setWomenQuickViewBoxAnime] = useState({

        transform: "translateX(1000px)",
        opacity: "0",
        filter: "blur(20px) brightness(150%)"

    });

    const [womenCloseIconAnime, setWomenCloseIconAnime] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",
        opacity: "0"

    })

    function handleQuickViewBox(idx) {
        
        setActiveIdx(idx);

        setWomenQuickBoxSectionStyle({

            transform: "translateX(-1500px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "none"

        });
        
        setWomenQuickViewBoxAnime({

            transform: "translateY(1000px)",
            opacity: "0",
            filter: 'blur(20px) brightness(250%)',
            transition: "all 0.8s ease 0.5s"

        });

        setWomenCloseIconAnime({

            transform: "scale(0)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "none"

        })

        // targeted animation when tiggered
        requestAnimationFrame(() => {

            setWomenQuickBoxSectionStyle({

                transform: "translateX(0px)",
                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease"

            });

            setWomenQuickViewBoxAnime({

                transform: "translateY(0px)",
                opacity: "1",
                filter: "blur(0px) brightness(100%)",
                transition: "all 0.8s ease 0.5s"

            });

            setWomenCloseIconAnime({

                transform: "scale(1)",
                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.8s"

            });

        });

    }

    function handleCloseIcon(){

        setWomenQuickBoxSectionStyle({

            transform: "translateX(-1500px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "all 0.8s ease 0.7s"

        });

        setWomenQuickViewBoxAnime({

            transform: "translateY(1000px)",
            opacity: "0",
            filter: "blur(20px) brightness(250%)",
            transition: "all 0.8s ease 0.5s",

        });

        setWomenCloseIconAnime({

            transform: "scale(0)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "all 0.8s ease"

        });

    }

    const { items: homeWomenProducts, status } = useSelector((state) => state.homeWomenProduct);
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

                onSwiper={(swiper) => {

                    swiper.el.addEventListener("mouseover", () => {

                        swiper.autoplay.stop();

                    });

                    swiper.el.addEventListener("mouseout", () => {

                        swiper.autoplay.start();

                    })

                }}
            
            >

                {homeWomenProducts.map((womenProduct, idx) => {

                    return (

                        <SwiperSlide className={HomeProductStyle.homeProductBox} key={idx}>

                            <div className={HomeProductStyle.homeProductImage}>

                                <FaRegEye onClick={ () => handleQuickViewBox(idx)} />
                                <GoHeart onClick={() => { dispatch(addToWishlist(womenProduct)) }} />
                                
                                <NavLink to={`/${womenProduct.category}/${womenProduct.title}`}>

                                    <img src={womenProduct.image} alt={womenProduct.title} />

                                </NavLink>
                            
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

            {homeWomenProducts.map((womenProduct, idx) => {

                return (

                    // active idx && idx when equal
                    <>
                        
                        <div key={idx}>

                            {activeIdx === idx && (

                                <QuickViewBox
                                
                                    product={womenProduct}
                                    quickBoxSectionStyle={womenQuickBoxSectionStyle}
                                    onClick={handleCloseIcon}
                                    quickViewBoxAnime={womenQuickViewBoxAnime}
                                    closeIconAnime={womenCloseIconAnime}
                                    
                                />

                            )}

                        </div>

                    </>

                );

            })}

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