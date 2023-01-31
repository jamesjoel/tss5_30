import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../redux/productReducer'
import axios from 'axios'


const Product = () => {
    let dispatch = useDispatch();
    let pro = useSelector(state=>state.productReducer);
    console.log(pro);
    //let [pro, setPro] = useState(useSelector(state=>state.productReducer))
    
    let addPro = async ()=>{
        let res = await axios.get("http://fakestoreapi.com/products");
        dispatch(add(res.data))
        //setPro(res.data);
    }   

    useEffect(()=>{
        addPro();
    }, [])

  return (
    <>
        
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
                                <td>{p.id}</td>
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