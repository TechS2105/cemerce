import React from 'react';
import ProductHeadingStyle from '../../public/styles/Productheading.module.css';

function Productheading(props) {

    return (

        <div className={ProductHeadingStyle.menProductHeading}>
        
            <h2> {props.headingTitle} </h2>
        
        </div>

    );
    
}

export default Productheading;