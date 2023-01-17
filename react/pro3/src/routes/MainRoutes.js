import { Routes, Route } from 'react-router-dom';

import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About'
import Contact from '../components/pages/Contact/Contact'
import Products from '../components/pages/Products/Products';



const MainRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product' element={<Products />} />
        </Routes>

    </>
  )
}

export default MainRoutes;