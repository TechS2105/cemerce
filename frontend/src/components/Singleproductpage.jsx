import React, {useState, useEffect, useRef} from 'react';
import SingleProductPageProductSection from '../components/Singleproductpageproductsection';
import SingleProductPageStyle from '../../public/styles/Singleproductpage.module.css'
import SingleProductPageLikeProduct from '../components/Singleproductpagelikeproduct';
import SingleProductPageProductShortDescriptionSection from '../components/Singleproductpageproductshortdescription';
import SingleProductPageDiscoverSection from '../components/Singleproductpagediscoversection';
import SingleProductDelivarySection from '../components/Singleproductdelivarysection';
import SingleProductPageFaqSecton from '../components/Singleproductpagefaqsection';
import { useParams } from 'react-router-dom';
import ProductDetailSubNavMenu from '../components/Productdetailsubnavbar';

function Productfulldetails() {

    const { title } = useParams();
    const [getProduct, setGetProduct] = useState([]);
    
    const productDetailsSocialIconRef = useRef();


    // Single Product Page Loader
    const [sectionLoadAnimation, setSectionLoadAnimation] = useState({

        opacity: "1",
        transform: "translateY(0px)",
        backgroundColor: "snow",
        backdropFilter: "blur(50px)"

    });

    // Product Sub Nav Section
    const [productDetailSubNavBarStyle, setProductDetailSubNavBarStyle] = useState({

        transform: "translateY(-300px)",
        opacity: "0",
        filter: "blur(50px)"

    });

    // Single Product Page Image Section
    const [productImageAnime, setProductImageAnime] = useState({

        transform: "translateY(1000px)",
        filter: "brightness(250%)",

    })

    //Single Product Page Heading 
    const [productDetailsHeadingAnimation, setProductDetailsHeadingAnime] = useState({

        transform: "translateX(-1000px)",
        opacity: "0",
        filter: "blur(20px)",

    });

    // Single product Page Price
    const [productDetailsPriceAnime, setProductDetailsPriceAnime] = useState({

        transform: "translateX(-500px)",
        opacity: "0",
        filter: "blur(20px)",

    });

    //Single Product Counter
    const [productDetailsCounter, setProductDetailsCounter] = useState({

        transform: "scale(0)",
        opacity: "0"

    });

    // Single Product Add To Cart Button
    const [productDetailsFirstButton, setProductDetailsFirstButton] = useState({

        transform: "scale(0)",
        opacity: "0"

    });

    // Single Product Buy Now Button
    const [productDetailsSecondButton, setProductDetailsSecondButton] = useState({

        transform: "scale(0)",
        opacity: "0"

    });

    // Single Product Wishlist Button
    const [productDetailsWishlistButton, setProductDetailsWishlistButton] = useState({

        transform: "translateY(100px)"

    });

    // Single Product Compare Button
    const [productDetailsCompareButton, setProductDetailsCompareButton] = useState({

        transform: "translateY(100px)",
        opacity: "0"

    });

    // Single Product Table First Row
    const [productDetailsTableFirstRow, setProductDetailsTableFirstRow] = useState({
        
        transform: "translateX(-500px)",
        opacity: "0"

    });

    // Single Product Table Second Row
    const [productDetailsTableSecondRow, setProductDetailsTableSecondRow] = useState({

        transform: "translateX(-500px)",
        opacity: "0"

    });

    // Single Product Table Third Box
    const [productDetailsTableThirdBox, setProductDetailsTableThirdBox] = useState({

        transform: "translateX(-500px)",
        opacity: "0"

    });

    // Single Product Page Shipping info Box
    const [productDetailsShippingInfoBox, setProductDetailsShippingInfoBox] = useState({


        transform: "translateX(-1000px)",
        opacity: "0",

    });

    // Single Product Page Care Guide Box
    const [productDetailsShippingCareGuide, setProductDetailsShippingCareGuide] = useState({

        transform: "translateX(1000px)",
        opacity: "0"

    });

    // Single Product Page Secure Payment Box
    const [productDetailsSecurePayments, setProductDetailsSecurePayments] = useState({

        transform: 'translateX(-1000px)',
        opacity: "0"

    });

    // Single Product Page Free Delivary Part
    const [productDetailsFreeDelivery, setProductDetailsFreeDelivery] = useState({

        transform: "translateY(100px)",
        opacity: "0"

    });

    function handleLoadAnimation(){

        setSectionLoadAnimation({

            opacity: "0",
            backgroundColor: "none",
            transform: "translateY(-1000px)",
            backdropFilter: "blur(0px)",
            transition: "all 2s ease 0.8s"

        });

        setProductDetailSubNavBarStyle({

            transform: "translateY(0px)",
            opacity: "1",
            filter: "blur(0px)",
            transition: "all 1s ease 1s"

        });

        setProductImageAnime({

            transform: "translateY(0px)",
            transition: "all 1.5s ease 1.5s",
            filter: "brightness(100%)"

        });

        setProductDetailsHeadingAnime({

            transform: "translateX(0px)",
            transition: "all 1s ease 1.7s",
            opacity: "1",
            filter: "blur(0px)"

        });

        setProductDetailsPriceAnime({

            transform: "translateX(0px)",
            transition: "all 1s ease 2s",
            opacity: "1",
            filter: "blur(0px)"

        });

        setProductDetailsCounter({

            transform: "scale(1)",
            transition: "all 0.8s ease 2.3s",
            opacity: "1",

        });

        setProductDetailsFirstButton({

            transform: "scale(1)",
            transition: "transform 0.8s ease 2.6s",
            opacity: "1"

        });

        setProductDetailsSecondButton({

            transform: "scale(1)",
            transition: "transform 0.8s ease 2.9s",
            opacity: "1"

        }); 

        setProductDetailsWishlistButton({

            transform: "translateY(0px)",
            transition: "all 0.8s ease 3s"

        });

        setProductDetailsCompareButton({

            transform: "translateY(0px)",
            opacity: "1",
            transition: "all 0.8s ease 3.3s"

        });

        setProductDetailsTableFirstRow({

            transform: "translateX(0px)",
            opacity: "1",
            transition: "all 1s ease 3.6s"

        });

        setProductDetailsTableSecondRow({

            transform: "translateX(0px)",
            transition: "all 1s ease 3.8s",
            opacity: "1"

        });

        setProductDetailsTableThirdBox({

            transform: "translateX(0px)",
            opacity: "1",
            transition: "all 1s ease 4s"

        });

        setProductDetailsShippingInfoBox({

            transform: "translateX(0px)",
            transition: 'all 1s ease 4.2s',
            opacity: "1",
            
        });

        setProductDetailsShippingCareGuide({

            transform: "translateX(0px)",
            transition: "all 1s ease 4.4s",
            opacity: "1"

        });

        setProductDetailsSecurePayments({

            transform: "translateX(0px)",
            transition: "all 1s ease 4.6s",
            opacity: "1"

        });

        setProductDetailsFreeDelivery({

            transform: "translateY(0px)",
            opacity: "1",
            transition: "all 1s ease 4.8s"

        });

        const icons = productDetailsSocialIconRef.current.querySelectorAll('span');

        icons.forEach((box) => {

            box.style.opacity = "0"

        });

    }

    useEffect(() => {

        const fetchProductData = async () => {
           
            try {
                
                const response = await fetch(`http://localhost:3000/api/product/collection/${title}`);

                if (!response) {
                    
                    throw new Error(`${response.status}`);

                }

                let data = await response.json();
                setGetProduct(data);

            } catch (error) {
                
                console.log(error);

            }

        }
        
        if (title) {
            
            fetchProductData();

        }

        if (getProduct && getProduct.title) {
            
            handleLoadAnimation();

        }

    }, [getProduct, title]);

    return (
        
        <>

            <main>
                
                <div className={SingleProductPageStyle.singleProducPage}>

                    <div className={SingleProductPageStyle.loaderDiv} style={sectionLoadAnimation}></div>

                    <ProductDetailSubNavMenu 
                    
                        navLink="Home"
                        productCategory={getProduct.category}
                        productTitle={getProduct.title}
                        productDetailSubNavBarStyle={productDetailSubNavBarStyle}
                        
                    />

                    <SingleProductPageProductSection
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        product={getProduct}
                        productImageAnime={productImageAnime}
                        onLoad={handleLoadAnimation}
                        productDetailsHeadingAnime={productDetailsHeadingAnimation}
                        productDetailsPriceAnime={productDetailsPriceAnime}
                        productDetailsCounter={productDetailsCounter}
                        productDetailsFirstButton={productDetailsFirstButton}
                        productDetailsSecondButton={productDetailsSecondButton}
                        productDetailsWishlistButton={productDetailsWishlistButton}
                        productDetailsCompareButton={productDetailsCompareButton}
                        productDetailsTableFirstRow={productDetailsTableFirstRow}
                        productDetailsTableSecondRow={productDetailsTableSecondRow}
                        productDetailsTableThirdBox={productDetailsTableThirdBox}
                        productDetailsShippingInfoBox={productDetailsShippingInfoBox}
                        productDetailsShippingCareGuide={productDetailsShippingCareGuide}
                        productDetailsSecurePayments={productDetailsSecurePayments}
                        productDetailsFreeDelivery={productDetailsFreeDelivery}
                        productDetailsSocialIconRef={productDetailsSocialIconRef}
                        
                    />

                    <SingleProductPageLikeProduct
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                    <SingleProductPageProductShortDescriptionSection
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                    <SingleProductPageDiscoverSection 
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                    <SingleProductDelivarySection
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                    <SingleProductPageFaqSecton
                    
                        SingleProductPageStyle={SingleProductPageStyle}
                        
                    />

                </div>
                
            </main>
            
        </>

    )

}

export default Productfulldetails;