import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({

    name: 'wishlist',
    initialState: {

        items: [],
        tempItems: []

    },
    reducers: {

        addToWishList: (state, action) => {

            const existingItems = state.items.find((item) => item.id === action.payload.id);

            if (existingItems) {
                
                existingItems.quantity += 1;

            } else {
                
                state.items.push({...action.payload, quantity: 1})

            }

            state.tempItems = [...state.items];

        },

        removeWishlistProduct: (state, action) => {

            state.items = state.items.filter((item) => item.id !== action.payload);
            state.tempItems = [...state.items];

        }

    }

});

export const { addToWishList, removeWishlistProduct } = WishListSlice.actions; 
export default WishListSlice.reducer;