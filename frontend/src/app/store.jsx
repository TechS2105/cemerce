import { configureStore } from '@reduxjs/toolkit';
import HomeMenSlice from '../features/Shop/HomeMenSlice';
import CartSlice from '../features/Shop/CartSlice';
import WishListSlice from '../features/Shop/WishListSlice';
import ProductSlice from '../features/Shop/ShopProductSlice';

const store = configureStore({

    reducer: {

        homeMenProduct: HomeMenSlice,
        cart: CartSlice,
        wishlist: WishListSlice,
        shopProduct: ProductSlice

    }

});

export default store;