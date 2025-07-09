import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchKidCollections = createAsyncThunk('kidCollections/fetchKidCollections', async () => {
    
    const response = await axios.get('http://localhost:3000/api/kids/collections/product');
    return response.data;

});

const KidCollectionsSlice = createSlice({

    name: 'kidCollections',
    initialState: {

        items: [],
        status: 'idle'

    }, 

    extraReducers: (builder) => {

        builder.addCase(fetchKidCollections.pending, (state) => {

            state.status = 'loading'

        }).addCase(fetchKidCollections.fulfilled, (state, action) => {

            state.status = 'succeeded',
            state.items = action.payload

        }).addCase(fetchKidCollections.rejected, (state) => {

            state.status = 'failed'

        })

    }

});

export default KidCollectionsSlice.reducer;