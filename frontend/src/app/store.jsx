import { configureStore } from '@reduxjs/toolkit';
import HomeMenSlice from '../features/Shop/HomeMenSlice';
import CartSlice from '../features/Shop/CartSlice';
import WishListSlice from '../features/Shop/WishListSlice';

const store = configureStore({

    reducer: {

        homeMenProduct: HomeMenSlice,
        cart: CartSlice,
        wishlist: WishListSlice

    }

});

export default store;