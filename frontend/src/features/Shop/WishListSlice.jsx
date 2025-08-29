import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET Wishlist Product
export const fetchWishlistProduct = createAsyncThunk('wishlist/fetchWishlistProduct', async () => {
    
    const response = await axios.get('http://localhost:3000/api/wishlist/product');
    return response.data;

});

// POST Wishlist Product
export const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async ({ image, title, category, price }) => {
    
    const response = await axios.post('http://localhost:3000/api/wishlist/product', { image, title, category, price });
    return response.data;

});

// Delete Wishlist Product
export const removeWishlistProduct = createAsyncThunk('wishlist/removeWishlistProduct', async (id) => {
    
    await axios.delete(`http://localhost:3000/api/wishlist/delete/product/${id}`);
    return id;

});

const WishListSlice = createSlice({

    name: 'wishlist',
    initialState: {

        items: [],
        status: 'idle'

    },
    extraReducers: (build) => {

        build.addCase(fetchWishlistProduct.fulfilled, (state, action) => {

            state.items = action.payload

        }).addCase(addToWishlist.fulfilled, (state, action) => {

            const existingItems = state.items.find((item) => item.id === action.payload.id);

            if(existingItems){

                existingItems.quentity += 1;

            } else {
                
                state.items.push({ ...action.payload, quentity: 1 });

            }


        }).addCase(removeWishlistProduct.fulfilled, (state, action) => {

            state.items = state.items.filter((item) => item.id !== action.payload);

        })

    }

});

export default WishListSlice.reducer;