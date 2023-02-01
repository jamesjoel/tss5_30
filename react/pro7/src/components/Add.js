import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addUser} from '../redux/userReducer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Add = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [obj, setObj] = useState({
        name : "",
        age : "",
        city : ""
    });

    let save = async ()=>{
        // console.log(obj);
        // return;
        let res =await axios.post("http://localhost:4200/api/save", obj)
        
        dispatch(addUser(res.data));
        navigate("/user");
        //console.log("Saved");
    }
  return (
    <>
    <br />
    <br />
        Name : <input type="text" value={obj.name} onChange={(e)=>setObj({...obj, name : e.target.value})}/>
        <br />
        <br />
        Age : <input type="text" value={obj.age} onChange={(e)=>setObj({...obj, age : e.target.value})}/>
        <br />
        <br />
        City : <select onChange={(e)=>setObj({...obj, city : e.target.value})}>
            <option value="" >Select</option>
            <option value="indore">Indore</option>
            <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <br />
        <button onClick={save}>Add</button>
    </>
  )
}

export default Add