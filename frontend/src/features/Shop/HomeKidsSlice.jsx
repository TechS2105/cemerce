import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchKidsHomeProduct = createAsyncThunk('homeKidsProduct/fetchKidsHomeProduct', async () => {
    
    const response = await axios.get(
      "https://cemerce.onrender.com/api/kids/product"
    );
    return response.data;

});

const HomeKidsSlice = createSlice({

    name: 'homeKidsProduct',
    initialState: {

        items: [],
        status: 'idle'

    },
    extraReducers: (builder) => {

        builder.addCase(fetchKidsHomeProduct.pending, (state) => {

            state.status = 'loading'

        }).addCase(fetchKidsHomeProduct.fulfilled, (state, action) => {

            state.status = 'succeeded',
            state.items = action.payload

        }).addCase(fetchKidsHomeProduct.rejected, (state) => {

            state.status = 'failed'

        })

    }

});

export default HomeKidsSlice.reducer;