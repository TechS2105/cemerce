import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHomeMenProduct = createAsyncThunk('homemenProduct/fetchHomeMenProduct', async () => {
    
    const response = await axios.get('http://localhost:3000/api/men/product');
    return response.data;

});

const HomeMenSlice = createSlice({

    name: 'homeMenProduct',
    initialState: {

        items: [],
        status: 'idle'

    },

    extraReducers: (builder) => {

        builder.addCase(fetchHomeMenProduct.pending, (state) => {

            state.status = "loading"

        }).addCase(fetchHomeMenProduct.fulfilled, (state, action) => {

            state.status = "succeeded"
            state.items = action.payload

        }).addCase(fetchHomeMenProduct.rejected, (state) => {

            state.status = 'failed'

        })

    },

});

export default HomeMenSlice.reducer;