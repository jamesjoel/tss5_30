import { createReducer } from '@reduxjs/toolkit'
const initialState = {
    name : "aman",
    age : 25,
    city : "indore"
}

// const UPDATE_NAME = 'UPDATE_NAME'

const userReducer = createReducer(initialState, (builder)=>{ // builder
    builder.addCase('UPDATE_NAME', (state, action)=>{
        state.name = action.payload;
    });
    builder.addCase('UPDATE_AGE', (state, action)=>{
        state.age = action.payload;
    });
});

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




export default userReducer;