import { useState, useEffect, useRef } from 'react';

const App = () => {

  // let arr = useState("rohit");
  // let name = arr[0];
  // let fn = arr[1];

  let x = useRef(0);

  
  



  return (
    <>
    <h1>{x.current}</h1>
      Name : <input type="text" ref={x}/>
      

    </>
  )
}

// demo100

export default App