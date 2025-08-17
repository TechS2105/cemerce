import React from 'react';
import ReuseableNavigationArrowStyle from '../../public/styles/Reuseablenavigationarrow.module.css';

function Reuseablenavigationarrow({next, previous, homeProductNavButton}) {
    
    return (

        <>
        
            <div className={ReuseableNavigationArrowStyle.navArrowBox} style={homeProductNavButton}>

                <ul>

                    <li><span id={previous}>Previous</span></li>
                    <li><span id={next}>Next</span></li>

                </ul>

            </div>
            
        </>

    );

}

export default Reuseablenavigationarrow;