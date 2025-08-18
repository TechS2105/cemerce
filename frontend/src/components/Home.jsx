import React, {useState, useEffect} from 'react';
import HomeStyle from '../../public/styles/Home.module.css';
import { GoDotFill } from "react-icons/go";
import CategoryBox from '../components/Categorybox';
import HomeGrid from '../components/Homegrid';
import HomeMenOutfit from '../components/Homemenoutfit';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HomeWomenProduct from '../components/Homewomenproduct';
import ProductDiscount from '../components/Productdiscount';
import BrandCarousel from '../components/Brandcarousel';
import HomeKids from '../components/Homekids';
import TestimonialCarousel from '../components/Testimonialcarousel';
import HomeBannerCarousel from '../components/Homebannercarousel';
import ReuseHomeProductButton from '../components/Reuseablehomeproductbutton';
import Loader from '../components/Loader';

function Home() {

    const navigate = useNavigate();

    const [menProductAnime, setMenProductAnime] = useState({

        transform: "translateY(100px)",
        opacity: "0",
        filter: "blur(20px)",

    });

    const [menProductCarousel, setMenProductCarousel] = useState({

        transform: "translateY(1000px)",
        opacity: "0",
        filter: "blur(20px)"

    });

    const [menProductButton, setMenProductButton] = useState({

        opacity: "0",
        filter: "blur(20px)",

    });

    const [homeMenViewMoreButton, setHomeMenViewMoreButton] = useState({

        transform: "translateY(100px)",
        opacity: "0",
        filter: "blur(20px)",

    });

    // Men Product Discount Section 
    const [menDiscountImageAnime, setMenDiscountImageAnime] = useState({

        opacity: "0",
        filter: "blur(20px)",

    });

    const [menProductDiscountHeading, setMenProductHeading] = useState({

        opacity: "0",
        filter: "blur(20px)",

    });

    const [menProductDiscountPara1, setMenProductDiscountPara1] = useState({

        opacity: "0",
        filter: "blur(20px)",

    });

    const [menProductDiscountPara2, setMenProductDiscountPara2] = useState({

        opacity: '0',
        filter: "blur(20px)",

    });

    const [menProductDiscountShopNowButton, setMenProductDiscountShopNowButton] = useState({

        opacity: '0',
        filter: "blur(20px)",

    });

    function handleMenProductScroll() {
        
        if (window.scrollY > 1500) {
           
            setMenProductAnime({

                transform: "translateY(0px)",
                transition: "all 0.8s ease",
                opacity: "1",
                filter: "blur(0px)"

            });

            setMenProductCarousel({

                transform: "translateY(0px)",
                transition: "all 0.8s ease 0.5s",
                opacity: "1",
                filter: "blur(0px)"

            });

        } else {
            
            setMenProductAnime({

                transform: "translateY(100px)",
                transition: "all 0.8s ease",
                opacity: "0",
                filter: "blur(20px)",

            });

            setMenProductCarousel({

                transform: "translateY(1000px)",
                transition: "all 0.8s ease",
                opacity: "0",
                filter: "blur(20px)"

            })

        }
        
        if (window.scrollY >= 1800) {
            
            setMenProductButton({

                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.3s"

            });

        } else {
            
            setMenProductButton({

                opacity: "0",
                filter: "blur(20px)",
                transition: 'all 0.8s ease'

            });

        }

        if (window.scrollY >= 2000) {
            
            setHomeMenViewMoreButton({

                transform: "translateY(0px)",
                transition: "all 0.8s ease",
                opacity: "1",
                filter: "blur(0px)",

            });

        } else {
            
            setHomeMenViewMoreButton({

                transform: "translateY(100px)",
                transition: "all 0.8s ease",
                opacity: "0",
                filter: "blur(20px)",

            })

        }

    }

    function handleMenProductDiscount() {
        
        if (window.scrollY > 2300) {
            
            setMenDiscountImageAnime({

                opacity: '1',
                filter: "blur(0px)",
                transition: "all 0.8s ease"

            });

            setMenProductHeading({

                opacity: '1',
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.2s"

            });

            setMenProductDiscountPara1({

                opacity: '1',
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.4s"

            });

            setMenProductDiscountPara2({

                opacity: '1',
                filter: "blur(0px)",
                transition: "all 0.8s ease 0.6s"

            });

            setMenProductDiscountShopNowButton({

                opacity: "1",
                filter: "blur(0px)",
                transition: "all 0.8s ease"

            })
            

        }else{

            setMenDiscountImageAnime({

                opacity: '0',
                filter: "blur(20px)",
                transition: "all 0.8s ease"

            });

            setMenProductHeading({

                opacity: '0',
                filter: "blur(20px)",
                transition: "all 0.8s ease"

            });

            setMenProductDiscountPara1({

                opacity: '0',
                filter: "blur(20px)",
                transition: "all 0.8s ease"

            });

            setMenProductDiscountPara2({

                opacity: '0',
                filter: "blur(20px)",
                transition: "all 0.8s ease"

            });

            setMenProductDiscountShopNowButton({

                opacity: "0",
                filter: "blur(20px)",
                transition: "all 0.8s ease"

            })

        }

    }

    useEffect(() => {

        window.addEventListener("scroll", handleMenProductScroll);
        window.addEventListener("scroll", handleMenProductDiscount);

    }, [])
    
    return (

        <>
        
            {/* <Loader /> */}
            
            <main>
            
            {/** Hero Section Video */}
            <HomeBannerCarousel />

            {/** Notice Carousel */}
            <div className={HomeStyle.noticeSection}>

                <div className={HomeStyle.noticeContent}>

                    <p> Stay With Us For Get New Poroduct Notifications...</p>
                    <GoDotFill />
                    <p> Stay With Us For Get New Poroduct Notifications... </p>
                    <GoDotFill />
                    <p> Stay With Us For Get New Poroduct Notifications... </p>
                    <GoDotFill />
                    <p> Stay With Us For Get New Poroduct Notifications... </p>
                    <GoDotFill />
                    <p> Stay With Us For Get New Poroduct Notifications... </p>
                    <GoDotFill />
                    <p> Stay With Us For Get New Poroduct Notifications... </p>

                </div>

            </div>

            {/** Category Section */}
            <div className={HomeStyle.categorySection}>

                <CategoryBox />   

            </div>

            {/** Product Grid Section */}
            <div className={HomeStyle.gridProductSection}>

                <HomeGrid />

            </div>

            {/** Men Product Section */}
            <div className={HomeStyle.menProductSection} onScroll={handleMenProductScroll}>

                <div className={HomeStyle.menHeading}>
                    
                    <h2 style={menProductAnime}> Men's Outfit </h2>
                
                </div>

                <div className={HomeStyle.menOutfitSection}>

                    <HomeMenOutfit 

                            menProductCarousel={menProductCarousel}
                            menProductButton={menProductButton}
                            
                    />
                    <ReuseHomeProductButton
                        
                            pageLink={() => navigate('/men')}
                            homeViewMoreButton={homeMenViewMoreButton}
                            
                    />

                </div>

            </div>

            {/** Men Product Discount */}
            <div className={HomeStyle.menProductdDiscount} onScroll={handleMenProductDiscount}>

                <div className={HomeStyle.discountProduct} style={menDiscountImageAnime}></div>
                <div className={HomeStyle.discountProductContent}>

                    <h2 style={menProductDiscountHeading}> Men's Product Discount </h2>
                    <p style={menProductDiscountPara1}><span style={{color: "orange", marginRight: "20px"}}> 50% </span> OFF </p>
                    <p style={menProductDiscountPara2}>Limited <span> Time </span> Offer </p>
                    <button onClick={() => navigate('/shop')} style={menProductDiscountShopNowButton}> Shop Now </button>

                </div>

            </div>

            {/** Women Product Section component*/}
            <HomeWomenProduct />

            {/** Women Product Discount Section */}
            <ProductDiscount
            
                discountImage="https://plus.unsplash.com/premium_photo-1661319067088-61e0b9e079b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
                discountHeading="Women's Product Discount"
                onButtonClick={() => {navigate('/shop')}}
            
            />

            {/** Home Kids Product Section */}
            <HomeKids />

            {/** Kids Product Discount Section */}
            <ProductDiscount
            
                discountImage="https://images.unsplash.com/photo-1741992556912-3b2d62461e75?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                discountHeading="Kid's Product Discount"
                onButtonClick={() => {navigate('/kids')}}
                
            />

            {/** Testimonial Carousel Section */}
            <TestimonialCarousel />

            {/** Brand Logo Carousel Seciton */}
            <BrandCarousel />

            </main>
                
            {/** Footer Section Component */}
            <Footer />
            
        </>

    );

}

export default Home;