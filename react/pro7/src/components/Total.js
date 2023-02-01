import React from 'react'
import { useSelector } from 'react-redux'

const Total = () => {
  let data = useSelector(state=>state);
  return (
    <button>Total User {data.length}</button>
  )
}

export default Total