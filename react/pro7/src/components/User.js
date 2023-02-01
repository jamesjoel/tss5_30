import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import {getUser} from '../redux/userReducer'
import { NavLink } from 'react-router-dom'

const User = () => {
    let dispatch = useDispatch();
    let data = useSelector(state=>state)
    

    let getdata = async ()=>{
        let res = await axios.get("http://localhost:4200/api/get")
    
        dispatch(getUser(res.data));
    }

    useEffect(()=>{
      if(data.length == 0)
      {
        console.log("**************");
        getdata();
      }
    }, [])

  return (
    <>
    <br />
    <br />
        
        <table border="1" align='center' width="500">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map((obj, i)=>{
                return(
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{obj.name}</td>
                    <td>{obj.age}</td>
                    <td>{obj.city}</td>
                    <td><NavLink to={'/delete/'+obj._id}>Delete</NavLink></td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>

        
        
        
    </>
  )
}

export default User