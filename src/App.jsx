import { Outlet } from "react-router-dom"
import Footer from "./Components/Shared/Footer"
import NavbarTop from "./Components/Shared/NavbarTop"

function App() {


  return (
    <div className="myContainer">
      <NavbarTop />
      <div className="min-h-[calc(100vh-130px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
