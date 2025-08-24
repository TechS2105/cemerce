import React, {useState, useEffect} from 'react';
import ProductStyle from '../../public/styles/Products.module.css';
import ProductImage from '../components/Productsimage';
import ProductContent from '../components/Productcontent';
import { fetchMenCollections } from '../features/Shop/MenCollectionSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/Shop/CartSlice';
import { addToWishlist } from '../features/Shop/WishListSlice';
import QuickViewBox from '../components/Quickviewbox';

function Product() {

    const [activeIdx, setActiveIdx] = useState(false);
    
    const [quickBoxSectionStyle, setQuickBoxSectionStyle] = useState({

        transform: 'scale(0)',
        opacity: "0",
        filter: "blur(20px)",

    });

    const [quickViewBoxAnime, setQuickViewBoxAnime] = useState({

        transform: "translateY(1000px)",
        opacity: "0",
        filter: "blur(20px) brightness(550%)"

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
            filter: "blur(20px) brightness(550%)",
            transition: "none"

        });

        setCloseIconAnime({

            transform: "scale(0px)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "none"

        });

        /** Request an animation when tiggered */
        requestAnimationFrame(() => {

            setQuickBoxSectionStyle({

                transform: "scale(1)",
                opacity: "1",
                filter: "blur(0px)",
                transtion: "all 0.8s ease"

            });

            setQuickViewBoxAnime({

                transform: "translateY(0px)",
                opacity: "1",
                filter: "blur(0px) brightness(100%)",
                transition: "all 0.8s ease 0.5s"

            });

            setCloseIconAnime({

                transform: "scale(1)",
                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.7s"

            })

        });

    }

    // Quick view box close functionality
    function handleQuickViewBoxCloseIcon() {
        
        setQuickBoxSectionStyle({

            transform: "scale(0)",
            transition: "all 0.8s ease 0.5s",
            opacity: "0",
            filter: "blur(20px)"

        });

        setQuickViewBoxAnime({

            transform: "translateY(1000px)",
            opacity: "0",
            filter: "blur(20px) brightness(350%)",
            transition: "all 0.8s ease 0.3s"

        });

        setCloseIconAnime({

            transform: "scale(0)",
            opacity: "0",
            filter: "blur(20px)",
            transition: "all 0.8s ease"

        });

    }

    const { items: menCollection, status } = useSelector((state) => state.menCollections);
    useSelector((state) => console.log(state.cart));
    useSelector((state) => console.log(state.wishlist))

    const dispatch = useDispatch();

    useEffect(() => {

        if(status === 'idle'){

            dispatch(fetchMenCollections());

        }

    }, [status, dispatch])

    if(status === 'loading') return <p> Product is loading...</p>
    if(status === 'failed') return <p> Product not found...</p>
    
    return (

        <>
        
            {menCollection.map((menProduct, idx) => {

                return (

                    <div className={ProductStyle.productBox} key={idx}>

                        <div className={ProductStyle.productImage}>

                            <ProductImage 
                            
                                productImage={menProduct.image}
                                title={menProduct.title}
                                onButtonClick={() => { dispatch(addToWishlist(menProduct)) }}
                                handleQuickViewBox={() => handleQuickViewBox(idx)}
                                
                            />

                        </div>

                        <div className={ProductStyle.productContent}>

                            <ProductContent
                            
                                productHeading={menProduct.title}
                                productCategory={menProduct.category}
                                productPrice={menProduct.price}
                                cartButton="Add To Cart"
                                onButtonClick = {() => {dispatch(addToCart(menProduct))}}
                                
                            />

                        </div>

                    </div>

                );

            })}
           
            {menCollection.map((menProduct, idx) => {

                return (

                    <div key={idx} style={{position: "fixed", zIndex: '99'}}>

                            {/** activeIdx and idx value when match */}
                            {activeIdx === idx && (

                                <QuickViewBox
                                
                                    product={menProduct}
                                    quickBoxSectionStyle={quickBoxSectionStyle}
                                    onClick={handleQuickViewBoxCloseIcon}
                                    quickViewBoxAnime={quickViewBoxAnime}
                                    closeIconAnime={closeIconAnime}
                                    
                                />
                                
                            )}
                        
                    </div>

                );

            })}
            
        </>

    );

}

export default Product;