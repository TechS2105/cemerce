import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'; 

export const fetchWomenProduct = createAsyncThunk('womenProduct/fetchWomenProduct', async () => {
    
    const response = await axios.get('http://localhost:3000/api/women/collections/product');
    return response.data;

})

const WomenCollectionslice = createSlice({

    name: 'womenProduct',
    initialState: {

        items: [],
        status: 'idle'

    },
    extraReducers: (builder) => {

        builder.addCase(fetchWomenProduct.pending, (state) => {

            state.status = "loading"

        }).addCase(fetchWomenProduct.fulfilled, (state, action) => {

            state.status = "succeeded",
            state.items = action.payload

        }).addCase(fetchWomenProduct.rejected, (state) => {

            state.status = "failed"

        })

    }

});

export default WomenCollectionslice.reducer;