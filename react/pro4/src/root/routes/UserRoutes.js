import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';
import Student from '../components/pages/Student/Student'
import List from '../components/pages/Student/List';
import Signup from '../components/pages/Signup/Signup';


const UserRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/student' element={<Student />} />
            <Route path='/student/edit/:id' element={<Student />} />
            <Route path='/student/list' element={<List />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    </>
  )
}

export default UserRoutes