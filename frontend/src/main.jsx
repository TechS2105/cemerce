import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(

    
    <Provider store={store}>

        { window.innerWidth < 600 || window.innerWidth < 900 ? <div> Woriking Condition. Please stay with us </div> :

            <App />

        }

    </Provider>

);