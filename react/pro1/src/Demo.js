import React, {useState} from 'react';
import axios from 'axios';

const Demo = () => {
    let [arr, setArr] = useState([]);

    let getData = async ()=>{
        let result = await axios.get("https://fakestoreapi.com/products");
        console.log(result.data);
        
    }
    

  return (
    <>
    <div>Demo</div>
    <h4>{ arr }</h4>
    <button onClick={getData}>Hello</button>
    </>
  )
}

export default Demo