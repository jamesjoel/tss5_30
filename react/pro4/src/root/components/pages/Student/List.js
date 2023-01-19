import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData, deleteData } from '../../../../services/StudentService';

const List = () => {
  let [allStu, setAllStu] = useState([]);
  let navigate = useNavigate();

  useEffect(()=>{
    getData().then(result=>{
      // console.log(result.data);
      setAllStu(result.data);
    })
  }, []);


  let remove=(obj)=>{
    // console.log(obj);
    deleteData(obj.id).then(result=>{
      // console.log(result.data);
      setAllStu((preData)=>{
        return preData.filter(item => item != obj);
      })
    })
  }

  let edit=(obj)=>{
    // navigate("/student/edit/"+obj.id)
    navigate(`/student/edit/${obj.id}`)
  }

  return (
    <div className='container' style={{minHeight : "700px"}}>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-dark">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  allStu.map((s, i)=>{
                    return(
                      <tr key={s.id}>
                        <td>{ i+1 }</td>
                        <td>{ s.name }</td>
                        <td>{ s.age }</td>
                        <td>{ s.city }</td>
                        <td><button className='btn btn-sm btn-info' onClick={()=>edit(s)}>Edit</button></td>
                        <td><button className='btn btn-sm btn-danger' onClick={()=>remove(s)}>Delete</button></td>
                      </tr>
                    )
                  })
                }
              </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default List