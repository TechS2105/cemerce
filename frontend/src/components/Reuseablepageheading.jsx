import React from 'react';
import ReuseablePageHeadingStyle from '../../public/styles/Reuseablepageheading.module.css';

function Reuseablepageheading({pageHeading}) {
    
    return (
      
        <>
        
            <div className={ReuseablePageHeadingStyle.headingStyle}>

                <h2> {pageHeading} </h2>

            </div>
            
        </>
        
    );

}

export default Reuseablepageheading;