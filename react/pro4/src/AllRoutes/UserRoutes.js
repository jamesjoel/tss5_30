import Home from '../root/components/pages/Home/Home'
import About from '../root/components/pages/About/About'
import Student from '../root/components/pages/Student/Student'
import Signup from '../root/components/pages/Signup/Signup'

import Login from '../root/components/pages/Login/Login'
let UserRoutes = [
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
    },
    {
      path : "signup",
      element : <Signup />
    },
    {
      path : 'login',
      element : <Login />
      
    }
  ]

export default UserRoutes;