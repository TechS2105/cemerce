import React from 'react';

function Homebannerimages({image, title, HomeBannerCarouselStyle}) {
    
    return (

        <>
        
            <img src={image} alt={title} className={HomeBannerCarouselStyle.images} />
            
        </>

    );

}

export default Homebannerimages;