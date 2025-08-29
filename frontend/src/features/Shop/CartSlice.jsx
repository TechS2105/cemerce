import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET Cart Product 
export const fetchCartProduct = createAsyncThunk('cart/fetchCartProduct', async () => {
    
    const response = await axios.get("http://localhost:3000/api/cart/product");
    return response.data;

});

// POST Cart Product
export const addToCart = createAsyncThunk('cart/addToCart', async ({image, title, category, price} ) => {
    
    const response = await axios.post("http://localhost:3000/api/cart/product", { image, title, category, price });
    return response.data;

});

// DELETE Cart Product
export const removeCartProduct = createAsyncThunk('cart/removeCartProduct', async (id) => {
    
    await axios.delete(`http://localhost:3000/api/cart/delete/product/${id}`);
    return id;

});

const CartSlice = createSlice({

    name: 'cart',
    initialState: {

        items: [],
        status: 'idle'

    },
    extraReducers: (build) => {

        build.addCase(fetchCartProduct.fulfilled, (state, action) => {

            state.items = action.payload

        }).addCase(addToCart.fulfilled, (state, action) => {

            const existingCode = state.items.find((item) => item.id === action.payload.id);

            if (existingCode) {
                
                existingCode.quentity += 1;

            } else {
                
                state.items.push({ ...action.payload, quentity: 1});

            }


        }).addCase(removeCartProduct.fulfilled, (state, action) => {

            state.items = state.items.filter((item) => item.id !== action.payload);

        })

    }

});

export default CartSlice.reducer;