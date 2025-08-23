import React from 'react';
import NavBar from '../components/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/Footer';

function Rootlayout() {
    
    return (
        
        <>
        
            <NavBar />

            <div style={{widht: "100%", height: "100%"}}>

                <Outlet />
                <ScrollRestoration />

            </div>

            <Footer />

        </>

    )

}

export default Rootlayout;