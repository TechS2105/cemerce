import React from 'react';
import MenPageStyle from '../../public/styles/Menpage.module.css';
import ProductBannerVideo from '../components/Productbannervideo';
import MenCollection from '../components/Mencollection';
import MenPageHeading from '../components/Reuseablepageheading';

let bannerImage = "../../public/images/Men's Banner Images/image1.jpeg";

function Men() {
    
    return (

        <>
            
            <main>

                <div className={MenPageStyle.menProductStyle}>

                    <ProductBannerVideo
                    
                        image = {bannerImage}
                        
                    />

                </div>

                <MenPageHeading
                
                    pageHeading="Men's Collections"
                    
                />

                <MenCollection />

            </main>
            
        </>

    );

}

export default Men;