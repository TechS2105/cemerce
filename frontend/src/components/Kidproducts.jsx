import React, {useState, useEffect} from 'react';
import KidProduct from '../../public/styles/Kidproducts.module.css';
import { fetchKidCollections } from '../features/Shop/KidCollectionsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { GoHeart } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishlist } from '../features/Shop/WishListSlice';
import QuickViewBox from '../components/Quickviewbox';

function Kidcollections() {

    const [activeIdx, setActiveIdx] = useState(false);

    const [quickBoxSectionStyle, setQuickBoxSectionStyle] = useState({
        
        transform: "scale(0)",
        opacity: "0",
        filter: 'blur(20px)'

    });

    const [quickViewBoxAnime, setQuickViewBoxAnime] = useState({

        transform: "translateY(1000px)",
        opacity: "0",
        filter: "blur(20px) brightness(350%)",

    });

    const [closeIconAnime, setCloseIconAnime] = useState({

        transform: "scale(0)",
        opacity: "0",
        filter: "blur(20px)"

    });

    function handleQuickViewBox(idx) {
        
        setActiveIdx(idx);

        setQuickBoxSectionStyle({

            transform: "scale(0)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "none"

        });

        setQuickViewBoxAnime({

            transform: "translateY(1000px)",
            opacity: "0",
            filter: "blur(20px) brightness(350%)",
            transition: "none"

        });

        setCloseIconAnime({

            transform: "scale(0)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "none"

        })

        /** Request animation when thiggered */
        requestAnimationFrame(() => {

            setQuickBoxSectionStyle({

                transform: "scale(1)",
                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease"

            });

            setQuickViewBoxAnime({

                transform: "translateY(0px)",
                transition: "all 0.8s ease 0.5s",
                opacity: "1",
                filter: "blur(0px) brightness(100%)"

            });

            setCloseIconAnime({

                transform: "scale(1)",
                transition: "all 0.8s ease 0.7s",
                opacity: "1",
                filter: "blur(0px)"

            });

        });

    }

    function handleQuickViewBoxCloseFun() {
        
        setQuickBoxSectionStyle({

            transform: "scale(0)",
            filter: "blur(20px)",
            opacity: "0",
            transition: 'all 0.8s ease 0.6s'

        });

        setQuickViewBoxAnime({

            transform: "translateY(1000px)",
            filter: "blur(20px) brightness(350%)",
            opacity: "0",
            transition: "all 0.8s ease 0.5s"

        });

        setCloseIconAnime({

            transform: "scale(0)",
            filter: "blur(20px)",
            opacity: "0",
            transition: "all 0.8s ease"

        })

    }

    const { items: kidCollection, status } = useSelector((state) => state.kidCollections);
    const dispatch = useDispatch();

    useEffect(() => {

        if (status === 'idle') {
            
            dispatch(fetchKidCollections());

        }

    }, [status, dispatch]);

    if(status === 'loading') return <p> Product is loading... </p>
    if(status === 'failed') return <p> Product not found...</p> 
    
    return (

        <div className={KidProduct.kidProductContainer}>

            {kidCollection.map((kidItems, idx) => {

                return (

                    <div className={KidProduct.kidProductBox} key={idx}>

                        <div className={KidProduct.kidProductImage}>

                            <GoHeart onClick={() => {dispatch(addToWishlist(kidItems))}} />
                            <FaRegEye onClick={() => {handleQuickViewBox(idx)}}/>
                            <img src={kidItems.image} alt={kidItems.title} />

                        </div>

                        <div className={KidProduct.kidProductContent}>

                            <h3 style={{paddingLeft: "20px"}}> {kidItems.title} </h3>
                            <p style={{paddingLeft: "20px"}}> Category: {kidItems.category} </p>
                            <p style={{paddingLeft: "20px"}}> Price: {kidItems.price} /-</p>
                            <button style={{ marginLeft: "20px" }} onClick={() => { dispatch(addToCart(kidItems))}}> Add To Cart </button>

                        </div>

                    </div>

                );

            })}
            
            {kidCollection.map((kidProduct, idx) => {

                return (

                    <div key={idx} style={{position: "fixed", zIndex: "99"}}>

                           {activeIdx === idx && (

                                <QuickViewBox
                                
                                    product={kidProduct}
                                    quickBoxSectionStyle={quickBoxSectionStyle}
                                    onClick={handleQuickViewBoxCloseFun}
                                    quickViewBoxAnime={quickViewBoxAnime}
                                    closeIconAnime={closeIconAnime}
                                    
                                />
                                
                           )}

                    </div>              

                );

            })}

        </div>

    );

}

export default Kidcollections;