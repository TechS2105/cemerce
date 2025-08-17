import React from 'react';

function Loadertextcomponent(props) {
    
    return (

        <>
        
            <h1 className={props.LoaderStyle} style={props.textAnime}>{ props.character }</h1>
        
        </>

    );

}

export default Loadertextcomponent;