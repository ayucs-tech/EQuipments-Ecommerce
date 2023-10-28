import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",     //name of slice
    initialState: { items: [] },
    reducers: { //these reducers will modify our initial state
        //action when reducer function will be called : reducer function
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items=[]; 
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;