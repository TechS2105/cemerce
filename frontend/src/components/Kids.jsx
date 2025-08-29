import React from 'react';
import KidCollectionStyle from '../../public/styles/Kidcollections.module.css';
import KidsBannerImage from '../components/Productbannervideo';
import KidsProduct from '../components/Kidproducts';
import KidsPageHeading from '../components/Reuseablepageheading';

let kidsBannerImage = "../../public/images/Kid's Banner Images/image3.jpg"

function Kids() {
    
    return (

        <>

            <main>

                <div className={KidCollectionStyle.kidCollectionPageBanner}>
            
                    <KidsBannerImage
                    
                        image={kidsBannerImage}
                        
                    />
                    
                </div>

                <KidsPageHeading
                
                    pageHeading="Kids Collections"
                    
                />

                <KidsProduct />

            </main>

        </>



    );

}

export default Kids;