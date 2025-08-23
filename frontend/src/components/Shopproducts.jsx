import React, {useState, useEffect} from 'react';
import ShopProductsStyle from '../../public/styles/Shopproducts.module.css';
import { fetchShopProduct } from "../features/Shop/ShopProductSlice";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishlist } from '../features/Shop/WishListSlice';
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import QuickViewBox from '../components/Quickviewbox';

function Shopproducts() {

    const [activeIdx, setActiveIdx] = useState(false);
    
    const [quickBoxSectionStyle, setQuickBoxSectionStyle] = useState({

        transform: "scale(0)",
        opacity: "0",
        filter: "blur(20px)",

    });

    const [quickViewBoxAnime, setQuickViewBoxAnime] = useState({

        transform: "translateY(-1000px)",
        opacity: "0",
        filter: "blur(20px)"

    });

    const [closeIconAnime, setCloseIconAnime] = useState({

        transform: "scale(0)",
        opacity: "0",
        filter: "blur(20px)",

    });

    function handleShopProductQuickViewBox(idx) {
        
        setActiveIdx(idx);

        setQuickBoxSectionStyle({

            transform: "scale(0)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "none"

        });
    
        setQuickViewBoxAnime({

            transform: "translateY(-1000px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "none"

        });
    
        setCloseIconAnime({

            transform: "scale(0)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "none"

        });

        {/** Trigger animation with slight dealy */ }

        requestAnimationFrame(() => {
            
            setQuickBoxSectionStyle({
               
                transform: "scale(1)",
                opacity: "1",
                filter: 'blur(0px)',
                transition: "all 0.8s ease"

            });

            setQuickViewBoxAnime({

                transform: "translateY(0px)",
                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.5s"

            });

            setCloseIconAnime({

                transform: "scale(1)",
                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.8s"

            });

        });

    }

    function handleCloseIcon() {
        
        setQuickBoxSectionStyle({

            transform: "scale(0)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "all 0.8s ease 1s"

        });

        setQuickViewBoxAnime({

            transform: "translateY(-1000px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "all 0.8s ease 0.5s"

        });

        setCloseIconAnime({

            transform: "scale(0)",
            opacity: "0",
            filter: 'blur(20px)',
            transition: "all 0.8s ease"

        })

    }


    const { items: productItem, status } = useSelector((state) => state.shopProduct);

    const dispatch = useDispatch();

    useEffect(() => {

        if (status === 'idle') {
            
            dispatch(fetchShopProduct());

        }

    }, [status, dispatch]);

    if(status === 'loading') return <p> Product is fetching....</p>
    if(status === 'failed') return <p> Product not found....</p>
    
    return (

        <>
        
            <div className={ShopProductsStyle.shopProductSection}>

                {productItem.map((shopItem, idx) => {

                    return (

                        <div className={ShopProductsStyle.shopProductBox} key={idx}>

                            <div className={ShopProductsStyle.shopProductImage}>

                                <GoHeart onClick={ () => {dispatch(addToWishlist(shopItem))}} />
                                <FaRegEye onClick={ () => {handleShopProductQuickViewBox(idx)}} />
                                <img src={shopItem.image} alt={shopItem.title} />

                            </div>
                            <div className={ShopProductsStyle.shopProductContent}>

                                <h3 style={{paddingLeft: "20px"}}> {shopItem.title} </h3>
                                <p style={{paddingLeft: "20px"}}> Category: Men's Outfit </p>
                                <p style={{paddingLeft: "20px"}}> Price: 5000 /- </p>
                                <button style={{marginLeft: "20px"}} onClick={() => {dispatch(addToCart(shopItem))}}> Add To Cart </button>

                            </div>

                        </div>

                    );

                })}
               
                {productItem.map((shopProduct, idx) => {

                    return (

                        
                        
                            <div key={idx}>

                                {/** active idx and idx when match */}
                                {activeIdx === idx && (

                                    <QuickViewBox
                                    
                                        product={shopProduct}
                                        quickBoxSectionStyle={quickBoxSectionStyle}
                                        onClick={handleCloseIcon}
                                        quickViewBoxAnime={quickViewBoxAnime}
                                        closeIconAnime={closeIconAnime}
                                        
                                    />

                                )}
                                
                            </div>
                            
                        

                    );

                })}

            </div>
            
        </>

    );

}

export default Shopproducts;