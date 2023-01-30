import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { changeName, changeFee } from '../redux/stuReducer';
const Demo2 = () => {
  let dispatch = useDispatch();
  let stu = useSelector(state=>state.studentReducer)  
  let fn1 = ()=>{
    dispatch(changeName('jaya'));
  }
  let fn2 = ()=>{
    dispatch(changeFee(7500));
  }
  return (
    <>
        <div>Demo2</div>
        <h2>{stu.name}</h2>
        <h2>{stu.fee}</h2>
        <button onClick={fn1}>Name</button>
        <button onClick={fn2}>Fee</button>
    </>
  )
}

export default Demo2