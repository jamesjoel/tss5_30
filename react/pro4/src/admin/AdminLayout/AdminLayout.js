import React from 'react'
import Header from '../components/shared/Header/Header'
import Footer from '../components/shared/Footer/Footer'
import { Outlet } from 'react-router-dom'
const AdminLayout = () => {
  return (
    <>
        <Header />
            <div className="container" style={{minHeight : '700px'}}>
              <Outlet />
            </div>
        <Footer />
    </>
  )
}

export default AdminLayout