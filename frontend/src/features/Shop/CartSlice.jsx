import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({

    name: 'cart',
    initialState: {
        
        items: [],
        tempItems: [],
        totalPrice: 0

    },
    reducers: {

        addToCart: (state, action) => {

            const existingItems = state.items.find((item) => item.id === action.payload.id);

            if (existingItems) {
                
                existingItems.quantity += 1

            } else {
                
                state.items.push({ ...action.payload, quantity: 1 });

            }

            state.tempItems = [...state.items];
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0);

        },

        removeCartProduct: (state, action) => {

            state.items = state.items.filter((item) => item.id !== action.payload);

            state.tempItems = [...state.items];
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price, 0);

        }

    }

});

export const { addToCart, removeCartProduct } = CartSlice.actions;
export default CartSlice.reducer;