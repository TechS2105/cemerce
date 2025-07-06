import React from 'react';
import BrandLogoImage from '../components/Brandlogoimg';
import BrandLogoStyle from '../../public/styles/Brandlogoimages.module.css';

let logo1 = '../../public/images/brand logos/Untitled design (7).png';
let logo2 = '../../public/images/brand logos/Untitled design (1).png';
let logo3 = '../../public/images/brand logos/Untitled design (2).png';
let logo4 = '../../public/images/brand logos/Untitled design (3).png';
let logo5 = '../../public/images/brand logos/Untitled design (4).png';
let logo6 = '../../public/images/brand logos/Untitled design (5).png';
let logo7 = '../../public/images/brand logos/Untitled design (8).png';

function Brandcarousel() {
    
    return (

        <>
        
            <div className={BrandLogoStyle.brandLogoContainer}>

                <div className={BrandLogoStyle.brandLogos}>

                    <ul>

                        <li>

                            <BrandLogoImage
                            
                                image = {logo1}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage
                            
                                image={logo2}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage
                            
                                image={logo3}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage
                            
                                image={logo4}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage 
                            
                                image={logo5}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage
                            
                                image={logo6}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage
                            
                                image={logo7}
                                
                            />

                        </li>

                    </ul>
                    
                    <ul>

                        <li>

                            <BrandLogoImage
                            
                                image = {logo1}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage
                            
                                image={logo2}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage
                            
                                image={logo3}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage
                            
                                image={logo4}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage 
                            
                                image={logo5}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage
                            
                                image={logo6}
                                
                            />

                        </li>
                        <li>

                            <BrandLogoImage
                            
                                image={logo7}
                                
                            />

                        </li>

                    </ul>

                </div>

            </div>
            
        </>

    );

}

export default Brandcarousel;