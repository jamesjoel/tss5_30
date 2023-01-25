import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Outlet />
    </>
  )
}

export default Navbar