import React from 'react';

function Productvideo({src}) {
    
    return (

        <>
        
            {/* <video src={src} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} autoPlay muted loop></video> */}

            <video width="100%" height="auto">

                <source src={src} type='video/mp4'/>

            </video>

        </>

    );

}

export default Productvideo;