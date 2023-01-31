import { createSlice } from '@reduxjs/toolkit';
let initialState = []

let userReducer = createSlice({
    name : "user",
    initialState,
    reducers :{
        addUser(state, action){

        },
        deleteUser(state, action){

        },
        updateUser(state, action){

        },
        fetchUser(state, action){
           return action.payload;
        }
    }
    
})

export const { addUser, updateUser, deleteUser, fetchUser } = userReducer.actions;

export default userReducer.reducer;
