import React, { Children, useEffect } from 'react'
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import About from './component/About';
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Setting from './component/Setting';

const App2 = () => {
  return (
    <>
    <Navbar />
    <AllRoutes />
    </>
  )
}


const AllRoutes = ()=>{
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='admin' element={<AdminLayout />} >
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='setting' element={<Setting />} />
                </Route>
            </Routes>
        </>
    )
}


const AdminLayout = ()=>{
    let navigate = useNavigate();
    let check = true;

    useEffect(()=>{
        if(check==false){
            navigate("/")
        }
    }, [])
    return(
        <>

        <Outlet />
        
        </>
    )
}

export default App2