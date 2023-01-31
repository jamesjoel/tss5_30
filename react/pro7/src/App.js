import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="profile" element={<Profile />} />
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
      </>
  )
}




export default App