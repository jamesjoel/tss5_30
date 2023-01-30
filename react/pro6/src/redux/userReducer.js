import { createReducer, createSlice } from '@reduxjs/toolkit'
const data = {
    name : "aman",
    age : 25,
    city : "indore"
}

const userSlice = createSlice({
    name : "user",
    initialState : data,
    reducers : {
        updateName(state, action){
            state.name = action.payload
        },
        updateAge(state, action){
            state.age = action.payload
        },
        updateCity(state, action){
            state.city = action.payload
        }
    }
    // initialState, 

})
export const { updateAge, updateName, updateCity } = userSlice.actions;

export default userSlice.reducer;

// const UPDATE_NAME = 'UPDATE_NAME'

// const userReducer = createReducer(initialState, (builder)=>{ // builder
//     builder.addCase('UPDATE_NAME', (state, action)=>{
//         state.name = action.payload;
//     });
//     builder.addCase('UPDATE_AGE', (state, action)=>{
//         state.age = action.payload;
//     });
//     builder.addCase('UPDATE_CITY', (state, action)=>{
//         state.city = action.payload;
//     });
// });

/*let userReducer = (state = initialState, action)=>{
    // if(action.type == "UPDATE_NAME"){
    //     return {...state, name : action.payload}
    // }
    // if(action.type=="UPDATE_AGE"){
    //     return {...state, age : action.payload}
    // }
    // return state;

    switch(action.type){
        case "UPDATE_NAME" : return {...state, name : action.payload}
                            
        case "UPDATE_AGE" : return {...state, age : action.payload}

        default : return state;
    }
}
*/



