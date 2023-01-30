import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../redux/productReducer'
import axios from 'axios'


const Product = () => {
    let dispatch = useDispatch();
    let [pro, setPro] = useState(useSelector(state=>state.productReducer))
    
    let addPro = async ()=>{
        let res = await axios.get("http://fakestoreapi.com/products");
        dispatch(add(res.data))
        setPro(res.data);
    }   

  return (
    <>
        <button onClick={addPro}>Get Data</button>
        <table border="1" align='center'>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    pro.map((p, i)=>{
                        return(
                            <tr key={p.id}>
                                <td>{p.title}</td>
                                <td>{p.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Product