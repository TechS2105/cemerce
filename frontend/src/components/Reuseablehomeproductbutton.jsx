import React from 'react';
import ReuseableHomeProductButtonStyle from '../../public/styles/Reuseablehomeproductbutton.module.css';

function Reuseablehomeproductbutton({pageLink, homeViewMoreButton}) {

    return (

        <>
        
            <div className={ReuseableHomeProductButtonStyle.linkButton}>
            
                <button onClick={pageLink} style={homeViewMoreButton}> View More </button>
            
            </div>
            
        </>

    );

}

export default Reuseablehomeproductbutton;