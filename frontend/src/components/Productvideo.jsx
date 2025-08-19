import React from 'react';
import { Autoplay } from 'swiper/modules';

function Productvideo(props) {
    
    return (

        <>
        
           <video src={props.video} style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center"}} autoPlay muted loop></video>
            
        </>

    );

}

export default Productvideo;