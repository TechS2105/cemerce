import React from 'react';
import CategoryImage from '../components/CateogoryImage';
import CategoryBoxStyle from '../../public/styles/Categorybox.module.css';

function Categorybox() {
    
    return (

        <>
        
            <div className={CategoryBoxStyle.categoryBox}>

                <CategoryImage
        
                    img = "https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            
                />

            </div>
            

            <div className={CategoryBoxStyle.categoryBox}>

                <CategoryImage
                                    
                    img="https://images.unsplash.com/photo-1717724162644-75f624f413ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    
                />

            </div>
            

            <div className={CategoryBoxStyle.categoryBox}>

                <CategoryImage
                                    
                    img="https://images.unsplash.com/photo-1650784854693-17ce600bf652?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    
                />

            </div>

            <div className={CategoryBoxStyle.categoryBox}>

                <CategoryImage
                                    
                    img="https://images.unsplash.com/photo-1652794120690-a10454dca928?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    
                />

            </div>
            
            <div className={CategoryBoxStyle.categoryBox}>

                <CategoryImage
                                    
                    img="https://images.unsplash.com/photo-1667729699384-aac3a128f18a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    
                />

            </div>

            <div className={CategoryBoxStyle.categoryBox}>

                <CategoryImage 
                
                    img="https://images.unsplash.com/photo-1673340979193-481dd0eb49c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGtpZHMlMjBvdXRmaXR8ZW58MHx8MHx8fDA%3D"

                />

            </div>
            
            
        </>

    );

}

export default Categorybox;