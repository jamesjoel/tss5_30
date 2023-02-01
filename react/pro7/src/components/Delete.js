import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { deleteUser } from '../redux/userReducer'

const Delete = () => {
    let navigate = useNavigate();
    let param = useParams();
    let dispatch = useDispatch();
    let id = param.id;
    axios.delete("http://localhost:4200/api/delete/"+id).then(res=>{

        dispatch(deleteUser(id));
        // console.log(res.data);
        navigate("/user");
    })

    

    return(
        <></>
    )
}

export default Delete