import React from 'react';
import HomeGridStyle from '../../public/styles/Homegrid.module.css'
import GridImage from '../components/Gridimage';

let image1 = "https://images.unsplash.com/photo-1527718641255-324f8e2d0421?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let image2 = "https://images.unsplash.com/photo-1723174975550-c1e0c6189bee?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let image3 = "https://plus.unsplash.com/premium_photo-1661274114204-aadd034cae9a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function Homegrid() {
    
    return (

        <div className={HomeGridStyle.grid}>

            <div className={HomeGridStyle.gridBox1}>

                <h2> <span style={ {color: "orange"} }>M</span>en's Casual Outfit </h2>
                
                <GridImage
                
                    image={image1}
                    
                />


            </div>
            <div className={HomeGridStyle.gridBox2}>

                <h2> <span style={{color: "orange"}}>W</span>omen's Office Wear </h2>

                <GridImage
                
                    image = {image2}
                />

            </div>
            <div className={HomeGridStyle.gridBox3}>

                <h2> <span style={{color: "orange"}}>K</span>id's Summer Outfit </h2>

                <GridImage
                
                    image = {image3}
                    
                />

            </div>

        </div>

    );

}

export default Homegrid;