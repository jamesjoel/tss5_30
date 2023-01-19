import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

       <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/admin/setting">Setting</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/admin/product">Products</NavLink>
            </li>
            
        </ul>

    </nav>
  )
}

export default Header