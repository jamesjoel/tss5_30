import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    name : "nidhi",
    fee : 5000
}

let stuSlice = createSlice({
    name : "student",
    initialState,
    reducers : {
        changeName(state, action){
            state.name = action.payload
        },
        changeFee(state, action){
            state.fee = action.payload
        }
    }
})

export default stuSlice.reducer;
export const { changeName, changeFee  } = stuSlice.actions;