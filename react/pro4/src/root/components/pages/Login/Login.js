import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { doLogin } from '../../../../services/UserService'
import { AlertDanger } from '../../../../shared/Alerts/Alert'

const Login = () => {

  let navigate = useNavigate();
  let [user, setUser] = useState({
    email : "",
    password : ""
  })

  let [showAlert, setShowAlert] = useState(false);
  let [msg, setMsg] = useState("");

  let submit = ()=>{
    doLogin(user).then(result=>{ 
      
      if(result.data.success == true)
      {
        localStorage.setItem("token", result.data.token);
        navigate("/profile");
      }

      if(result.data.errType == 1){
        setShowAlert(true);
        setMsg("This Email and Password is incorrect");
      }
      if(result.data.errType == 2){
        setShowAlert(true);
        setMsg("This Password is incorrect");
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="container" style={{minHeight : '700px'}}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3>User Login</h3>
          <div className="form-group">
            <label htmlFor="">Email/Username</label>
            <input 
              type="text" 
              value={user.email} 
              onChange={(e)=>setUser({...user, email : e.target.value})} 
              className='form-control' />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input 
              type="password" 
              value={user.password} 
              onChange={(e)=>setUser({...user, password : e.target.value})} 
              className='form-control' />
          </div>
          {
            showAlert ? <AlertDanger msg={msg} /> : ''
          }
          <br />
          <button className='btn btn-success' onClick={submit}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login