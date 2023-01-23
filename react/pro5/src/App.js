import React, {createContext, useContext} from 'react'
import BoxD from './BoxD';

let AllData = createContext();
let Demo = createContext();
const App = () => {
  let name = "rohit";
  let city = "indore";
  let hello = ()=>{
    console.log("hello");
  }

  let obj = { x : name, y : hello}
  return (
    <>
    <AllData.Provider value={obj}>
      <Demo.Provider value={city}>
        <div>App</div>
        <BoxA/>
      </Demo.Provider>
    </AllData.Provider>
    </>
  )
}

const BoxA = ()=>{
  return(
    <BoxB/>
  )
}

const BoxB = ()=>{
  return(
    <BoxC/>
  )
}

const BoxC = ()=>{
  let x = useContext(Demo);
  return(
    <>
      <BoxD/>
      <h1>{x}</h1>
    </>
  )
}


export default App;
export { AllData, Demo };