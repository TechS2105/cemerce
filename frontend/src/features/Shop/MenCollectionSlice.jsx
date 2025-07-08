import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMenCollections = createAsyncThunk('menCollections/fetchMenCollections', async () => {

    const response = await axios.get(
      "https://cemerce.onrender.com/api/men/collections/product"
    );
    return response.data;

});

const MenCollectionSlice = createSlice({

    name: 'menCollections',
    initialState: {

        items: [],
        status: 'idle'

    },
    extraReducers: (builder) => {

        builder.addCase(fetchMenCollections.pending, (state) => {

            state.status = 'loading'

        }).addCase(fetchMenCollections.fulfilled, (state, action) => {

            state.status = 'succeeded',
            state.items = action.payload

        }).addCase(fetchMenCollections.rejected, (state) => {

            state.status = 'failed'

        })

    }

});

export default MenCollectionSlice.reducer;