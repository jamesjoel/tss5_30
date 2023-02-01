import { createSlice } from '@reduxjs/toolkit';
let initialState = []

let userReducer = createSlice({
    name : "user",
    initialState,
    reducers :{
        getUser(state, action){
            return action.payload;
        },
        addUser(state, action){
            return [...state, action.payload];
        },
        deleteUser(state, action){
            // console.log(action.payload);
            // console.log(state);
            // return state.filter(item => item !== action.payload)
            let x = 0;
            state.forEach((item, n)=>{
                if(item._id == action.payload){
                    x = n;
                    return;
                }
            })

            state.splice(x, 1);
            return state;
        }
    }
    
})

export const {getUser, addUser, deleteUser} = userReducer.actions;

export default userReducer.reducer;
