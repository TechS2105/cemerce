import React from 'react';
import ReuseableHomeProductButtonStyle from '../../public/styles/Reuseablehomeproductbutton.module.css';

function Reuseablehomeproductbutton({pageLink}) {

    return (

        <>
        
            <div className={ReuseableHomeProductButtonStyle.linkButton}>
            
                <button onClick={pageLink}> View More </button>
            
            </div>
            
        </>

    );

}

export default Reuseablehomeproductbutton;