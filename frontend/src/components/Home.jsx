import React from 'react';
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

function Home() {

    const navigate = useNavigate();
    
    return (

        <>
        
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
            <div className={HomeStyle.menProductSection}>

                <div className={HomeStyle.menHeading}>
                    
                    <h2> Men's Outfit </h2>
                
                </div>

                <div className={HomeStyle.menOutfitSection}>

                    <HomeMenOutfit />
                    <ReuseHomeProductButton
                        
                        pageLink={() => navigate('/men')}
                            
                    />

                </div>

            </div>

            {/** Men Product Discount */}
            <div className={HomeStyle.menProductdDiscount}>

                <div className={HomeStyle.discountProduct}></div>
                <div className={HomeStyle.discountProductContent}>

                    <h2> Men's Product Discount </h2>
                    <p><span style={{color: "orange", marginRight: "20px"}}> 50% </span> OFF </p>
                    <p>Limited <span> Time </span> Offer </p>
                    <button onClick={() => navigate('/shop')}> Shop Now </button>

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