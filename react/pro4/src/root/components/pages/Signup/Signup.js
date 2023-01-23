import React, { useState, useContext } from 'react';
import AllData from '../../../../hooks/CityHook';
import { useFormik } from 'formik';
import SignupSchema from '../../../../schemas/SignupSchema';
import { saveData } from '../../../../services/UserService';

import { useNavigate } from 'react-router-dom'
import { AlertDanger } from '../../../../shared/Alerts/Alert';

const user = {
    fullname : "",
    email : "",
    password : "",
    re_pass : "",
    contact : "",
    city : ""
}

const Signup = () => {
    // let [city, setCity] = useState([]);
    let city = useContext(AllData);
   

    

    let navigate = useNavigate();
    let [showAlert, setShowAlert] = useState(false);
    let [showSpinner, setShowSpinner] = useState(false);
    let {values, handleSubmit, handleBlur, handleChange, errors, touched} =useFormik({
        initialValues : user,
        validationSchema : SignupSchema,
        onSubmit : ()=>{
            setShowSpinner(true);
            // console.log(values);
            saveData(values).then(result=>{
                // console.log(result.data);
                if(result.data.status == 200){
                    navigate("/login");
                }else{
                    setShowAlert(true);
                }
                setShowSpinner(false);
            }).catch(err=>{
                //console.log('-----',err);
                setShowAlert(true);
                setShowSpinner(false);
            })
        }
    });
  return (
    <div className="container my-5" style={{minHeight : '700px'}}>
            <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3>Registration</h3>
                <div className="form-group">
                    <label>Full Name</label>
                    <input autoComplete='off' onChange={handleChange} onBlur={handleBlur} name='fullname' type='text' className={'form-control '+ (errors.fullname && touched.fullname ? 'is-invalid':'')} />
                    {
                        errors.fullname && touched.fullname ? (<ErrMsg msg = {errors.fullname} />) : null
                    }
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input autoComplete='off' onChange={handleChange} onBlur={handleBlur} name='email' type='text' className={'form-control '+(errors.email && touched.email ? 'is-invalid' : '')} />
                    {
                        errors.email && touched.email ? (<ErrMsg msg={errors.email} />) : null
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input autoComplete='off' onChange={handleChange} onBlur={handleBlur} name='password' type='password' className={'form-control '+(errors.password && touched.password ? 'is-invalid' : '')} />
                    {
                        errors.password && touched.password ? (<ErrMsg msg={errors.password} />) : null
                    }
                </div>
                
                <div className="form-group">
                    <label>Re-Password</label>
                    <input autoComplete='off' onChange={handleChange} onBlur={handleBlur} name='re_pass' type='password' className={'form-control '+(errors.re_pass && touched.re_pass ? 'is-invalid' : '')} />
                    {
                        errors.re_pass && touched.re_pass ? (<ErrMsg msg={errors.re_pass} />) : null
                    }
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input autoComplete='off' onChange={handleChange} onBlur={handleBlur} name='contact' type='text' className={'form-control '+(errors.contact && touched.contact ? 'is-invalid' : '')} />
                    {
                        errors.contact && touched.contact ? (<ErrMsg msg={errors.contact} />) : null
                    }
                </div>
                <div className="form-group">
                    <label>City</label>
                    <select name='city' onChange={handleChange} className={'form-control '+(errors.city && touched.city ? 'is-invalid' : '')} >
                        <option value="">Select City</option>
                        {
                            city.map(obj=>(<option key={obj.id} value={obj.id}>{obj.name}</option>))
                        }
                    </select>
                    {
                        errors.city && touched.city ? (<ErrMsg msg={errors.city} />) : null
                    }
                </div>
                
                <br />
                {
                    showAlert ? (<AlertDanger msg="Somthing went wrong" />) : ''
                }
                
                <br />
                <button type='submit' className='btn btn-success' >Signup { showSpinner ? (<span className='spinner-border spinner-border-sm text-light'></span>) : '' }</button>

            </div>
        </div>
            </form>
    </div>
  )
}

let ErrMsg = ({msg})=>{
    return(
        <small className='text-danger'>{msg}</small>
    )
}

export default Signup