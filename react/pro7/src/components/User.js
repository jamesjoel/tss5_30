import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import {fetchUser} from '../redux/userReducer'

const User = () => {

    let data = useSelector(state=>state);
    let dispatch = useDispatch()

    let getdata = async ()=>{
        let res = await axios.get("http://localhost:4200/api/get")
        console.log(res.data);
        dispatch(fetchUser(res.data))
    }

  return (
    <>
    <br />
    <br />
        <button onClick={getdata}>Get Data</button>
        <br />

        {
            data.map(u => (<h2 key={u._id}>{u.name}</h2>))
        }
        
        
    </>
  )
}

export default User