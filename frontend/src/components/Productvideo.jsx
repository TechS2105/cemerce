import React from 'react';

function Productvideo({productVideo}) {
    
    return (

        <>
        
            <video src={productVideo} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} autoPlay muted loop></video>

        </>

    );

}

export default Productvideo;