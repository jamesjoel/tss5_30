import React, { useState, useEffect } from 'react'

const App = () => {
    // let a = 100;

    // let a;
    let [a, setA] = useState(100);
    let [name, setName] = useState();
    let [newName, setNewName] = useState("");
    
    let demo =(x)=>{
        // console.log(x);
        setA(x);
       
    }

    let changeName = ()=>{
        setName(newName);
    }

  return (
    <>
    <h1>Home Page</h1>
    <h2>Total : { a }</h2>
    <br />
    <h3>Your Name : { name }</h3>
    <br />
    Name : <input onChange={(e)=>{
        setName(e.target.value);
        //setNewName(e.target.value);
        
    }} type="text" />
    <button onClick={changeName}>Change</button>
    <br />
    <br />
    <button onClick={()=>{
        demo(200);
    }}>OK</button>
    </>
  )
}

export default App