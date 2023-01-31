import { createSlice } from '@reduxjs/toolkit'
let initialState = [];
let productReducer = createSlice({
    name : "product",
    initialState,
    reducers : {
        add(state, action){
            // state = action.payload;
            return action.payload;
        }
    }
})

export default productReducer.reducer;
export const {add} = productReducer.actions;