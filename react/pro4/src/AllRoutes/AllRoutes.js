import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../root/components/pages/Home/Home'
import About from '../root/components/pages/About/About'
import Student from '../root/components/pages/Student/Student'
import Signup from '../root/components/pages/Signup/Signup'
import List from '../root/components/pages/Student/List'
import RootLayout from '../root/RootLayout/RootLayout'
import AdminLayout from '../admin/AdminLayout/AdminLayout'
import Dashboard from '../admin/components/pages/Dashboard/Dashboard'
import Setting from '../admin/components/pages/Setting/Setting'
import Products from '../admin/components/pages/Products/Products';



const AllRoutes = () => {
  const router = useRoutes([
    {
      path : '',
      element : <RootLayout />,
      children : [
        {
          index : true,
          element : <Home />
        },
        {
          path : 'about',
          element : <About />
        },
        {
          path : 'student',
          element : <Student />
        }
      ]
    },
    {
      path : 'admin',
      element : <AdminLayout />,
      children : [
        {
          index : true,
          element :<Dashboard />
        },
        {
          path : "setting",
          element : <Setting />
        },
        {
          path : "product",
          element :<Products />
        }
      ]
    }
  ]);

  return(router)
}

export default AllRoutes