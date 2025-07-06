import { configureStore } from '@reduxjs/toolkit';
import HomeMenSlice from '../features/Shop/HomeMenSlice';
import CartSlice from '../features/Shop/CartSlice';
import WishListSlice from '../features/Shop/WishListSlice';
import ProductSlice from '../features/Shop/ShopProductSlice';
import MenCollectionSlice from '../features/Shop/MenCollectionSlice';
import HomeWomenSlice from '../features/Shop/HomeWomenSlice';
import WomenCollectionSlice from '../features/Shop/WomenCollectionSlice';
import HomeKidsSlice from '../features/Shop/HomeKidsSlice';

const store = configureStore({

    reducer: {

        homeMenProduct: HomeMenSlice,
        cart: CartSlice,
        wishlist: WishListSlice,
        shopProduct: ProductSlice,
        menCollections: MenCollectionSlice,
        homeWomenProduct: HomeWomenSlice,
        womenProduct: WomenCollectionSlice,
        homeKidsProduct: HomeKidsSlice

    }

});

export default store;