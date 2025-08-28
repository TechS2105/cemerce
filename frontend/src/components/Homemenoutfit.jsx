import React, {useState, useEffect} from 'react';
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
import QuickViewBox from '../components/Quickviewbox';
import { Link } from 'react-router-dom';

function Homemenoutfit({menProductCarousel, menProductButton}) {

     // useState 
    const [activeIdx, setActiveIdx] = useState(false);

    const [quickBoxSectionStyle, setQuickBoxSectionStyle] = useState({

        transform: "scale(0)",
        opacity: "0",

    });
    const [quickViewBoxAnime, setQuickViewBoxAnime] = useState({

        transform: "translateY(-2000px)",
        opacity: "0",
        filter: "blur(50px)",

    });

    const [closeIconAnime, setCloseIconAnime] = useState({

        transform: "scale(0)",
        opacity: "0",

    });

    function handleViewClick(idx) {
        
        setActiveIdx(idx);
         
            setQuickBoxSectionStyle({
              transform: "scale(0)",
              opacity: "0",
              transition: "none",
            });

            setQuickViewBoxAnime({
              transform: "translateY(-2000px)",
              opacity: "0",
              filter: "blur(20px)",
              transition: "none",
            });

            setCloseIconAnime({
              transform: "scale(0)",
              opacity: "0",
              filter: "blur(20px)",
              transition: "none",
            });

        // Trigger animation with slight dealy
        requestAnimationFrame(() => {

            setQuickBoxSectionStyle({

                transform: "scale(1)",
                opacity: "1",
                transition: "all 0.8s ease"

            });

            setQuickViewBoxAnime({

                transform: "translateY(0px)",
                opacity: "1",
                filter: "blur(0px)",
                transition: 'all 0.8s ease 0.5s'

            });

            setCloseIconAnime({

                opacity: "1",
                filter: "blur(0px)",
                transition: 'all 0.8s ease 0.5s',
                transform: "scale(1)",

            })

        })
        
    }

    function handleCloseQuickViewBox() {
        
        setQuickBoxSectionStyle({

            transform: "scale(0)",
            opacity: "0",
            transition: "all 0.8s ease 0.5s"

        });

        setQuickViewBoxAnime({

            transform: "translateY(-2000px)",
            opacity: "0",
            filter: "blur(50px)",
            transition: "all 1s ease 0.3s"

        });

        setCloseIconAnime({

            transform: "scale(0)",
            transition: 'all 0.8s ease',
            opacity: "0",
            filter: "blur(20px)"

        })

    }


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

                    delay: '2000'

                }}
                navigation={{

                    nextEl: '#next',
                    prevEl: '#previous'

                }}

                modules={[Autoplay, Navigation]}
                style={menProductCarousel}

                onSwiper={(swiper) => {

                    swiper.el.addEventListener('mouseover', () => {

                        swiper.autoplay.stop();

                    });

                    swiper.el.addEventListener('mouseout', () => {

                        swiper.autoplay.start();

                    })

                }}
                
            >

                {menProduct.map((menItem, idx) => {

                    return (

                        <SwiperSlide className={HomeMenOutfitStyle.menProduct} key={idx}>

                            <div className={HomeMenOutfitStyle.menProductImage}>

                                <GoHeart onClick={() => { dispatch(addToWishlist(menItem)) }} />
                                <FaEye onClick={() => handleViewClick(idx)} />
                                
                                <Link to={`/product/${menItem.category}/${menItem.id}`}>
                                
                                    <img src={menItem.image} alt={menItem.title}/>
                                
                                </Link>

                                    
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

            {menProduct.map((menProduct, idx) => {

                return (

                    <div key={idx}>

                        { activeIdx === idx && (
                        
                            <QuickViewBox
                            
                                product={menProduct}
                                quickBoxSectionStyle={quickBoxSectionStyle}
                                onClick={handleCloseQuickViewBox}
                                quickViewBoxAnime={quickViewBoxAnime}
                                closeIconAnime={closeIconAnime}
                                
                            />

                        )}

                    </div>

                )

            })}
            
            <Reuseablenavigationarrow
            
                next="next"
                previous="previous"
                homeProductNavButton={menProductButton}
                
            />

        </>

    );

}

export default Homemenoutfit;