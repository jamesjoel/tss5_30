import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { saveData, getDataById, updateData } from '../../../services/StudentService';
let Student = ()=>{
    // let [fullName, setFullName] = useState("");
    // let [age, setAge] = useState("");
    // let [city, setCity] = useState("");

    let navigate = useNavigate();
    let params = useParams();
    // console.log(params);
    let [user, setUser] = useState({})
        useEffect(()=>{
            
                if(params.id){
                    
                    getDataById(params.id).then(result=>{
                            setUser(result.data);
                        })
                    }else{
                    
                        setUser({
                            name : "",
                            age : "",
                            city : ""
                        })
                    }
                
            
        }, [params.id])
    


    let setData = (e, attr)=>{
        setUser((prevData)=>({...prevData,  [attr] : e.target.value}));
        // setUser((prevData)=> {...prevData, [attr] : e.target.value} )
    }


    let save = ()=>{
        // axios.post("http://localhost:4200/student", user).then(result=>{
        //     console.log(result.data);
        // })]
        if(params.id){
            updateData(params.id, user).then(result=>{
                navigate("/student/list");
            })
        }else{

            saveData(user).then(result=>{
                navigate("/student/list");
            })
        }
    }
    

    return(
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        
                        <div className="form-group">
                            <label htmlFor="">Full Name</label>
                            <input type="text" value={user.name} onChange={(e)=>setData(e, "name")} className="form-control" />
                    
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Age</label>
                            <input type="text" value={user.age} onChange={(e)=>setData(e, "age")} className="form-control" />
                    
                        </div>
                        <div className="form-group">
                            <label htmlFor="">City</label>
                            <select value={user.city} onChange={(e)=>setData(e, "city")} className="form-control" >
                                <option>Select</option>
                                <option>Indore</option>
                                <option>Mumbai</option>
                                <option>Pune</option>
                                <option>Delhi</option>
                            </select>
                    
                        </div>

                        <br />
                        <br />
                        <input type="button" onClick={save} className="btn btn-success"  value={params.id ? 'Update' : 'Add' } />
                    </div>
                </div>
            </div>
    
        </>
    )
}

export default Student;