import React, {useState, useEffect} from 'react';
import WomenProductStyle from '../../public/styles/Womenproduct.module.css';
import { fetchWomenProduct } from '../features/Shop/WomenCollectionSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';
import { GoHeart } from "react-icons/go";
import { addToWishlist } from "../features/Shop/WishListSlice";
import { FaRegEye } from "react-icons/fa";
import QuickViewBox from '../components/Quickviewbox';

function Womenproduct() {
    
    const [activeIdx, setActiveIdx] = useState(false);

    const [quickBoxSectionStyle, setQuickBoxSectionStyle] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",
        opacity: "0"

    });

    const [quickViewBoxAnime, setQuickViewBoxAnime] = useState({

        transform: "translateY(-1000px)",
        filter: "blur(20px) brightness(350%)",
        opacity: "0"

    });

    const [closeIconAnime, setCloseIconAnime] = useState({

        transform: "scale(0)",
        filter: "blur(20px)",
        opacity: "0",

    });

    function handleQuickViewBox(idx){

        setActiveIdx(idx);

        setQuickBoxSectionStyle({

            transform: "scale(0)",
            filter: "blur(20px)",
            opacity: "0",
            transition: "none"

        });

        setQuickViewBoxAnime({

            transform: "translateY(-1000px)",
            filter: "blur(20px) brightness(350%)",
            opacity: "0",
            transition: "none"

        });

        setCloseIconAnime({

            transform: "scale(0)",
            filter: "blur(20px)",
            opacity: "0",
            transition: 'none'

        })

        /** request an animation when tergated */
        requestAnimationFrame(() => {

            setQuickBoxSectionStyle({

                transform: "scale(1)",
                filter: "blur(0px)",
                opacity: '1',
                transition: 'all 0.8s ease'

            });

            setQuickViewBoxAnime({

                transform: "translateY(0px)",
                filter: "blur(0px) brightness(100%)",
                opacity: "1",
                transition: "all 0.8s ease 0.5s"

            });

            setCloseIconAnime({

                transform: "scale(1)",
                filter: "blur(0px)",
                opacity: "1",
                transition: "all 0.8s ease 0.7s"

            })

        });

    }

    function handleQuickViewBoxCloseFun() {
        
        setQuickBoxSectionStyle({

            transform: "scale(0)",
            filter: "blur(20px)",
            opacity: "1",
            transition: "all 0.8s ease 0.6s"

        });

        setQuickViewBoxAnime({

            transform: "translateY(-1000px)",
            filter: "blur(20px) brightness(350%)",
            opacity: "1",
            transition: "all 0.8s ease 0.3s"

        });

        setCloseIconAnime({

            transform: "scale(0)",
            filter: "blur(20px)",
            opacity: "0",
            transition: "all 0.8s ease"

        })

    }

    const { items: womenProducts, status } = useSelector((state) => state.womenProduct);
    const dispatch = useDispatch();

    useEffect(() => {

        if (status === 'idle') {

            dispatch(fetchWomenProduct());

        }

    }, [status, dispatch]);

    if(status === 'loading') return <p> Product is loading... </p>
    if(status === 'failed') return <p> Product not found... </p>

    return (

        <>
            {womenProducts.map((womenItems, idx) => {

                return (

                    <div className={WomenProductStyle.womenProductBox} key={idx}>

                        <div className={WomenProductStyle.womenProductImage}>

                            <GoHeart onClick={ () => {dispatch(addToWishlist(womenItems));}} />
                            <FaRegEye onClick={ () => handleQuickViewBox(idx) } />
                            <img src={womenItems.image} alt={womenItems.title} />

                        </div>

                        <div className={WomenProductStyle.womenProductContent}>

                            <h3> {womenItems.title} </h3>
                            <p>Category: { womenItems.category}</p>
                            <p>Price: {womenItems.price} /- </p>
                            <button onClick={() => {dispatch(addToCart(womenItems))}}> Add To Cart </button>

                        </div>

                    </div>
                )

            })}

            {womenProducts.map((womenProduct, idx) => {

                return (

                    <>
                    
                        <div key={idx} style={{position: "fixed", zIndex: "99"}}>

                            {/** activeIdx and idx when matched */}
                            {activeIdx === idx && (

                                <QuickViewBox
                                
                                    product={womenProduct}
                                    quickBoxSectionStyle={quickBoxSectionStyle}
                                    onClick={handleQuickViewBoxCloseFun}
                                    quickViewBoxAnime={quickViewBoxAnime}
                                    closeIconAnime={closeIconAnime}
                                    
                                />

                            )}
                            
                        </div>
                        
                    </>

                );

            })}

        </>       

    );

}

export default Womenproduct;