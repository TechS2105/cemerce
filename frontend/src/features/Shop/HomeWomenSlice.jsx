import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHomeWomenProduct = createAsyncThunk('homeWomneProduct/fetchHomeWomenProduct', async () => {
    
    const response = await axios.get(
      "https://cemerce.onrender.com/api/women/product"
    );
    return response.data;

});

const HomeWomenSlice = createSlice({

    name: 'homeWomenProduct',
    initialState: {

        items: [],
        status: 'idle'

    },
    extraReducers: (builder) => {

        builder.addCase(fetchHomeWomenProduct.pending, (state) => {

            state.status = "loading"

        }).addCase(fetchHomeWomenProduct.fulfilled, (state, action) => {

            state.status = "succeeded",
                state.items = action.payload

        }).addCase(fetchHomeWomenProduct.rejected, (state) => {

            state.status = 'failed'

        });

    }

});

export default HomeWomenSlice.reducer;