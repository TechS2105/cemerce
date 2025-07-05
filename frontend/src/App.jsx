import React from 'react';
import '../public/styles/App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/Rootlayout';
import Home from './components/Home';
import Shop from './components/Shop';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';

function App() {

    const router = createBrowserRouter(

        createRoutesFromElements(

            <Route path='/' element={<RootLayout />}>

                <Route index element={ <Home />} />
                <Route path='shop' element={<Shop />} />
                <Route path='men' element={<Men />} />
                <Route path='women' element={<Women />} />
                <Route path='kids' element={<Kids />} />
                <Route path='wishlist' element={<Wishlist />} />
                <Route path='cart' element={<Cart />} />

            </Route>

        )

    )
    
    return (
      
        <>
        
            <RouterProvider router={router} />
            
        </>
        
    );

}

export default App;