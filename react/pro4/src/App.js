import React, { useEffect, useState} from 'react'
import AllRoutes from './AllRoutes/AllRoutes'
import { getData } from './services/CityService';
import AllData from './hooks/CityHook';


const App = () => {
  let [city, setCity] = useState([]);
  useEffect(()=>{
    getData().then(result=>{
      setCity(result.data);
  })
  }, [])
  return (
   <>
    <AllData.Provider value={city}>
        <AllRoutes />
    </AllData.Provider>
   </>
  )
}

export default App;
