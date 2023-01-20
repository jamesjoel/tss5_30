import Dashboard from '../admin/components/pages/Dashboard/Dashboard'
import Setting from '../admin/components/pages/Setting/Setting'
import Products from '../admin/components/pages/Products/Products';
let AdminRoutes = [
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

export default AdminRoutes;