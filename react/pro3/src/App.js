import MainRoutes from "./routes/MainRoutes"
import Header from "./components/shared/Header/Header"
import Footer from "./components/shared/Footer/Footer"
const App = () => {
  return (
    <>
      <Header />
      <div className="container" style={{ minHeight : "600px" }}>
        <MainRoutes />    
      </div>
      <Footer />
    </>
  )
}


export default App