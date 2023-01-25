import React, {useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

const ProfileLayout = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("token")){
            navigate("/");
        }
    }, [])

  return (
    <>
    <Outlet />
    </>
  )
}

export default ProfileLayout