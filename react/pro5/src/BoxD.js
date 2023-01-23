import React, {useContext} from 'react'
import { AllData, Demo } from './App';

const BoxD = () => {
    let obj = useContext(AllData);
        let y = useContext(Demo);
        // console.log(name)
      
        let fn = ()=>{
          //console.log("**************");
          obj.y();
        }
  
    
        
        return(
          <>
            
            <h1>BoxD {obj.x}{y}</h1>
            <button onClick={fn}>OK</button>
            
          </>
        )
     
      
 
}

export default BoxD