import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'
import Add from './components/Add'
import Total from './components/Total'
import Delete from './components/Delete'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="profile" element={<Profile />} />
        <Route path="add" element={<Add />} />
        <Route path="delete/:id" element={<Delete />} />
      </Routes>
    </>
  )
}

const Navbar = ()=> {
  return(
      <>
        <NavLink to="">Home</NavLink>
        <NavLink to="user">User</NavLink>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="add">Add</NavLink>
        
        <Total />
      </>
  )
}




export default App