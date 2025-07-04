import React from 'react';
import HomeStyle from '../../public/styles/Home.module.css';
import { GoDotFill } from "react-icons/go";
import CategoryBox from '../components/Categorybox';
import HomeGrid from '../components/Homegrid';
import HomeMenOutfit from '../components/Homemenoutfit';
import { useNavigate } from 'react-router-dom';

let video = '../../public/video/newvideo.mp4';

function Home() {

    const navigate = useNavigate();
    
    return (

        <>
        
            {/** Hero Section Video */}

            <div className={HomeStyle.bannerSection}>

                <video src={video} autoPlay loop muted></video>

            </div>

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
            
        </>

    );

}

export default Home;