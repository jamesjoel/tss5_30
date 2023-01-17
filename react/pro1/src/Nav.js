import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <>
        
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
   
    </>
  )
}

export default Nav