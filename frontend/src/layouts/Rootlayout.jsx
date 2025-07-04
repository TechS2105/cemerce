import React from 'react';
import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function Rootlayout() {
    
    return (
        
        <>
        
            <NavBar />

            <div style={{widht: "100%", height: "100%"}}>

                <Outlet />

            </div>

        </>

    )

}

export default Rootlayout;