
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { updateAge, updateCity, updateName } from '../redux/userReducer'

const Profile = () => {
// let data = useSelector((result)=>{
//     return result;
// });    
let dispatch = useDispatch();

// dispatch({
//     type : 'UPDATE_NAME',
//     payload : 'rohit'
// });
// we send to 'ACTION' to dispatch
// 'ACTION' is just a JS object wich can content 
// 'type' and 'payload'

let changeName = ()=>{
    // dispatch({
    //     type : "UPDATE_NAME",
    //     payload : "rohit"
    // })
    dispatch(updateName('gaurav'))
}

let changeAge = ()=>{
    // dispatch({
    //     type : "UPDATE_AGE",
    //     payload : 30
    // })
    dispatch(updateAge(22))
}

let changeCity = ()=>{
    // dispatch({
    //     type : 'UPDATE_CITY',
    //     payload : "Mumbai"
    // })
    dispatch(updateCity('pune'))
}

let data = useSelector(state=>state.userReducer);
console.log(data)
  return (
    <>
        <div>Profile</div>
        <h2>{data.name}</h2>
        <h2>{data.age}</h2>
        <h2>{data.city}</h2>
        <br />
        <button onClick={changeName}>Change Name</button>
        <button onClick={changeAge}>Update Age</button>
        <button onClick={changeCity}>Update City</button>
    </>
  )
}

export default Profile