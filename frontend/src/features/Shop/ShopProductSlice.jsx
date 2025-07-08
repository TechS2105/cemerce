import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShopProduct = createAsyncThunk('shopProduct/fetchShopProduct', async () => {
    
    const response = await axios.get(
      "https://cemerce.onrender.com/api/shop/product"
    );
    return response.data;

});

const ProductSlice = createSlice({

    name: 'shopProduct',
    initialState: {

        items: [],
        status: 'idle'

    },
    extraReducers: (builder) => {

        builder.addCase(fetchShopProduct.pending, (state) => {

            state.status = "loading"

        }).addCase(fetchShopProduct.fulfilled, (state, action) => {

            state.status = "succeeded",
            state.items = action.payload

        }).addCase(fetchShopProduct.rejected, (state) => {

            state.status = "failed"

        });

    }

});

export default ProductSlice.reducer;