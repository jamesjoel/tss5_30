import React from 'react';
import { NavLink, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Demo from './components/Demo';
import Product from './components/Product';

const App = () => {
  return (
    <>
      <Navbar />
      <AllRoute />
    </>
  )
}

const Navbar = ()=>{
  return(
    <>
        <NavLink to="">Home</NavLink>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="product">Product</NavLink>
        <Demo />
    </>
  )
}

const AllRoute = ()=>{
  return(
    <>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='profile' element={<Profile />} />
        <Route path='product' element={<Product />} />
      </Routes>
    </>
  )
}

export default App