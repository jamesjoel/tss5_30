import React from 'react'
import { useSelector } from 'react-redux'

const Demo = () => {
    let {age} = useSelector(state=>state);
  return (
    <button>Age {age}</button>
  )
}

export default Demo