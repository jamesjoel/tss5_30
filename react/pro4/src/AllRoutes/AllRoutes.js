import React from 'react'
import { useRoutes } from 'react-router-dom'
import UserRoutes from './UserRoutes'
import AdminRoutes from './AdminRoutes'

import RootLayout from '../root/RootLayout/RootLayout'
import AdminLayout from '../admin/AdminLayout/AdminLayout'



const AllRoutes = () => {
  const router = useRoutes([
    {
      path : '',
      element : <RootLayout />,
      children : UserRoutes
    },
    {
      path : 'admin',
      element : <AdminLayout />,
      children : AdminRoutes
    }
  ]);

  return(router)
}

export default AllRoutes