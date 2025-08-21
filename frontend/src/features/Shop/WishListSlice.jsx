import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWishlistProduct = createAsyncThunk('wishlist/fetchWishlistProduct', async () => {
    
    const response = await axios.get('http://localhost:3000/api/wishlist/product');
    return response.data;

});

export const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async ({ image, title, category, price }) => {
    
    const response = await axios.post('http://localhost:3000/api/wishlist/product', { image, title, category, price });
    return response.data;

});

const WishlistSlice = createSlice({

    name: 'wishlist',
    initialState: {

        items: [],
        status: 'idle'

    },
    extraReducers: (build) => {

        build.addCase(fetchWishlistProduct.fulfilled, (state, action) => {

            state.items = action.payload;

        }).addCase(addToWishlist.fulfilled, (state, action) => {

            state.items.push(action.payload);

        })

    }

});

export default WishlistSlice.reducer;