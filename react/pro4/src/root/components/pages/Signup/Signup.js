import React from 'react';
import { useFormik } from 'formik';
import SignupSchema from '../../../../schemas/SignupSchema';

const user = {
    fullname : "",
    email : "",
    password : "",
    re_pass : ""
}

const Signup = () => {
    let {values, handleSubmit, handleBlur, handleChange, errors, touched} =useFormik({
        initialValues : user,
        validationSchema : SignupSchema,
        onSubmit : ()=>{
            console.log(values);
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
                    <input onChange={handleChange} onBlur={handleBlur} name='fullname' type='text' className={'form-control '+ (errors.fullname && touched.fullname ? 'is-invalid':'')} />
                    {
                        errors.fullname && touched.fullname ? (<ErrMsg msg = {errors.fullname} />) : null
                    }
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input onChange={handleChange} onBlur={handleBlur} name='email' type='text' className={'form-control '+(errors.email && touched.email ? 'is-invalid' : '')} />
                    {
                        errors.email && touched.email ? (<ErrMsg msg={errors.email} />) : null
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={handleChange} onBlur={handleBlur} name='password' type='password' className={'form-control '+(errors.password && touched.password ? 'is-invalid' : '')} />
                    {
                        errors.password && touched.password ? (<ErrMsg msg={errors.password} />) : null
                    }
                </div>
                
                <div className="form-group">
                    <label>Re-Password</label>
                    <input onChange={handleChange} onBlur={handleBlur} name='re_pass' type='password' className={'form-control '+(errors.re_pass && touched.re_pass ? 'is-invalid' : '')} />
                    {
                        errors.re_pass && touched.re_pass ? (<ErrMsg msg={errors.re_pass} />) : null
                    }
                </div>
                
                <br />
                <br />
                <input type='submit' value='Signup' className='btn btn-success' />
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