import React from 'react';

function Discoversectioncontent(props) {
    
    return (

        <>
        
            <span>{props.spanText}</span>
            <h3>{props.headingText}</h3>
            <p>{props.paraText}</p>
            <button onClick={() => props.navigateDiscover('/shop')}> Discover Now </button>
            
        </>

    );

}

export default Discoversectioncontent;