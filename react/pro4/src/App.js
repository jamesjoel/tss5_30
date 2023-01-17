import React from 'react'
import UserRoutes from './routes/UserRoutes';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
const App = () => {
  return (
   <>
    <Header />
    <div className='container' style={{ minHeight : "600px"}}>
      <UserRoutes />
    </div>
    <Footer />
   </>
  )
}

export default App