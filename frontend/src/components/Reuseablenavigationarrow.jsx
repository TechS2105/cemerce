import React from 'react';
import ReuseableNavigationArrowStyle from '../../public/styles/Reuseablenavigationarrow.module.css';

function Reuseablenavigationarrow({next, previous}) {
    
    return (

        <>
        
            <div className={ReuseableNavigationArrowStyle.navArrowBox}>

                <ul>

                    <li><span id={previous}>Previous</span></li>
                    <li><span id={next}>Next</span></li>

                </ul>

            </div>
            
        </>

    );

}

export default Reuseablenavigationarrow;