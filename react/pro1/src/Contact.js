import React, {createContext, useContext} from 'react'

let Data = createContext();

const Contact = () => {
    let a = "Hello";
  return 
  (
    <>
        <Data.Provider value={a}>
            <Box1/>

        </Data.Provider>
    </>
  )
}


const Box1 = ()=>{
    
    <Box2/>
}

const Box2 = ()=>{
    
    <Box3/>
}

const Box3 = ()=>{
    let a = useContext(Data);
    return(
        <h1>{a}</h1>
    )
}

export default Contact